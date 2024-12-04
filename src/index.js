'use strict';

const getMrz = require('./getMrz');
const readMrzFactory = require('./readMrz');

module.exports = {
    getMrz,
    readMrz: (options) => readMrzFactory(options),
};
