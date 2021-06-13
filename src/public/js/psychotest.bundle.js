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

eval("const qElem = document.querySelector('div[data-questions]');\nconst questions = JSON.parse(qElem.dataset.questions);\nqElem.remove();\n\nconst getCloneTemplate = (query) => {\n    const template = document.querySelector(query);\n    return template.content.firstElementChild.cloneNode(true);\n};\n\nconst state = {\n    currentPage: 0,\n    maxPage: questions.length,\n};\n\nconst answer = Array(questions.length);\nlet newElem = getCloneTemplate('#template-question');\n\nconst header = newElem.querySelector('.content-header');\nconst selections = newElem.querySelector('.content-selections');\nconst index = newElem.querySelector('p');\n\nheader.textContent = `Q. ${questions[0].question}`;\nquestions[0].answers.forEach((value, idx) => {\n    const elem = getCloneTemplate('#template-selection');\n    elem.querySelector('.selection_text').textContent = value;\n    selections.appendChild(elem);\n});\nindex.textContent = `1/${questions.length}`;\n\nlet oldElem = document.querySelector('.content-question');\n\noldElem.replaceWith(newElem);\n\n\n//# sourceURL=webpack://psychotest/./static/js/psychotest/index.js?");

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