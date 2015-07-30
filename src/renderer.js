'use strict';

function getDimensions () {
  return {
    width: window.innerWidth  ||
        document.documentElement.clientWidth ||
        document.body.clientWidth,

    height: window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight
  };
}

var dimensions = getDimensions();

// You can use either `new PIXI.WebGLRenderer`, `new PIXI.CanvasRenderer`, or `PIXI.autoDetectRenderer`
// which will try to choose the best renderer for the environment you are in.
var renderer = new PIXI.WebGLRenderer(dimensions.width, dimensions.height, {
  autoResize: true
});

// The renderer will create a canvas element for you that you can then insert into the DOM.
document.getElementById('world').appendChild(renderer.view);

module.exports = renderer;
