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
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const { clockWork } = __webpack_require__(/*! ../clockwork/clockwork.js */ \"./src/common.blocks/clockwork/clockwork.js\");\r\nconst { getDate } = __webpack_require__(/*! ../../index.js */ \"./src/index.js\");\r\nconst { clockFace, renderClockfaceWrapElement } = __webpack_require__(/*! ../clockface/clockface.js */ \"./src/common.blocks/clockface/clockface.js\");\r\n\r\nrenderClockfaceWrapElement()\r\n\r\nconst clockEl = document.querySelector('.clock')\r\nconst clockCaseEl = document.querySelector('.clock__case')\r\nconst clockBackEl = document.querySelector('.clock__back')\r\nconst mouseHover = document.querySelector('.clock__mouse-hover')\r\nconst clockFaceEl = document.querySelector('.clockface')\r\nconst serifs = document.querySelectorAll('.clockface__serif')\r\nconst clockDayMonthEl = document.querySelector('.clock__day-month')\r\nconst clockDayWeekEl = document.querySelector('.clock__day-week')\r\nconst clockWorkEl = document.querySelector('.clockwork')\r\n\r\n\r\nlet date = getDate()\r\n\r\nclockWork(getDateValues(date), false)\r\nsetInterval(()=>{\r\n    let date = getDate()\r\n    let dateValues = getDateValues(date)\r\n\r\n    clockWork(dateValues, true)\r\n    clockFace(dateValues)\r\n})\r\n\r\n\r\nfunction getDateValues(date){\r\n    return {\r\n        date: date.getDate(),\r\n        day: date.getDay(),\r\n\r\n        hrDeg: date.getHours() * 30,\r\n        mnDeg: date.getHours() * 360 + date.getMinutes() * 6,\r\n        scDeg: date.getMinutes() * 360 + date.getSeconds() * 6,\r\n\r\n        hrVal: date.getHours(),\r\n        mnVal: date.getMinutes(),\r\n        scVal: date.getSeconds(),\r\n    }\r\n}\r\n\r\n\r\nmouseHover.addEventListener('mouseover', ()=>{\r\n    \r\n    clockEl.setAttribute('style', `transform: scale(105%)`)\r\n    clockWorkEl.setAttribute('style', `transform: scale(90%)`)\r\n    clockDayMonthEl.setAttribute('style', `transform: scale(130%)`)\r\n    clockDayWeekEl.setAttribute('style', `transform: scale(130%)`)\r\n    clockFaceEl.setAttribute('style', `width: ${clockFaceEl.clientWidth+30}px; height: ${clockFaceEl.clientHeight+30}px;`)\r\n    clockCaseEl.setAttribute('style', `width: ${clockCaseEl.clientWidth+30}px; height: ${clockCaseEl.clientHeight+30}px;`)\r\n    clockBackEl.setAttribute('style', `width: ${clockCaseEl.clientWidth+60}px; height: ${clockCaseEl.clientHeight+60}px;`)\r\n\r\n    if(Array.from(serifs[0].classList).find(el => el.match(/theme/)).endsWith('light')){\r\n        serifs.forEach((el, index)=>{\r\n            if (index % 5 === 0){\r\n                el.className = 'clockface__serif clockface__serif_3d_large_theme_light'\r\n            }else{\r\n                el.className = 'clockface__serif clockface__serif_3d_small_theme_light'\r\n            }\r\n        })\r\n    }else{\r\n        serifs.forEach((el, index)=>{\r\n            if (index % 5 === 0){\r\n                el.className = 'clockface__serif clockface__serif_3d_large_theme_dark'\r\n            }else{\r\n                el.className = 'clockface__serif clockface__serif_3d_small_theme_dark'\r\n            }\r\n        })\r\n    }\r\n})\r\n\r\nmouseHover.addEventListener('mouseout', ()=>{\r\n    clockEl.setAttribute('style', '' )\r\n    clockDayMonthEl.setAttribute('style', '' )\r\n    clockDayWeekEl.setAttribute('style', '' )\r\n    clockWorkEl.setAttribute('style', '' )\r\n    clockFaceEl.setAttribute('style', '' )\r\n    clockCaseEl.setAttribute('style', '' )\r\n    clockBackEl.setAttribute('style', '' )\r\n\r\n    if(Array.from(serifs[0].classList).find(el => el.match(/theme/)).endsWith('light')){\r\n        serifs.forEach((el, index)=>{\r\n            if (index % 5 === 0){\r\n                el.className = 'clockface__serif clockface__serif_2d_large_theme_light'\r\n            }else{\r\n                el.className = 'clockface__serif clockface__serif_2d_small_theme_light'\r\n            }\r\n        })\r\n    }else{\r\n        serifs.forEach((el, index)=>{\r\n            if (index % 5 === 0){\r\n                el.className = 'clockface__serif clockface__serif_2d_large_theme_dark'\r\n            }else{\r\n                el.className = 'clockface__serif clockface__serif_2d_small_theme_dark'\r\n            }\r\n        })\r\n    }\r\n})\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://neumorphism/./src/common.blocks/clock/clock.js?");

