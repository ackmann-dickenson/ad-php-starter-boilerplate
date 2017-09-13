/*!
 * php-starter-template
 * 
 * 
 * @author Ackmann & Dickenson
 * @version 1.0.0
 * Copyright 2017. MIT licensed.
 */
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

'use strict';

/**
 * Custom JS Scripts
 *
 * @package AD Starter
 */

(function () {

    sampleModule._init();

})();
