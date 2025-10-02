'use strict';

var yamlJs = require('yamljs')    // https://tonicdev.com/npm/yamljs
  , path = require('path')
  , fileIO = require('../../utils/file-io');

/**
 * Writes the side menu and forward the arguments to the next step
 * @param structure
 * @param destinationDir
 * @param callback
 */
module.exports = function (structure, destinationDir, callback) {

  var entries = structure.hierarchy.children[0].children.map(recursiveAppEntries)
    , pageTreeYml = yamlJs.stringify(entries, 1000000, 2)     // big number to prevent inline syntax
    , pageTreeFilePath = path.join(destinationDir, '_data', 'page_tree.yml')
    ;

  fileIO.write(pageTreeFilePath, pageTreeYml, function (err) {
    if (err) {
      return callback(err);
    }

    callback(null, structure, destinationDir);
  });

  function recursiveAppEntries(pageDetails) {

    var entry = buildEntry(pageDetails);
    if (pageDetails.children) {
      entry.children = pageDetails.children.map(recursiveAppEntries);
    }

    return entry;
  }

  function buildEntry(pageDetails) {
    return {
      title: pageDetails.title,
      url: pageDetails.destinationFileLink
    };
  }

};
