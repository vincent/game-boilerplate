'use strict';

var _     = require('lodash');
var debug = require('debug')(__filename);

module.exports = BaseScene;

function BaseScene (main) {

    PIXI.Container.call(this);

    this.main = main;
}

BaseScene.constructor = BaseScene;
BaseScene.prototype = Object.create(PIXI.Container.prototype);

BaseScene.prototype.assets = function () {
  return _.compact(_.merge(_.map(this.children, function (child) {
      return child.assets;
  })));
};

BaseScene.prototype.mount = function (object) {

  var self = this;

  // Set world
  object.world = {
    height: self.main.renderer.height,
    width: self.main.renderer.width
  };

  // Get bounds
  var onUpdate = object.update.bind(object);
  var onClick  = object.click.bind(object);

  // Setup listeners
  object.on('added', function () {
    debug('%o is on scene', object);

    onClick  && self.main.on('mousedown',  onClick);
    onClick  && self.main.on('touchstart', onClick);
    onUpdate && self.main.on('update',     onUpdate);
  });

  object.on('removed', function () {
    debug('%o was removed from scene', object);

    onClick  && self.main.off('mousedown',  onClick);
    onClick  && self.main.off('touchstart', onClick);
    onUpdate && self.main.off('update',     onUpdate);
  });

  // Add component on scene
  this.addChild(object);
};