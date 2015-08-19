'use strict';

var EventEmitter = require('events').EventEmitter;
var debug        = require('debug')(__filename);
var util         = require('util');
var async        = require('async');
var _            = require('lodash');

function Loader () {
  EventEmitter.call(this);

  var self = this;

  function worker (task, callback) {
    var items = task(), para = [];

    if (items.textures) para.push(function (next) {
      async.each(items.textures,
        function (tex, next) {
          PIXI.Texture.fromImage(tex).on('loaded', function () {
            debugger;
            next();
          });
        },
        next);
    });

    async.parallel(para, function (error) {
      debug('loading taks %o finished', task);
      callback();
    });
  }

  this.q = async.queue(worker, 4);
  this.q.pause();

  this.q.drain = function() {
    this.q.pause();
    debug('all items have been processed');
    self.emit('loaded');
  };
}

util.inherits(Loader, EventEmitter);

Loader.prototype.start = function() {
  this.q.resume();
};

Loader.prototype.add = function(task) {
  this.q.push(task);
};

module.exports = new Loader();
