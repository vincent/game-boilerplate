'use strict';

var gravity = 0.8;

module.exports = function (component) {

  component.gravity = component.gravity || gravity;

  component.on('update', function () {
    if (component.position.y < component.parent.height) {
      component.velocity.y += component.gravity * Math.max(0, PIXI.ticker.shared.deltaTime);
    }
  });
};