/***/ }),

/***/ "./src/common.blocks/clockface/clockface.js":
/*!**************************************************!*\
  !*** ./src/common.blocks/clockface/clockface.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clockFace\": () => (/* binding */ clockFace),\n/* harmony export */   \"renderClockfaceWrapElement\": () => (/* binding */ renderClockfaceWrapElement),\n/* harmony export */   \"setIndicators\": () => (/* binding */ setIndicators)\n/* harmony export */ });\nconst { createElement } = __webpack_require__(/*! ../../index.js */ \"./src/index.js\");\r\n\r\nconst hourCorrection = 12\r\nconst deg = 6;\r\n\r\nconst daysOfWeek = [\r\n    'Sun',\r\n    'Mon',\r\n    'Tue',\r\n    'Wed',\r\n    'Thu',\r\n    'Fri',\r\n    'Sat'\r\n];\r\n\r\nlet wrap =[]\r\n\r\nfunction renderClockfaceWrapElement(){\r\n    for (let i = 0; i < 60; i++) {\r\n        let wrapElement = createElement('clockface__wrap', 'div')\r\n        let serif = createElement('clockface__serif', 'div')\r\n        let light = createElement('clockface__light', 'div')\r\n\r\n        wrapElement.append(serif) //childNodes[0], firstChild\r\n        wrapElement.append(light) //childNodes[1]\r\n\r\n        wrap.push(wrapElement)\r\n        \r\n        if (i%5===0){\r\n            serif.classList.add('clockface__serif_2d_large_theme_light')\r\n            \r\n            let number = createElement('clockface__number', 'div')\r\n            wrapElement.append(number) //childNodes[2], lastChild\r\n            if(i===0){\r\n                number.innerHTML = 12\r\n            }else{\r\n                number.innerHTML = i/5\r\n            }\r\n            number.style.rotate=`${i/5*-30}deg`\r\n        }else{\r\n            serif.classList.add('clockface__serif_2d_small_theme_light')\r\n        }\r\n\r\n        wrap[i].style.cssText = `transform: rotate(${i*6}deg);`\r\n        document.querySelector('.clockface').append(wrap[i])\r\n    }\r\n}\r\n\r\nfunction getColor(){\r\n    return 'hsl(' + 360*Math.random() + ', ' +\r\n            (25+70*Math.random()) + '%' + ', ' +\r\n            (85 + 10*Math.random()) + '%)'\r\n}\r\n\r\nfunction clockFace(dateValues){\r\n    let dayMonth = document.querySelector('.clock__day-month')\r\n    dayMonth.innerHTML = dateValues.date\r\n    let dayWeek = document.querySelector('.clock__day-week')\r\n    dayWeek.innerHTML = daysOfWeek[dateValues.day]\r\n\r\n    // Установка текущей стрелки (минуты и секунды)\r\n    wrap[dateValues.scVal].firstChild.style = 'transform: translate(0, -4px);';\r\n    wrap[dateValues.mnVal].firstChild.style.backgroundColor = 'red';\r\n\r\n    // Цвета лампочек\r\n    wrap[Math.round(59*Math.random())].childNodes[1].style.backgroundColor = getColor()\r\n    if(Math.round(10*Math.random())===5){\r\n        wrap[Math.round(59*Math.random())].childNodes[1].style.backgroundColor = 'red'\r\n    }\r\n    \r\n    //Часовая стрелка\r\n    if(dateValues.hrVal >= 12){\r\n        wrap[(dateValues.hrVal - hourCorrection)*5].childNodes[2].style.color = 'red';\r\n        // дублирование кода \r\n        //Обнуление предыдущего часа\r\n        if (((dateValues.hrVal - hourCorrection) * 5) === 0){\r\n            wrap[11 * 5].childNodes[2].style.color = '';\r\n        }else {\r\n            wrap[(dateValues.hrVal - hourCorrection -1) * 5].childNodes[2].style.color = '';\r\n        }\r\n    }else{\r\n        wrap[dateValues.hrVal*5].childNodes[2].style.color = 'red';\r\n        // Дублирование кода \r\n        //Обнуление предыдущего часа\r\n        if ((dateValues.hrVal) === 0){\r\n            wrap[11*5].childNodes[2].style.color = '';\r\n        }else {\r\n            wrap[(dateValues.hrVal-1)*5].childNodes[2].style.color = '';\r\n        }\r\n    }\r\n\r\n    // Предыдущее состояние стрелки\r\n    // Минуты\r\n    if (dateValues.mnVal===0){\r\n        wrap[59].firstChild.style.backgroundColor = '';\r\n    }else{\r\n        wrap[dateValues.mnVal-1].firstChild.style.backgroundColor = '';\r\n    }\r\n    //Секунды\r\n    if (dateValues.scVal===0){\r\n        wrap[59].firstChild.style = ``;\r\n    }else{\r\n        wrap[dateValues.scVal-1].firstChild.style = ``;\r\n    }\r\n    \r\n    //Переключение даты\r\n    if(dateValues.hrVal + dateValues.mnVal + dateValues.scVal === 0){\r\n        setIndicators();\r\n    }\r\n}\r\n\r\n\r\nfunction setIndicators(){\r\n    dayMonth.innerHTML = dateValues.date\r\n    dayWeek.innerHTML = daysOfWeek[dateValues.day]\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://neumorphism/./src/common.blocks/clockface/clockface.js?");

