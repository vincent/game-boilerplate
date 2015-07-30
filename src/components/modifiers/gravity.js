'use strict';

var gravity = 0.5;

module.exports = function (component) {

    component.gravity = component.gravity || gravity;

    component.on('update', function () {
        component.speed.y -= component.gravity * Math.max(0, PIXI.ticker.shared.deltaTime);
    });
};
