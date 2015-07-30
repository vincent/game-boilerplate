'use strict';

var debug = require('debug')(__filename);

var dispatcher = require('./dispatcher');

module.exports = function (main) {
  return new Moon(main);
};

function Moon (main) {

  this.state = {
    direction: 1
  };

  PIXI.Sprite.call(this, PIXI.Texture.fromImage('images/moon.png'));

  // Setup interactivity
  this.interactive = true;

  // Setup the position and scale
  this.position.x = 400;
  this.position.y = 300;
  this.scale.x = 2;
  this.scale.y = 2;

  // Mount me to stage, setup listeners
  main.mount(this);
}

// PIXI inheritance

Moon.constructor = Moon;
Moon.prototype = Object.create(PIXI.Sprite.prototype);

// Instance methods

Moon.prototype.update = function (delta) {
  this.rotation += 0.01 * this.state.direction;
};

Moon.prototype.click = function () {
  debug('%o was clicked', this);
  this.state.direction = this.state.direction > 0 ? -1 : 1;

  dispatcher.incrementScore(1);
};
