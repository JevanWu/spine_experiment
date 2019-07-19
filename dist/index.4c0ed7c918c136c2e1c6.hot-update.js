webpackHotUpdate("index",{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pixi.js */ \"./node_modules/pixi.js/lib/pixi.es.js\");\n/* harmony import */ var pixi_spine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pixi-spine */ \"./node_modules/pixi-spine/bin/pixi-spine.js\");\n/* harmony import */ var pixi_spine__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pixi_spine__WEBPACK_IMPORTED_MODULE_1__);\n// import { helloWorld } from './helloWorld';\n//\n// document.write(helloWorld());\n// const PIXI = require(\"pixi-spine\");\n\n\nvar app = new pixi_js__WEBPACK_IMPORTED_MODULE_0__[\"Application\"](); //\n\ndocument.body.appendChild(app.view); //\n// app.loader\n//     .add('spineCharacter', 'assets/skineboy-pro.json')\n//     .load(function (loader, resources) {\n//         var animation = new PIXI.spine.Spine(resources.spineCharacter.spineData);\n//\n//         // add the animation to the scene and render...\n//         app.stage.addChild(animation);\n//\n//         // run\n//         var animation = new PIXI.spine.Spine(spineBoyData);\n//         if (animation.state.hasAnimation('run')) {\n//             // run forever, little boy!\n//             animation.state.setAnimation(0, 'run', true);\n//             // dont run too fast\n//             animation.state.timeScale = 0.1;\n//         }\n//\n//         app.start();\n\napp.loader.add('spineCharacter', 'spine-data-1/HERO.json').load(function (loader, resources) {\n  var animation = new pixi_js__WEBPACK_IMPORTED_MODULE_0__[\"spine\"].Spine(resources.spineCharacter.spineData); // add the animation to the scene and render...\n\n  app.stage.addChild(animation); // run\n\n  var animation = new pixi_js__WEBPACK_IMPORTED_MODULE_0__[\"spine\"].Spine(spineBoyData);\n\n  if (animation.state.hasAnimation('run')) {\n    // run forever, little boy!\n    animation.state.setAnimation(0, 'run', true); // dont run too fast\n\n    animation.state.timeScale = 0.1;\n  }\n\n  app.start();\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

})