(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./moon":2,"./screen":3}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy93YXRjaGlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwic3JjL21haW4uanMiLCJzcmMvbW9vbi5qcyIsInNyYy9zY3JlZW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgcmVuZGVyZXIgPSByZXF1aXJlKCcuL3NjcmVlbicpO1xudmFyIG1vb24gICAgID0gcmVxdWlyZSgnLi9tb29uJyk7XG5cbi8vIFlvdSBuZWVkIHRvIGNyZWF0ZSBhIHJvb3QgY29udGFpbmVyIHRoYXQgd2lsbCBob2xkIHRoZSBzY2VuZSB5b3Ugd2FudCB0byBkcmF3LlxudmFyIHN0YWdlID0gbmV3IFBJWEkuQ29udGFpbmVyKCk7XG5cbi8vIEFkZCB0aGUgYnVubnkgdG8gdGhlIHNjZW5lIHdlIGFyZSBidWlsZGluZy5cbnN0YWdlLmFkZENoaWxkKG1vb24pO1xuXG4vLyBraWNrIG9mZiB0aGUgYW5pbWF0aW9uIGxvb3AgKGRlZmluZWQgYmVsb3cpXG5hbmltYXRlKCk7XG5cbmZ1bmN0aW9uIGFuaW1hdGUoKSB7XG5cbiAgLy8gc3RhcnQgdGhlIHRpbWVyIGZvciB0aGUgbmV4dCBhbmltYXRpb24gbG9vcFxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG5cbiAgLy8gZWFjaCBmcmFtZSB3ZSBzcGluIHRoZSBtb29uIGFyb3VuZCBhIGJpdFxuICBtb29uLnJvdGF0aW9uICs9IDAuMDE7XG5cbiAgLy8gdGhpcyBpcyB0aGUgbWFpbiByZW5kZXIgY2FsbCB0aGF0IG1ha2VzIHBpeGkgZHJhdyB5b3VyIGNvbnRhaW5lciBhbmQgaXRzIGNoaWxkcmVuLlxuICByZW5kZXJlci5yZW5kZXIoc3RhZ2UpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyBUaGlzIGNyZWF0ZXMgYSB0ZXh0dXJlIGZyb20gYSAnbW9vbi5wbmcnIGltYWdlLlxudmFyIG1vb25UZXh0dXJlID0gUElYSS5UZXh0dXJlLmZyb21JbWFnZSgnaW1hZ2VzL21vb24ucG5nJyk7XG52YXIgbW9vbiA9IG5ldyBQSVhJLlNwcml0ZShtb29uVGV4dHVyZSk7XG5cbi8vIFNldHVwIHRoZSBwb3NpdGlvbiBhbmQgc2NhbGUgb2YgdGhlIG1vb25cbm1vb24ucG9zaXRpb24ueCA9IDQwMDtcbm1vb24ucG9zaXRpb24ueSA9IDMwMDtcblxubW9vbi5zY2FsZS54ID0gMjtcbm1vb24uc2NhbGUueSA9IDI7XG5cbm1vZHVsZS5leHBvcnRzID0gbW9vbjtcbiIsIid1c2Ugc3RyaWN0JztcblxuXG5mdW5jdGlvbiBnZXREaW1lbnNpb25zICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB3aWR0aDogd2luZG93LmlubmVyV2lkdGggIHx8XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIHx8XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCxcblxuICAgICAgICBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCB8fFxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgfHxcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodFxuICAgIH07XG59XG5cbnZhciBkaW1lbnNpb25zID0gZ2V0RGltZW5zaW9ucygpO1xuXG4vLyBZb3UgY2FuIHVzZSBlaXRoZXIgYG5ldyBQSVhJLldlYkdMUmVuZGVyZXJgLCBgbmV3IFBJWEkuQ2FudmFzUmVuZGVyZXJgLCBvciBgUElYSS5hdXRvRGV0ZWN0UmVuZGVyZXJgXG4vLyB3aGljaCB3aWxsIHRyeSB0byBjaG9vc2UgdGhlIGJlc3QgcmVuZGVyZXIgZm9yIHRoZSBlbnZpcm9ubWVudCB5b3UgYXJlIGluLlxudmFyIHJlbmRlcmVyID0gbmV3IFBJWEkuV2ViR0xSZW5kZXJlcihkaW1lbnNpb25zLndpZHRoLCBkaW1lbnNpb25zLmhlaWdodCwge1xuICAgIGF1dG9SZXNpemU6IHRydWVcbn0pO1xuXG4vLyBUaGUgcmVuZGVyZXIgd2lsbCBjcmVhdGUgYSBjYW52YXMgZWxlbWVudCBmb3IgeW91IHRoYXQgeW91IGNhbiB0aGVuIGluc2VydCBpbnRvIHRoZSBET00uXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd29ybGQnKS5hcHBlbmRDaGlsZChyZW5kZXJlci52aWV3KTtcblxubW9kdWxlLmV4cG9ydHMgPSByZW5kZXJlcjtcbiJdfQ==
