'use strict';

var _            = require('lodash');
var util         = require('util');
var debug        = require('debug')(__filename);
var EventEmitter = require('events').EventEmitter;

var state, dispatcher = new Dispatcher();

dispatcher.on('change', function (changes, newState) {
  debug('state changed %o', changes);
});

module.exports = dispatcher;

///////////////////////////////////

function Dispatcher () {
  EventEmitter.call(this);
}

util.inherits(Dispatcher, EventEmitter);

Dispatcher.prototype.getState = function () {
  return state;
};

Dispatcher.prototype.setState = function (props) {
  _.assign(state, props);
};

Dispatcher.prototype.changed = function () {
  this.emit('change');
};

/**************************
 *
 * GAME STATE MANAGEMENT
 *
 *  -- add here functions to control score, player data, etc.
 *
 **/

Dispatcher.prototype.initialize = function (main) {

  this.main = main;

  // Initial state

  state = {

    name: 'Guest' || window.prompt('Your name'),

    timePlayed: 0,

    score: 0,

  };

};

Dispatcher.prototype.incrementScore = function (inc) {
  state.score += inc;
  this.changed();
};

