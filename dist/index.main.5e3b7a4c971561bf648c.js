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

/***/ "./src/common.blocks/clock/clock.js":
/*!******************************************!*\
  !*** ./src/common.blocks/clock/clock.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"interval\": () => (/* binding */ interval)\n/* harmony export */ });\nconst { clockWork } = __webpack_require__(/*! ../clockwork/clockwork.js */ \"./src/common.blocks/clockwork/clockwork.js\");\r\nconst { clockFace } = __webpack_require__(/*! ../clockface/clockface.js */ \"./src/common.blocks/clockface/clockface.js\");\r\n\r\nlet date = getDate()\r\n\r\nfunction getDate(){\r\n    return new Date();\r\n}\r\n\r\nfunction getDateValues(date){\r\n    return {\r\n        date: date.getDate(),\r\n        day: date.getDay(),\r\n\r\n        hrDeg: date.getHours() * 30,\r\n        mnDeg: date.getHours() * 360 + date.getMinutes() * 6,\r\n        scDeg: date.getMinutes() * 360 + date.getSeconds() * 6,\r\n\r\n        hrVal: date.getHours(),\r\n        mnVal: date.getMinutes(),\r\n        scVal: date.getSeconds(),\r\n    }\r\n}\r\n\r\nclockWork(getDateValues(date), false)\r\nlet interval = setInterval(()=>{\r\n    let date = getDate()\r\n    let dateValues = getDateValues(date)\r\n\r\n    clockWork(dateValues, true)\r\n    clockFace(dateValues)\r\n})\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://neumorphism/./src/common.blocks/clock/clock.js?");

/***/ }),

/***/ "./src/common.blocks/clockface/clockface.js":
/*!**************************************************!*\
  !*** ./src/common.blocks/clockface/clockface.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clockFace\": () => (/* binding */ clockFace),\n/* harmony export */   \"createElement\": () => (/* binding */ createElement),\n/* harmony export */   \"daysOfWeek\": () => (/* binding */ daysOfWeek),\n/* harmony export */   \"getColor\": () => (/* binding */ getColor),\n/* harmony export */   \"setIndicators\": () => (/* binding */ setIndicators),\n/* harmony export */   \"wrap\": () => (/* binding */ wrap)\n/* harmony export */ });\nconst hourCorrection = 12\r\nconst deg = 6;\r\n\r\nconst daysOfWeek = [\r\n    'Sun',\r\n    'Mon',\r\n    'Tue',\r\n    'Wed',\r\n    'Thu',\r\n    'Fri',\r\n    'Sat'\r\n];\r\n\r\nlet wrap =[]\r\nfor (let i = 0; i < 60; i++) {\r\n    let wrapElement = createElement('clockface__wrap', 'div')\r\n    let serif = createElement('clockface__serif', 'div')\r\n    let light = createElement('clockface__light', 'div')\r\n    \r\n    wrapElement.append(serif) //childNodes[0], firstChild\r\n    wrapElement.append(light) //childNodes[1]\r\n\r\n    wrap.push(wrapElement)\r\n    wrap[i].style.rotate = `${i*6}deg` \r\n    \r\n    if (i%5===0){\r\n        wrap[i].firstChild.style.width = `10px`\r\n\r\n        let number = createElement('clockface__number', 'div')\r\n        wrapElement.append(number) //childNodes[2], lastChild\r\n        if(i===0){\r\n            number.innerHTML = 12\r\n        }else{\r\n            number.innerHTML = i/5\r\n        }\r\n        number.style.rotate=`${i/5*-30}deg`\r\n    }\r\n\r\n    wrap[i].style.rotate = `${i*6}deg`\r\n    document.querySelector('.clockface').append(wrap[i])\r\n}\r\n\r\nfunction getColor(){\r\n    return 'hsl(' + 360*Math.random() + ', ' +\r\n            (25+70*Math.random()) + '%' + ', ' +\r\n            (85 + 10*Math.random()) + '%)'\r\n}\r\n\r\nfunction clockFace(dateValues){\r\n\r\n    let dayMonth = document.querySelector('.clockface__day-month')\r\n    dayMonth.innerHTML = dateValues.date\r\n    let dayWeek = document.querySelector('.clockface__day-week')\r\n    dayWeek.innerHTML = daysOfWeek[dateValues.day]\r\n\r\n    wrap[dateValues.scVal].style.paddingTop = `6px`;\r\n    wrap[dateValues.mnVal].firstChild.style.backgroundColor = 'red';\r\n\r\n    wrap[Math.round(59*Math.random())].childNodes[1].style.backgroundColor = getColor()\r\n\r\n    if(Math.round(10*Math.random())===5){\r\n        wrap[Math.round(59*Math.random())].childNodes[1].style.backgroundColor = 'red'\r\n    }\r\n    \r\n    if(dateValues.hrVal >= 12){\r\n        wrap[(dateValues.hrVal - hourCorrection)*5].childNodes[2].style.color = 'red';\r\n        // дублирование кода \r\n        if (((dateValues.hrVal - hourCorrection) * 5) === 0){\r\n            wrap[11 * 5].childNodes[2].style.color = 'bisque';\r\n        }else {\r\n            wrap[(dateValues.hrVal - hourCorrection -1) * 5].childNodes[2].style.color = 'bisque';\r\n        }\r\n    }else{\r\n        wrap[dateValues.hrVal*5].childNodes[2].style.color = 'red';\r\n        // Дублирование кода \r\n        if ((dateValues.hrVal) === 0){\r\n            wrap[11*5].childNodes[2].style.color = 'bisque';\r\n        }else {\r\n            wrap[(dateValues.hrVal-1)*5].childNodes[2].style.color = 'bisque';\r\n        }\r\n    }\r\n\r\n    // Обратная стрелка\r\n    if (dateValues.mnVal===0){\r\n        wrap[59].firstChild.style.backgroundColor = 'bisque';\r\n    }else{\r\n        wrap[dateValues.mnVal-1].firstChild.style.backgroundColor = 'bisque';\r\n    }\r\n\r\n    if (dateValues.scVal===0){\r\n        wrap[59].style.paddingTop = `8px`;\r\n    }else{\r\n        wrap[dateValues.scVal-1].style.paddingTop = `8px`;\r\n    }\r\n    \r\n    if(dateValues.hrVal + dateValues.mnVal + dateValues.scVal === 0){\r\n        setIndicators();\r\n    }\r\n}\r\n\r\n\r\n\r\nfunction setIndicators(){\r\n    dayMonth.innerHTML = dateValues.date\r\n    dayWeek.innerHTML = daysOfWeek[dateValues.day]\r\n}\r\n\r\nfunction createElement(className, tagName){\r\n    let element = document.createElement(tagName)\r\n    element.className = className\r\n    return element\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://neumorphism/./src/common.blocks/clockface/clockface.js?");

