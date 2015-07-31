'use strict';

var debug = require('debug')(__filename);

var boing = new buzz.sound('/sounds/boing', {
  formats: [ 'wav' ],
  webAudioApi: true
});

module.exports = function (component, walls) {

  if (! component.velocity) {
    throw new Error('A bouncing component should be moving');
  }

  walls = walls || { n:true, b:true, l:true, r:true };

  component.on('update', function () {

    var bottom = component.world.height - component.height;

    // hitting the bottom inverse y velocity, with a decay
    if (component.velocity.y > 0 && component.position.y > bottom) {

      if (component.velocity.y < 1 && component.velocity.y > -1) {
        component.velocity.y = 0;
        component.position.y = bottom;
        debug('component %o stop bouncing', component);
      } else {
        component.velocity.y = component.velocity.y * -1;
        boing.setTime(0).play();
        debug('component %o bounces against bottom', component);
      }
    }

  });
};
