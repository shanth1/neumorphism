/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://neumorphism/./src/style.css?");

/***/ }),

/***/ "./src/common.blocks/switchers/switchers.js":
/*!**************************************************!*\
  !*** ./src/common.blocks/switchers/switchers.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"switchers\": () => (/* binding */ switchers)\n/* harmony export */ });\nlet switchUpper = document.querySelector('.switchers__switch-box_z_upper');\nlet switchBottom = document.querySelector('.switchers__switch-box_z_bottom');\n\nlet switchInner = document.querySelectorAll('.switchers__inner_z_bottom, .switchers__inner_z_upper');\nlet icons = document.querySelector('.switchers__icons');\nlet iconOn = document.querySelector('.switchers__icon-on');\nlet iconOff = document.querySelector('.switchers__icon-off');\n\n// Добавить обработчики ошибок на селектор\n\nlet switchers = {\n    leftTrigger: document.querySelector(\".switchers__trigger\").addEventListener('click', ()=>{\n\n        switchUpper.classList.remove(\"switchers__switch-box_theme_light\");\n        switchUpper.classList.add(\"switchers__switch-box_theme_dark\")\n    \n        switchBottom.classList.remove(\"switchers__switch-box_theme_dark\")\n        switchBottom.classList.add(\"switchers__switch-box_theme_light\")\n    \n        for (let inner of switchInner) {\n            inner.classList.remove('switchers__inner_position_right');\n        }\n    \n        icons.classList.remove('switchers__icons_position_right');\n    \n        iconOn.className = 'switchers__icon-on switchers__icon-on_no-power';\n        iconOff.className = 'switchers__icon-off switchers__icon-off_power';\n    }),\n\n    rightTrigger: document.querySelector(\".switchers__trigger.switchers__trigger_right\").addEventListener('click', ()=>{\n        switchUpper.classList.remove(\"switchers__switch-box_theme_dark\");\n        switchUpper.classList.add(\"switchers__switch-box_theme_light\");\n    \n        switchBottom.classList.remove(\"switchers__switch-box_theme_light\");\n        switchBottom.classList.add(\"switchers__switch-box_theme_dark\");\n    \n        for (let inner of switchInner) {\n            inner.classList.add('switchers__inner_position_right');\n        }\n    \n        icons.classList.add('switchers__icons_position_right');\n    \n        iconOn.className = 'switchers__icon-on switchers__icon-on_power';\n        iconOff.className = 'switchers__icon-off switchers__icon-off_no-power';\n    })\n}\n\n\n\n\n\n\n\n//# sourceURL=webpack://neumorphism/./src/common.blocks/switchers/switchers.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ./style.css */ \"./src/style.css\");\n__webpack_require__(/*! ./common.blocks/switchers/switchers.js */ \"./src/common.blocks/switchers/switchers.js\");\n\nconsole.log(123);\n\n//# sourceURL=webpack://neumorphism/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;