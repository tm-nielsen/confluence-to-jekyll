'use strict'

module.exports = {
    format
}

function format(rawName) {
    return rawName.toLowerCase().replace(/([^a-z0-9\.]|\s)+/g, '-');
}