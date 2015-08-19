'use strict';

var debug = require('debug')(__filename);
var util  = require('util');

var Base = require('./index');
var Moon = require('../components/moon');

module.exports = TestScene;

function TestScene (main) {

    Base.call(this, main);

    // Components
    var moon = new Moon();
    this.mount(moon);
}

// PIXI inheritance

util.inherits(TestScene, Base);

