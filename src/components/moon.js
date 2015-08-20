'use strict';

var debug      = require('debug')(__filename);

var dispatcher = require('./dispatcher');

module.exports = Moon;

// Constructor and properties

function Moon () {
  this.state = {
    direction: 1
  };
}

// PIXI inheritance

Moon.constructor = Moon;
Moon.prototype = Object.create(PIXI.Sprite.prototype);

// Assets

Moon.prototype.assets = function () {
  return [
    'images/moon.png'
  ];
};

// On mount, before showing up, after assets loaded

Moon.prototype.mount = function(scene) {

  PIXI.Sprite.call(this, PIXI.Texture.fromImage('images/moon.png'));

  // Setup interactivity
  this.interactive = true;

  // Setup the position and scale
  this.position.x = 200;
  this.position.y = 200;
};

// On update

Moon.prototype.update = function () {
  this.emit('update');
};

// On click

Moon.prototype.click = function () {

  debug('%o was clicked', this);
  this.state.direction = this.state.direction > 0 ? -1 : 1;

  dispatcher.incrementScore(1);
};
