'use strict';

var _            = require('lodash');
var util         = require('util');
var debug        = require('debug')(__filename);
var EventEmitter = require('events').EventEmitter;

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
  this.emit('change', state);
};

var state, dispatcher = new Dispatcher();

dispatcher.on('change', function (state) {
  debug('state changed %o', state);
});

module.exports = dispatcher;

/**************************
 *
 * GAME STATE MANAGEMENT
 *
 *  -- add here functions to control score, player data, etc.
 *
 **/

state = {

  name: 'Guest' || window.prompt('Your name'),

  timePlayed: 0,

  score: 0,

};

Dispatcher.prototype.incrementScore = function (inc) {
  state.score += inc;
  this.changed();
};

