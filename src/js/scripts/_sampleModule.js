'use strict';

/**
 *  Initialize sampleModule
 *
 *  A standalone JS module
 */

var sampleModule = (function () {

    var pub = {}; // public facing functions

    pub._init = function () {

        console.log('_sampleModule.js is loaded.');

    };

    return pub;

}());
