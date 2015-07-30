'use strict';

var debugging = require('debug'),
            d = location.search.match(/debug=([^;]*)/);
debugging.enable(d && d.length === 2 ? d[1] : false);

var EventEmitter = require('events').EventEmitter;
var util         = require('util');
var debug        = debugging('main');

function Main () {

  EventEmitter.call(this);

  var self = this;

  // You need to create a root container that will hold the scene you want to draw.
  self.stage = new PIXI.Container();

  self.renderer = require('./renderer');

  // Kick off the animation loop (defined below)
  animate();

  function animate () {

    // Start the timer for the next animation loop
    requestAnimationFrame(animate);

    // Emit an event, which components will listen to
    self.emit('update', 0.1);

    // This is the main render call that makes pixi draw your container and its children.
    self.renderer.render(self.stage);
  }
}

util.inherits(Main, EventEmitter);

Main.prototype.mount = function (object) {

  var main = this;

  // Get bounds
  var onUpdate = object.update.bind(object);
  var onClick  = object.click.bind(object);

  // Setup listeners
  object.on('added', function () {
    debug('%o is on stage', object);

    onClick  && main.on('mousedown',  onClick);
    onClick  && main.on('touchstart', onClick);
    onUpdate && main.on('update',     onUpdate);
  });

  object.on('removed', function () {
    debug('%o was removed from stage', object);

    onClick  && main.off('mousedown',  onClick);
    onClick  && main.off('touchstart', onClick);
    onUpdate && main.off('update',     onUpdate);
  });

  // Add component on stage
  main.stage.addChild(object);
};

//////////////////////////////////////

var main = module.exports = new Main();

// Other components
require('./components/moon')(main);
