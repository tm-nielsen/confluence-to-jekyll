'use strict';

/**
 * Adds the front matter for the file
 * @param structure
 * @param pageDetails
 * @param destinationDir
 * @param md
 * @param callback
 */
module.exports = function (structure, pageDetails, destinationDir, md, callback) {

  // https://github.com/strongloop/loopback.io/wiki/Conversion-rules
  var frontMatter = [
    '---',
    'title: "' + pageDetails.title + '"',
    'lang: en',
    'layout: page',
    'permalink: ' + pageDetails.destinationFileLink,
    '---'
  ].join('\n');

  callback(null, structure, pageDetails, destinationDir, frontMatter + '\n\n' + md);

};