/***/ }),

/***/ "./src/common.blocks/clockwork/clockwork.js":
/*!**************************************************!*\
  !*** ./src/common.blocks/clockwork/clockwork.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clockWork\": () => (/* binding */ clockWork)\n/* harmony export */ });\nconst hour = document.querySelector('.clockwork__hour');\r\nconst minute = document.querySelector('.clockwork__minute');\r\nconst second = document.querySelector('.clockwork__second');\r\n\r\n// const transition = 'transition: 0.5s cubic-bezier(0.9, 0, 0, 1);'\r\n\r\nfunction clockWork(dateValues, transition){\r\n    if (transition){\r\n        transition = 'transition: 0.3s'\r\n    }else{\r\n        transition = ''\r\n    }\r\n    hour.style.cssText = `transform: rotate(${(dateValues.hrDeg)+(dateValues.mnVal/2)}deg); ${transition}`;\r\n    minute.style.cssText = `transform: rotate(${dateValues.mnDeg + dateValues.scVal/10}deg); ${transition}`;\r\n    second.style.cssText = `transform: rotate(${dateValues.scDeg}deg);  ${transition}`;\r\n}\r\n\r\nfunction rotateClockwork(dateValues, transition){\r\n    hour.style.cssText = `transform: rotate(${(dateValues.hrDeg)+(dateValues.mnVal/2)}deg); ${transition}`;\r\n    minute.style.cssText = `transform: rotate(${dateValues.mnDeg + dateValues.scVal/10}deg); ${transition}`;\r\n    second.style.cssText = `transform: rotate(${dateValues.scDeg}deg);  ${transition}`;\r\n}\r\n\r\n\n\n//# sourceURL=webpack://neumorphism/./src/common.blocks/clockwork/clockwork.js?");

/***/ }),

/***/ "./src/common.blocks/switchers/switchers.js":
/*!**************************************************!*\
  !*** ./src/common.blocks/switchers/switchers.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"switchers\": () => (/* binding */ switchers)\n/* harmony export */ });\nlet switchUpper = document.querySelector('.switchers__switch-box_z_upper');\nlet switchBottom = document.querySelector('.switchers__switch-box_z_bottom');\n\nlet switchInner = document.querySelectorAll('.switchers__inner_z_bottom, .switchers__inner_z_upper');\nlet icons = document.querySelector('.switchers__icons');\nlet iconOn = document.querySelector('.switchers__icon-on');\nlet iconOff = document.querySelector('.switchers__icon-off');\n\n// Добавить обработчики ошибок на селектор\n\nlet switchers = {\n    leftTrigger: document.querySelector(\".switchers__trigger\").addEventListener('click', ()=>{\n\n        switchUpper.classList.remove(\"switchers__switch-box_theme_light\");\n        switchUpper.classList.add(\"switchers__switch-box_theme_dark\")\n    \n        switchBottom.classList.remove(\"switchers__switch-box_theme_dark\")\n        switchBottom.classList.add(\"switchers__switch-box_theme_light\")\n    \n        for (let inner of switchInner) {\n            inner.classList.remove('switchers__inner_position_right');\n        }\n    \n        icons.classList.remove('switchers__icons_position_right');\n    \n        iconOn.className = 'switchers__icon-on switchers__icon-on_no-power';\n        iconOff.className = 'switchers__icon-off switchers__icon-off_power';\n    }),\n\n    rightTrigger: document.querySelector(\".switchers__trigger.switchers__trigger_right\").addEventListener('click', ()=>{\n        switchUpper.classList.remove(\"switchers__switch-box_theme_dark\");\n        switchUpper.classList.add(\"switchers__switch-box_theme_light\");\n    \n        switchBottom.classList.remove(\"switchers__switch-box_theme_light\");\n        switchBottom.classList.add(\"switchers__switch-box_theme_dark\");\n    \n        for (let inner of switchInner) {\n            inner.classList.add('switchers__inner_position_right');\n        }\n    \n        icons.classList.add('switchers__icons_position_right');\n    \n        iconOn.className = 'switchers__icon-on switchers__icon-on_power';\n        iconOff.className = 'switchers__icon-off switchers__icon-off_no-power';\n    })\n}\n\n\n\n//# sourceURL=webpack://neumorphism/./src/common.blocks/switchers/switchers.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ./style.css */ \"./src/style.css\");\n__webpack_require__(/*! ./common.blocks/switchers/switchers.js */ \"./src/common.blocks/switchers/switchers.js\");\n__webpack_require__(/*! ./common.blocks/clock/clock.js */ \"./src/common.blocks/clock/clock.js\");\n\n//# sourceURL=webpack://neumorphism/./src/index.js?");

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