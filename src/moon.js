'use strict';

// This creates a texture from a 'moon.png' image.
var moonTexture = PIXI.Texture.fromImage('images/moon.png');
var moon = new PIXI.Sprite(moonTexture);

// Setup the position and scale of the moon
moon.position.x = 400;
moon.position.y = 300;

moon.scale.x = 2;
moon.scale.y = 2;

module.exports = moon;
