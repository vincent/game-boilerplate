'use strict';

function initialSpeed () {
  return {
    x: 0,
    y: 1
  };
}

module.exports = function (component) {

  // component.speed = component.speed || initialSpeed();
  // component.on('update', function () {
  //   component.position.x += component.speed.x * PIXI.ticker.shared.deltaTime;
  //   component.position.y += component.speed.y * PIXI.ticker.shared.deltaTime;
  // });

  var acceleration = 1;

  component.on('update', function () {
    var dt = PIXI.ticker.shared.deltaTime;
    component.position.y += component.velocity.y * dt + acceleration * 0.5 * dt * dt;
    component.velocity.y += acceleration * dt;
  });

};
