'use strict';

var debug = require('debug')(__filename);

module.exports = function (component, walls) {

  if (! component.velocity) {
    throw new Error('A bouncing component should be moving');
  }

  walls = walls || { n:true, b:true, l:true, r:true };

  component.on('update', function () {

    // hitting the bottom inverse y velocity, with a decay
    if (component.parent.height > 2) {
      if (component.velocity.y > 0 && component.position.y > component.parent.height) {
        if (component.velocity.y < 1 && component.velocity.y > -1) {
          component.velocity.y = 0;
          debug('component %o stop bouncing', component);
        } else {
          component.velocity.y = component.velocity.y * -0.9;
          debug('component %o bounces against bottom', component);
        }
      }
    }
  });
};