/***/ }),

/***/ "./src/common.blocks/clockwork/clockwork.js":
/*!**************************************************!*\
  !*** ./src/common.blocks/clockwork/clockwork.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clockWork\": () => (/* binding */ clockWork)\n/* harmony export */ });\nconst hour = document.querySelector('.clockwork__hour');\r\nconst minute = document.querySelector('.clockwork__minute');\r\nconst second = document.querySelector('.clockwork__second');\r\n\r\n// const transition = 'transition: 0.5s cubic-bezier(0.9, 0, 0, 1);'\r\n\r\nfunction clockWork(dateValues, transition){\r\n    if (transition){\r\n        transition = 'transition: 0.3s'\r\n    }else{\r\n        transition = ''\r\n    }\r\n    hour.style.cssText = `transform: rotate(${(dateValues.hrDeg)+(dateValues.mnVal/2)}deg); ${transition}`;\r\n    minute.style.cssText = `transform: rotate(${dateValues.mnDeg + dateValues.scVal/10}deg); ${transition}`;\r\n    second.style.cssText = `transform: rotate(${dateValues.scDeg}deg);  ${transition}`;\r\n}\r\n\r\n\n\n//# sourceURL=webpack://neumorphism/./src/common.blocks/clockwork/clockwork.js?");

/***/ }),

