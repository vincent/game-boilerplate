'use strict';

var renderer = require('./screen');
var moon     = require('./moon');

// You need to create a root container that will hold the scene you want to draw.
var stage = new PIXI.Container();

// Add the bunny to the scene we are building.
stage.addChild(moon);

// kick off the animation loop (defined below)
animate();

function animate() {

  // start the timer for the next animation loop
  requestAnimationFrame(animate);

  // each frame we spin the moon around a bit
  moon.rotation += 0.01;

  // this is the main render call that makes pixi draw your container and its children.
  renderer.render(stage);
}
