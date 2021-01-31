'use strict'; //significa que tiene que segur extrictamentes las leyes de best practices de js

var moment = require('moment');

/**
 * Returns a string element with a footer and updating year
 * @param {string} name
 * @return {string}
 */
exports.footer = function(name) {
    return "Copyright " + moment().format('YYYY') + " " + name + " All rights reserved";
};