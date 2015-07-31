'use strict';

var debug      = require('debug')(__filename);

var dispatcher = require('./dispatcher');

var moving     = require('./modifiers/moving');
var gravity    = require('./modifiers/gravity');
var bounce     = require('./modifiers/bounce');

module.exports = function (main) {
  return new Moon(main);
};

function Moon (main) {

  this.state = {
    direction: 1
  };

  this.main = main;

  PIXI.Sprite.call(this, PIXI.Texture.fromImage('images/moon.png'));

  // Setup interactivity
  this.interactive = true;

  // Setup the position and scale
  this.position.x = 200;
  this.position.y = 200;
  this.scale.x = 2;
  this.scale.y = 2;

  // Mount me to stage, setup listeners
  main.mount(this);

  this.velocity = { x: 0, y: 0 };
  gravity(this);
  bounce(this);
  moving(this);
}

// PIXI inheritance

Moon.constructor = Moon;
Moon.prototype = Object.create(PIXI.Sprite.prototype);

// Instance methods

Moon.prototype.update = function () {
  this.emit('update');
  // this.rotation += 0.01 * this.state.direction;
};

Moon.prototype.click = function () {
  debug('%o was clicked', this);
  this.state.direction = this.state.direction > 0 ? -1 : 1;

  this.velocity.y = -20;

  dispatcher.incrementScore(1);
};
