webpackHotUpdate("index",{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pixi.js */ \"./node_modules/pixi.js/lib/pixi.es.js\");\n// import { helloWorld } from './helloWorld';\n//\n// document.write(helloWorld());\n// const PIXI = require(\"pixi-spine\");\n\nvar app = new pixi_js__WEBPACK_IMPORTED_MODULE_0__[\"PIXI\"].Application();\ndocument.body.appendChild(app.view);\napp.loader.add('spineCharacter', 'assets/skineboy-pro.json').load(function (loader, resources) {\n  var animation = new pixi_js__WEBPACK_IMPORTED_MODULE_0__[\"PIXI\"].spine.Spine(resources.spineCharacter.spineData); // add the animation to the scene and render...\n\n  app.stage.addChild(animation); // run\n\n  var animation = new pixi_js__WEBPACK_IMPORTED_MODULE_0__[\"PIXI\"].spine.Spine(spineBoyData);\n\n  if (animation.state.hasAnimation('run')) {\n    // run forever, little boy!\n    animation.state.setAnimation(0, 'run', true); // dont run too fast\n\n    animation.state.timeScale = 0.1;\n  }\n\n  app.start();\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

})