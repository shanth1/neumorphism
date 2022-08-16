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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"switchers\": () => (/* binding */ switchers)\n/* harmony export */ });\nlet switchUpper = document.querySelector('.switch-box_z_upper');\r\nlet switchBottom = document.querySelector('.switch-box_z_bottom');\r\n\r\nlet switchInner = document.querySelectorAll('.switch-box__inner_z_bottom, .switch-box__inner_z_upper');\r\nlet icons = document.querySelector('.switchers__icons');\r\nlet iconOn = document.querySelector('.switchers__icon-on');\r\nlet iconOff = document.querySelector('.switchers__icon-off');\r\n\r\n// Добавить обработчики ошибок на селектор\r\n\r\nlet switchers = {\r\n    leftTrigger: document.querySelector(\".switchers__trigger\").addEventListener('click', ()=>{\r\n\r\n        switchUpper.classList.remove(\"switch-box_theme_light\");\r\n        switchUpper.classList.add(\"switch-box_theme_dark\")\r\n    \r\n        switchBottom.classList.remove(\"switch-box_theme_dark\")\r\n        switchBottom.classList.add(\"switch-box_theme_light\")\r\n    \r\n        for (let inner of switchInner) {\r\n            inner.classList.remove('switch-box__inner_position_right');\r\n        }\r\n    \r\n        icons.classList.remove('switchers__icons_position_right');\r\n    \r\n        iconOn.className = 'switchers__icon-on switchers__icon-on_no-power';\r\n        iconOff.className = 'switchers__icon-off switchers__icon-off_power';\r\n    }),\r\n\r\n    rightTrigger: document.querySelector(\".switchers__trigger.switchers__trigger_right\").addEventListener('click', ()=>{\r\n        switchUpper.classList.remove(\"switch-box_theme_dark\");\r\n        switchUpper.classList.add(\"switch-box_theme_light\");\r\n    \r\n        switchBottom.classList.remove(\"switch-box_theme_light\");\r\n        switchBottom.classList.add(\"switch-box_theme_dark\");\r\n    \r\n        for (let inner of switchInner) {\r\n            inner.classList.add('switch-box__inner_position_right');\r\n        }\r\n    \r\n        icons.classList.add('switchers__icons_position_right');\r\n    \r\n        iconOn.className = 'switchers__icon-on switchers__icon-on_power';\r\n        iconOff.className = 'switchers__icon-off switchers__icon-off_no-power';\r\n    })\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://neumorphism/./src/common.blocks/switchers/switchers.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ./style.css */ \"./src/style.css\");\r\n__webpack_require__(/*! ./common.blocks/switchers/switchers.js */ \"./src/common.blocks/switchers/switchers.js\");\n\n//# sourceURL=webpack://neumorphism/./src/index.js?");

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