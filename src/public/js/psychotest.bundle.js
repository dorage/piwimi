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

/***/ "./static/js/psychotest/index.js":
/*!***************************************!*\
  !*** ./static/js/psychotest/index.js ***!
  \***************************************/
/***/ (() => {

eval("const qElem = document.querySelector('div[data-questions]');\r\nconst questions = JSON.parse(qElem.dataset.questions);\r\nqElem.remove();\r\nconsole.log(questions);\r\n\r\nconst getCloneTemplate = (query) => {\r\n    const template = document.querySelector(query);\r\n    return template.content.firstElementChild.cloneNode(true);\r\n};\r\n\r\nconst answer = Array(questions.length);\r\nlet newElem = getCloneTemplate('#template-question');\r\nconsole.log(newElem);\r\nconst header = newElem.querySelector('.content-header');\r\nconst selections = newElem.querySelector('.content-selections');\r\nconst index = newElem.querySelector('p');\r\n\r\nconsole.log(selections);\r\nheader.textContent = `Q. ${questions[0].question}`;\r\nquestions[0].answers.forEach((value, idx) => {\r\n    const elem = getCloneTemplate('#template-selection');\r\n    elem.querySelector('.selection_text').textContent = value;\r\n    selections.appendChild(elem);\r\n});\r\nindex.textContent = `1/${questions.length}`;\r\n\r\nlet oldElem = document.querySelector('.content-question');\r\n\r\noldElem.replaceWith(newElem);\r\n\n\n//# sourceURL=webpack://psychotest/./static/js/psychotest/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./static/js/psychotest/index.js"]();
/******/ 	
/******/ })()
;