/***/ "./src/common.blocks/pagination/pagination.js":
/*!****************************************************!*\
  !*** ./src/common.blocks/pagination/pagination.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const { clearElement, setClasses, removeClasses, getCorrectionIndex, getCurrentIndex, shiftElements, defineElement,  transition, slidesArr, currentClass, nextClass, previousClass  } = __webpack_require__(/*! ../slider/slider.js */ \"./src/common.blocks/slider/slider.js\");\r\n\r\nconst prevBtnClass = 'pagination__btn-prev'\r\nconst paginationClass = 'pagination__btn'\r\nconst nextBtnClass = 'pagination__btn-next'\r\n\r\nconst paginationActiveSwitch = function(currentIndex, index, theme){\r\n    removeClasses([paginationArr[currentIndex], paginationArr[index]], ['pagination__btn_status_active_' + theme, 'pagination__btn_theme_' + theme])\r\n    setClasses([paginationArr[currentIndex], paginationArr[index]], ['pagination__btn_theme_' + theme, 'pagination__btn_status_active_' + theme])\r\n}\r\n\r\nconst paginationActiveThemeControl = function(currentIndex, index){\r\n    if(Array.from(paginationArr[currentIndex].classList).find(el => el.match(/active/)).endsWith('light')){\r\n        paginationActiveSwitch(currentIndex, index, 'light')\r\n    }else {\r\n        paginationActiveSwitch(currentIndex, index, 'dark')\r\n    }\r\n}\r\n\r\n\r\nconst updateStatus = function(direction){\r\n    let correctionIndex = getCorrectionIndex(direction)\r\n    let currentIndex = getCurrentIndex()\r\n\r\n    if (direction === previousClass && currentIndex === 0){\r\n        clearElement(slidesArr[slidesArr.length - 1])\r\n        paginationActiveThemeControl(currentIndex, slidesArr.length - 1)\r\n        setClasses([slidesArr[slidesArr.length - 1]], [previousClass])\r\n    }else if (direction === nextClass && currentIndex === slidesArr.length - 1){\r\n        clearElement(slidesArr[0])\r\n        paginationActiveThemeControl(currentIndex, 0)\r\n        setClasses([slidesArr[0]], [nextClass])\r\n    }else{\r\n        clearElement(slidesArr[currentIndex + correctionIndex])\r\n        paginationActiveThemeControl(currentIndex, currentIndex + correctionIndex)\r\n        setClasses([slidesArr[currentIndex + correctionIndex]], [direction])\r\n    }\r\n}\r\n\r\nconst timeoutSequence = function(currentEl, anotherEl, direction, btnStatus){\r\n    let directionReverse = (direction === nextClass) ? previousClass : nextClass\r\n    let listener = (direction === nextClass) ? listenerNext : listenerPrev\r\n\r\n    setTimeout(()=>{\r\n        shiftElements(currentEl, anotherEl, directionReverse)\r\n    }) \r\n    setTimeout(()=>{\r\n        clearElement(currentEl)\r\n        if(btnStatus){\r\n            document.querySelector(`.${btnStatus}`).addEventListener('click', listener, {once: true});\r\n        }\r\n    }, transition.replace('ms', ''))\r\n}\r\n\r\nconst listenerPrev = function(){\r\n    updateStatus(previousClass)\r\n    timeoutSequence(defineElement(currentClass), defineElement(previousClass), previousClass, prevBtnClass)\r\n}\r\n\r\nconst listenerPages = function(){\r\n    let index = this.index\r\n    let currentIndex = getCurrentIndex()\r\n\r\n    paginationActiveThemeControl(currentIndex, index)\r\n\r\n    if (index > currentIndex){\r\n        //Next\r\n        timeoutSequence(defineElement(currentClass), defineElement(nextClass, index), nextClass, false)\r\n    }else if(index === currentIndex){\r\n        console.log('та же кнопка')\r\n    }else if(index < currentIndex){\r\n        //Prev\r\n        timeoutSequence(defineElement(currentClass), defineElement(previousClass, index), previousClass, false)\r\n    }else{\r\n        alert('Ошибка')\r\n    }\r\n}\r\n\r\nconst listenerNext = function(){\r\n    updateStatus(nextClass)\r\n    timeoutSequence(defineElement(currentClass), defineElement(nextClass), nextClass, nextBtnClass)\r\n}\r\n\r\n\r\nlet paginationArr = [document.querySelector('.pagination__btn')]\r\n\r\n\r\n\r\n//Проверка вохможности слайдера \r\nif (slidesArr.length>1){\r\n    slidesArr[0].classList.add(currentClass)\r\n    document.querySelector(`.${prevBtnClass}`).addEventListener('click', listenerPrev, {once: true})\r\n    document.querySelector(`.${nextBtnClass}`).addEventListener('click', listenerNext, {once: true})\r\n}else{\r\n    console.log('Мало элементов для слайдера')\r\n}\r\n\r\nfor (let index = 1; index < slidesArr.length; index++) {\r\n    let pagPage = document.createElement('div')\r\n    pagPage.classList.add(paginationClass)\r\n    pagPage.classList.add('pagination__btn_theme_light')\r\n    pagPage.innerHTML = index + 1\r\n\r\n    paginationArr.push(pagPage)\r\n    document.querySelector(`.${nextBtnClass}`).before(pagPage)\r\n}\r\ndocument.querySelectorAll(`.${paginationClass}`).forEach((el, index)=>{\r\n    el.addEventListener('click', {handleEvent: listenerPages, index: index})\r\n})\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://neumorphism/./src/common.blocks/pagination/pagination.js?");

