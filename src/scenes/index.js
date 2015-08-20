'use strict';

var _     = require('lodash');
var debug = require('debug')(__filename);

module.exports = BaseScene;

function BaseScene (main) {

    PIXI.Container.call(this);

    this.main = main;
    this.components = [];
}

BaseScene.constructor = BaseScene;
BaseScene.prototype = Object.create(PIXI.Container.prototype);

BaseScene.prototype.assets = function () {
  return _.compact(_.merge(_.map(this.components, function (child) {
      return child.assets();
  })));
};

BaseScene.prototype.add = function(child) {
  this.components.push(child);
  return child;
};

BaseScene.prototype.mountAll = function() {
  this.components.forEach(this.mount.bind(this));
};

BaseScene.prototype.mount = function (object) {

  var self = this;

  if (object.mount) { object.mount(this); }

  // Get bounds
  var onUpdate = object.update.bind(object);
  var onClick  = object.click.bind(object);

  // Setup listeners
  object.on('added', function () {
    debug('%o is on scene %o', object, self);

    if (onClick)  { self.main.on('mousedown',  onClick);  }
    if (onClick)  { self.main.on('touchstart', onClick);  }
    if (onUpdate) { self.main.on('update',     onUpdate); }
  });

  object.on('removed', function () {
    debug('%o was removed from scene', object);

    if (onClick)  { self.main.off('mousedown',  onClick);  }
    if (onClick)  { self.main.off('touchstart', onClick);  }
    if (onUpdate) { self.main.off('update',     onUpdate); }
  });

  // Add component on scene
  this.addChild(object);
};