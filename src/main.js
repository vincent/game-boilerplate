'use strict';

var debugging = require('debug'),
            d = location.search.match(/debug=([^;]*)/);
debugging.enable(d && d.length === 2 ? d[1] : false);

var EventEmitter = require('events').EventEmitter;
var util         = require('util');
var debug        = debugging('main');

function Main () {

  EventEmitter.call(this);

  this.loop = this.loop.bind(this);

  this.loader   = require('./loader');
  this.renderer = require('./renderer');

  // You need to create a root container that will hold the scene you want to draw.
  this.stage = new PIXI.Container();
  this.stage.width  = this.renderer.width;
  this.stage.height = this.renderer.height;
}

util.inherits(Main, EventEmitter);

Main.prototype.scene = function (scene) {

  debug('switch to scene %o', scene);

  if (this.currentScene) {
    this.stage.removeChild(this.currentScene);
  }

  scene.assets().forEach(this.loader.add.bind(this.loader));

  this.loader.on('loaded', function () {

    debug('scene %o is ready', scene);

    this.currentScene = scene;
    this.stage.addChild(this.currentScene);
  });

  this.loader.start();
};

Main.prototype.loop = function () {

  // Start the timer for the next animation loop
  requestAnimationFrame(this.loop);

  // Emit an event, which components will listen to
  this.emit('update', 0.1);

  // This is the main render call that makes pixi draw your container and its children.
  this.renderer.render(this.stage);
};

//////////////////////////////////////

var main = module.exports = new Main();

var Scene = require('./scenes/test');
var scene = new Scene(main);
main.scene(scene);