/***/ }),

/***/ "./src/common.blocks/slider/slider.js":
/*!********************************************!*\
  !*** ./src/common.blocks/slider/slider.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clearElement\": () => (/* binding */ clearElement),\n/* harmony export */   \"currentClass\": () => (/* binding */ currentClass),\n/* harmony export */   \"defineElement\": () => (/* binding */ defineElement),\n/* harmony export */   \"getCorrectionIndex\": () => (/* binding */ getCorrectionIndex),\n/* harmony export */   \"getCurrentIndex\": () => (/* binding */ getCurrentIndex),\n/* harmony export */   \"nextClass\": () => (/* binding */ nextClass),\n/* harmony export */   \"previousClass\": () => (/* binding */ previousClass),\n/* harmony export */   \"removeClasses\": () => (/* binding */ removeClasses),\n/* harmony export */   \"setClasses\": () => (/* binding */ setClasses),\n/* harmony export */   \"shiftElements\": () => (/* binding */ shiftElements),\n/* harmony export */   \"slidesArr\": () => (/* binding */ slidesArr),\n/* harmony export */   \"transition\": () => (/* binding */ transition)\n/* harmony export */ });\nconst transition = '500ms'\r\n\r\n//Получение массива слайдов\r\nconst slideClass = 'slider__slide'\r\nconst slidesArr = document.querySelectorAll(`.${slideClass}`)\r\n\r\nconst previousClass = 'slider_previous'\r\nconst currentClass = 'slider_current'\r\nconst nextClass = 'slider_next'\r\n\r\n//Регулярки\r\nconst RegCurrent = new RegExp(`${currentClass}`, '')\r\nconst RegPrevNext = new RegExp(`${previousClass}|${nextClass}`, '');\r\nconst RegFull = new RegExp(`${nextClass}|${currentClass}|${previousClass}`, '');\r\n\r\nconst defineElement = function(className, index){\r\n    let element\r\n    if (index !== undefined){\r\n        element = slidesArr[index];\r\n        element.classList.add(className)\r\n    }else{\r\n        element = document.querySelector(`.${className}`);\r\n    }\r\n    element.style.transition = transition;\r\n    element.style.display = '';\r\n\r\n    return element\r\n}\r\n\r\nconst shiftElements = function(currentEl, anotherEl, directionReverse){\r\n    currentEl.className = currentEl.className.replace(currentClass, directionReverse)\r\n    anotherEl.className = anotherEl.className.replace(anotherEl.className.match(RegPrevNext), currentClass)\r\n}\r\n\r\nconst clearElement = function(element){\r\n    element.classList.remove(element.className.match(RegFull))\r\n    element.style.display = 'none'\r\n}\r\n\r\nconst removeClasses = function(elementArr, classNameArr){\r\n    elementArr.forEach((el, index) => {\r\n        el.classList.remove(classNameArr[index])\r\n    });\r\n}\r\nconst setClasses = function(elementArr, classNameArr){\r\n    elementArr.forEach((el, index) => {\r\n        el.classList.add(classNameArr[index])\r\n    });\r\n}\r\n\r\nconst getCurrentIndex = function(){\r\n    let index = 0\r\n    let currentIndex = index\r\n\r\n    while(!slidesArr[index].className.match(RegCurrent)){\r\n        index++\r\n        currentIndex = index\r\n    }\r\n    \r\n    return currentIndex\r\n}\r\n\r\nconst getCorrectionIndex = function(direction){\r\n    let correctionIndex\r\n\r\n    if (direction === previousClass){\r\n        correctionIndex = -1\r\n    }else if (direction === nextClass){\r\n        correctionIndex = 1\r\n    }else {\r\n        alert('wrong direction')\r\n    }\r\n    \r\n    return correctionIndex\r\n}\r\n\r\n\n\n//# sourceURL=webpack://neumorphism/./src/common.blocks/slider/slider.js?");

/***/ }),

/***/ "./src/common.blocks/switchers/switchers.js":
/*!**************************************************!*\
  !*** ./src/common.blocks/switchers/switchers.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"switchers\": () => (/* binding */ switchers)\n/* harmony export */ });\nconst switchUpper = document.querySelector('.switchers__switch-box_z_upper');\nconst switchBottom = document.querySelector('.switchers__switch-box_z_bottom');\n\nconst switchInner = document.querySelectorAll('.switchers__inner_z_bottom, .switchers__inner_z_upper');\nconst icons = document.querySelector('.switchers__icons');\nconst iconOn = document.querySelector('.switchers__icon-on');\nconst iconOff = document.querySelector('.switchers__icon-off');\n\nconst { themeSwitcher } = __webpack_require__(/*! ../../index.js */ \"./src/index.js\");\n\nconst clockCase = document.querySelector('.clock__case');\nconst generator = document.querySelector('.generator');\nconst header = document.querySelector('.header');\nconst content = document.querySelector('.content');\nconst slide = document.querySelectorAll('.slider__slide');\nconst pagination = document.querySelector('.pagination');\nconst paginationBtn = document.querySelectorAll('.pagination__btn');\nconst paginationBtnPrev = document.querySelector('.pagination__btn-prev');\nconst paginationBtnNext = document.querySelector('.pagination__btn-next');\nconst serifs = document.querySelectorAll('.clockface__serif');\n\n\n// Добавить обработчики ошибок на селектор\n\nlet switchers = {\n    leftTrigger: document.querySelector(\".switchers__trigger\").addEventListener('click', ()=>{\n\n        switchUpper.classList.remove(\"switchers__switch-box_theme_light\");\n        switchUpper.classList.add(\"switchers__switch-box_theme_dark\")\n    \n        switchBottom.classList.remove(\"switchers__switch-box_theme_dark\")\n        switchBottom.classList.add(\"switchers__switch-box_theme_light\")\n    \n        for (let inner of switchInner) {\n            inner.classList.remove('switchers__inner_position_right');\n        }\n    \n        icons.classList.remove('switchers__icons_position_right');\n    \n        iconOn.className = 'switchers__icon-on switchers__icon-on_no-power';\n        iconOff.className = 'switchers__icon-off switchers__icon-off_power';\n\n        themeSwitcher(clockCase, 'dark')\n        themeSwitcher(header, 'dark')\n        themeSwitcher(content, 'dark')\n        themeSwitcher(pagination, 'dark')\n        themeSwitcher(paginationBtnPrev, 'dark')\n        themeSwitcher(paginationBtnNext, 'dark')\n        themeSwitcher(generator, 'dark')\n        slide.forEach(element => {\n            themeSwitcher(element, 'dark')\n        });\n        serifs.forEach(element => {\n            themeSwitcher(element, 'dark')\n        });\n        paginationBtn.forEach(element => {\n            themeSwitcher(element, 'dark')\n        });\n    }),\n\n    rightTrigger: document.querySelector(\".switchers__trigger.switchers__trigger_right\").addEventListener('click', ()=>{\n        switchUpper.classList.remove(\"switchers__switch-box_theme_dark\");\n        switchUpper.classList.add(\"switchers__switch-box_theme_light\");\n    \n        switchBottom.classList.remove(\"switchers__switch-box_theme_light\");\n        switchBottom.classList.add(\"switchers__switch-box_theme_dark\");\n    \n        for (let inner of switchInner) {\n            inner.classList.add('switchers__inner_position_right');\n        }\n    \n        icons.classList.add('switchers__icons_position_right');\n    \n        iconOn.className = 'switchers__icon-on switchers__icon-on_power';\n        iconOff.className = 'switchers__icon-off switchers__icon-off_no-power';\n\n        themeSwitcher(clockCase, 'light')\n        themeSwitcher(header, 'light')\n        themeSwitcher(content, 'light')\n        themeSwitcher(pagination, 'light')\n        themeSwitcher(paginationBtnPrev, 'light')\n        themeSwitcher(paginationBtnNext, 'light')\n        themeSwitcher(generator, 'light')\n        slide.forEach(element => {\n            themeSwitcher(element, 'light')\n        });\n        serifs.forEach(element => {\n            themeSwitcher(element, 'light')\n        });\n        paginationBtn.forEach(element => {\n            themeSwitcher(element, 'light')\n        });\n        \n    })\n}\n\n\n\n//# sourceURL=webpack://neumorphism/./src/common.blocks/switchers/switchers.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createElement\": () => (/* binding */ createElement),\n/* harmony export */   \"getDate\": () => (/* binding */ getDate),\n/* harmony export */   \"themeSwitcher\": () => (/* binding */ themeSwitcher)\n/* harmony export */ });\n__webpack_require__(/*! ./style.css */ \"./src/style.css\");\n// require('./common.blocks/slider/slider.js');\n__webpack_require__(/*! ./common.blocks/pagination/pagination.js */ \"./src/common.blocks/pagination/pagination.js\");\n__webpack_require__(/*! ./common.blocks/clock/clock.js */ \"./src/common.blocks/clock/clock.js\");\n__webpack_require__(/*! ./common.blocks/switchers/switchers.js */ \"./src/common.blocks/switchers/switchers.js\");\n\nfunction themeSwitcher(element, theme){\n    let className = Array.from(element.classList).find(el => el.match(/theme|active/))\n    //Проверка на наличие класса с темой\n    if(className){\n        if (theme === 'light'){\n            element.classList.remove(className)\n            element.classList.add(className.replace('dark', 'light'))\n        }else if (theme === 'dark'){\n            element.classList.remove(className)    \n            element.classList.add(className.replace('light', 'dark'))\n        }\n    }\n}\n\nfunction createElement(className, tagName){\n    let element = document.createElement(tagName)\n    element.className = className\n    return element\n}\n\nfunction getDate(){\n    return new Date();\n}\n\n\n\n//# sourceURL=webpack://neumorphism/./src/index.js?");

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;