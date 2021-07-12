/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./static/css/psychotest/index.sass":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./static/css/psychotest/index.sass ***!
  \***********************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".psycho__question {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n  width: 100%;\\n  padding-bottom: 20px;\\n  flex: 1;\\n}\\n\\n.question__index {\\n  margin-bottom: 50px;\\n}\\n\\n.question__query {\\n  width: 80%;\\n  height: 150px;\\n  padding: 10px 0px;\\n}\\n.question__query > p {\\n  font-size: 24px;\\n  font-weight: 700;\\n  text-align: center;\\n}\\n\\n.question__yes-or-no {\\n  display: flex;\\n  width: 50%;\\n  margin-bottom: 50px;\\n}\\n.question__yes-or-no > button {\\n  flex: 1;\\n  padding: 10px 20px;\\n  font-size: 24px;\\n  border: 1px solid #c3b8b4;\\n}\\n\\n.question__yes-button {\\n  margin-right: 5px;\\n  color: #1ACBC3;\\n  border-top-right-radius: 0px;\\n  border-bottom-right-radius: 0px;\\n}\\n\\n.question__no-button {\\n  color: #F25E42;\\n  border-top-left-radius: 0px;\\n  border-bottom-left-radius: 0px;\\n}\\n\\n.content-header {\\n  text-align: center;\\n  font-weight: 700;\\n  font-size: 32px;\\n  padding-bottom: 20px;\\n}\\n\\n.content-description {\\n  text-align: center;\\n  font-size: 28px;\\n  padding-bottom: 20px;\\n}\\n\\n.content-notice {\\n  text-align: center;\\n  color: #666666;\\n  font-size: 18px;\\n  padding-bottom: 20px;\\n}\\n\\n.content-thumbnail {\\n  display: flex;\\n  justify-content: center;\\n  margin: 20px 0px;\\n}\\n\\n.thumbnail__img {\\n  width: 100%;\\n}\\n\\n.psycho__control {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  width: 80%;\\n}\\n\\n.psycho__control-row {\\n  display: flex;\\n  justify-content: space-between;\\n  width: 100%;\\n  margin-bottom: 50px;\\n}\\n\\n.bt_submit#submit {\\n  flex: 1;\\n}\\n\\n.content-selections {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  width: 100%;\\n  margin: 40px 0;\\n  padding: 0 50px;\\n  text-align: center;\\n}\\n\\n.bt_submit {\\n  width: 100px;\\n  height: 50px;\\n}\\n\\n.bt_start {\\n  font-weight: 700;\\n  width: 200px;\\n  height: 40px;\\n  background-color: #92e5e2;\\n}\\n.bt_start:active {\\n  background-color: #5eaadd;\\n}\\n\\n.selection_box {\\n  display: flex;\\n  align-items: center;\\n  width: 100%;\\n  margin: 5px 0;\\n  padding: 0 20px;\\n  width: 100%;\\n  height: 50px;\\n  border-radius: 25px;\\n  border: 1px solid #c3b8b4;\\n}\\n.selection_box:hover {\\n  background-color: #fdf6e0;\\n  cursor: pointer;\\n}\\n.selection_box:active {\\n  background-color: #fef9c7;\\n  cursor: pointer;\\n}\\n\\n.deactivated {\\n  background-color: #eeeeee;\\n}\\n.deactivated:active {\\n  background-color: #aaaaaa;\\n}\\n\\n.completed {\\n  background-color: #92e5e2;\\n  font-weight: 700;\\n  animation: completed 1s infinite;\\n}\\n.completed:active {\\n  background-color: #5eaadd;\\n}\\n\\n.selected {\\n  cursor: default;\\n}\\n\\n.unselected {\\n  background-color: #eeeeee;\\n  color: #999999;\\n}\\n\\n.content-loading {\\n  display: flex;\\n}\\n\\n.hidden {\\n  visibility: hidden;\\n}\\n\\n@keyframes completed {\\n  0% {\\n    transform: scale(1, 1);\\n  }\\n  50% {\\n    transform: scale(1.05, 1.05);\\n  }\\n  100% {\\n    transform: scale(1, 1);\\n  }\\n}\\n@keyframes fadeIn {\\n  0% {\\n    opacity: 0;\\n  }\\n  100% {\\n    opacity: 1;\\n  }\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://psychotest/./static/css/psychotest/index.sass?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://psychotest/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./static/css/psychotest/index.sass":
/*!******************************************!*\
  !*** ./static/css/psychotest/index.sass ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./index.sass */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./static/css/psychotest/index.sass\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_sass__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_sass__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://psychotest/./static/css/psychotest/index.sass?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://psychotest/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./static/js/psychotest/components/Question.js":
/*!*****************************************************!*\
  !*** ./static/js/psychotest/components/Question.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Question\": () => (/* binding */ Question)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ \"./static/js/utils.js\");\n\r\n\r\nconst draw = (elem, state, event) => {\r\n    const { loadingQuery, questions, answer, currentPage, maxPage } = state;\r\n    const { turnOffLoadingQuery, onClickYes, onClickNo } = event;\r\n\r\n    const divIndex = elem.querySelector('.question__index');\r\n    divIndex.firstElementChild.textContent = `${currentPage + 1}/${maxPage}`;\r\n\r\n    const divQuery = elem.querySelector('.question__query');\r\n    if (loadingQuery) {\r\n        divQuery.style.animation = 'fadeIn 2s';\r\n        turnOffLoadingQuery();\r\n    }\r\n\r\n    const pQuery = elem.querySelector('.question__query > p');\r\n    pQuery.textContent = `${questions[currentPage]['query']}`;\r\n\r\n    const btYes = elem.querySelector('.question__yes-button');\r\n    const btNo = elem.querySelector('.question__no-button');\r\n    btYes.addEventListener('click', onClickYes);\r\n    btNo.addEventListener('click', onClickNo);\r\n\r\n    const currAnswer = answer[currentPage];\r\n    if (currAnswer === undefined) {\r\n        return;\r\n    }\r\n    if (currAnswer) {\r\n        btYes.classList.add('selected');\r\n        btNo.classList.add('unselected');\r\n    } else {\r\n        btYes.classList.add('unselected');\r\n        btNo.classList.add('selected');\r\n    }\r\n};\r\n\r\nconst Question = (state, event) => {\r\n    const newElem = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.cloneTemplate)('#template-question-singular');\r\n    const oldElem = document.querySelector('.psycho__question');\r\n\r\n    draw(newElem, state, event);\r\n\r\n    oldElem.replaceWith(newElem);\r\n};\r\n\n\n//# sourceURL=webpack://psychotest/./static/js/psychotest/components/Question.js?");

/***/ }),

/***/ "./static/js/psychotest/components/Submit.js":
/*!***************************************************!*\
  !*** ./static/js/psychotest/components/Submit.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TestSubmit\": () => (/* binding */ TestSubmit)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ \"./static/js/utils.js\");\n\r\n\r\nconst setButtons = (elem, state, event) => {\r\n    const { currentPage, maxPage, answer } = state;\r\n\r\n    const prevBt = elem.querySelector('#prev');\r\n    const nextBt = elem.querySelector('#next');\r\n    const submitBt = elem.querySelector('#submit');\r\n\r\n    if (currentPage === 0) {\r\n        prevBt.classList.add('hidden');\r\n    } else {\r\n        prevBt.addEventListener('click', event.onClickPrev);\r\n    }\r\n    if (isNaN(answer[currentPage])) {\r\n        nextBt.classList.add('unselected');\r\n    } else {\r\n        nextBt.addEventListener('click', event.onClickNext);\r\n    }\r\n    if (currentPage === maxPage - 1) {\r\n        nextBt.classList.add('hidden');\r\n    }\r\n\r\n    if (answer.every((elem) => !isNaN(elem))) {\r\n        submitBt.classList.add('completed');\r\n        submitBt.textContent = '제출완료';\r\n        submitBt.addEventListener('click', event.onClickSubmit);\r\n    } else {\r\n        submitBt.classList.add('unselected');\r\n    }\r\n};\r\n\r\nconst TestSubmit = (state, event) => {\r\n    const newElem = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.cloneTemplate)('#template-submit');\r\n    const oldElem = document.querySelector('.psycho__control');\r\n\r\n    setButtons(newElem, state, event);\r\n\r\n    oldElem.replaceWith(newElem);\r\n};\r\n\n\n//# sourceURL=webpack://psychotest/./static/js/psychotest/components/Submit.js?");

/***/ }),

/***/ "./static/js/psychotest/index.js":
/*!***************************************!*\
  !*** ./static/js/psychotest/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"APPSTATE\": () => (/* binding */ APPSTATE)\n/* harmony export */ });\n/* harmony import */ var _css_psychotest_index_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css/psychotest/index.sass */ \"./static/css/psychotest/index.sass\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ \"./static/js/utils.js\");\n/* harmony import */ var _components_Question__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Question */ \"./static/js/psychotest/components/Question.js\");\n/* harmony import */ var _components_Submit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Submit */ \"./static/js/psychotest/components/Submit.js\");\n\r\n\r\n\r\n\r\n\r\nconst APPSTATE = {\r\n    INTRO: 'INTRO',\r\n    LOADING_Q: 'LOADING_QUESTIONS',\r\n    PLAYING: 'PLAYING',\r\n    LOADING_A: 'LOADING_ANSWER',\r\n};\r\n\r\nconst state = {\r\n    appState: APPSTATE.INTRO,\r\n    loadingQuery: true, // query fade-in animation\r\n    loadingQuestion: false, // loading question\r\n    loadingAnswer: false, // loading answer\r\n    questions: {},\r\n    answer: [],\r\n    currentPage: 0,\r\n    maxPage: 0,\r\n};\r\n\r\nconst event = {\r\n    turnOffLoadingQuery: () => {\r\n        state.loadingQuery = false;\r\n    },\r\n    onClickStart: async () => {\r\n        console.log('start');\r\n        const {\r\n            data: { type, contents },\r\n        } = await (0,_utils__WEBPACK_IMPORTED_MODULE_1__.fetchURL)('question/1');\r\n        console.log(type, contents);\r\n\r\n        state.appState = APPSTATE.LOADING_Q;\r\n        state.questions = contents;\r\n        state.answer = Array(contents.length).fill(undefined);\r\n        state.loadingQuestion = true;\r\n        state.maxPage = contents.length;\r\n\r\n        draw();\r\n    },\r\n    // 셀력션 선택\r\n    onClickSelection: (event, idx) => {\r\n        state.answer[state.currentPage] = idx;\r\n        draw();\r\n    },\r\n    // YES 버튼\r\n    onClickYes: () => {\r\n        const { answer, currentPage } = state;\r\n        answer[currentPage] = 1;\r\n        draw();\r\n    },\r\n    // NO 버튼\r\n    onClickNo: () => {\r\n        const { answer, currentPage } = state;\r\n        answer[currentPage] = 0;\r\n        draw();\r\n    },\r\n    // 이전 버튼\r\n    onClickPrev: () => {\r\n        state.currentPage--;\r\n        state.loadingQuery = true;\r\n        draw();\r\n    },\r\n    // 다음 버튼\r\n    onClickNext: () => {\r\n        state.currentPage++;\r\n        state.loadingQuery = true;\r\n        draw();\r\n    },\r\n    onClickSubmit: async () => {\r\n        // TODO; 랜덤값으로 대체해서 발사\r\n        //const data = state.answer;\r\n        const data = Array(15)\r\n            .fill(0)\r\n            .map((elem) => Math.round(Math.random()));\r\n        const {\r\n            data: { result },\r\n        } = await (0,_utils__WEBPACK_IMPORTED_MODULE_1__.fetchURL)('question/1', {\r\n            method: 'POST',\r\n            body: JSON.stringify({ data }),\r\n            headers: {\r\n                'Content-Type': 'application/json',\r\n            },\r\n        });\r\n        window.location.href = `${window.location.href}/results/${result}`;\r\n    },\r\n};\r\n\r\nconst draw = () => {\r\n    const { appState } = state;\r\n\r\n    switch (appState) {\r\n        case APPSTATE.INTRO:\r\n            (0,_components_Submit__WEBPACK_IMPORTED_MODULE_3__.TestSubmit)(state, event);\r\n            break;\r\n        case APPSTATE.LOADING_Q:\r\n            (0,_components_Question__WEBPACK_IMPORTED_MODULE_2__.Question)(state, event);\r\n            (0,_components_Submit__WEBPACK_IMPORTED_MODULE_3__.TestSubmit)(state, event);\r\n            break;\r\n        case APPSTATE.PLAYING:\r\n            (0,_components_Question__WEBPACK_IMPORTED_MODULE_2__.Question)(state, event);\r\n            (0,_components_Submit__WEBPACK_IMPORTED_MODULE_3__.TestSubmit)(state, event);\r\n            break;\r\n        case APPSTATE.LOADING_A:\r\n            (0,_components_Question__WEBPACK_IMPORTED_MODULE_2__.Question)(state, event);\r\n            (0,_components_Submit__WEBPACK_IMPORTED_MODULE_3__.TestSubmit)(state, event);\r\n            break;\r\n    }\r\n};\r\n\r\ndocument\r\n    .querySelector('.bt_start')\r\n    .addEventListener('click', event.onClickStart);\r\n\n\n//# sourceURL=webpack://psychotest/./static/js/psychotest/index.js?");

/***/ }),

/***/ "./static/js/utils.js":
/*!****************************!*\
  !*** ./static/js/utils.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cloneTemplate\": () => (/* binding */ cloneTemplate),\n/* harmony export */   \"fetchURL\": () => (/* binding */ fetchURL),\n/* harmony export */   \"setStateWrapper\": () => (/* binding */ setStateWrapper)\n/* harmony export */ });\n/**\r\n * query 의 해당하는 DOM의 첫번째 자손을 클론하여 반환\r\n * @param {*} query\r\n * @returns\r\n */\r\nconst cloneTemplate = (query) => {\r\n    const template = document.querySelector(query);\r\n    return template.content.firstElementChild.cloneNode(true);\r\n};\r\n\r\n/**\r\n * fetch 와 동일하게 사용하며 json을 리턴합니다.\r\n * @param {*} url\r\n * @param {*} options\r\n * @returns\r\n */\r\nconst fetchURL = async (url, options) => {\r\n    try {\r\n        const data = await fetch(\r\n            `${window.location.origin}/api/${url}`,\r\n            options,\r\n        );\r\n        return data.json();\r\n    } catch (err) {\r\n        console.log(err);\r\n        return undefined;\r\n    }\r\n};\r\n\r\n/**\r\n * setState 함수를 반환하는 함수입니다\r\n * @param {Object} state\r\n * @param {Function} draw\r\n * @returns setState 함수를 반환합니다\r\n */\r\nconst setStateWrapper = (state, draw) => {\r\n    return (objects) => {\r\n        for (const a in objects) {\r\n            if (a in state) {\r\n                state[a] = objects[a];\r\n            }\r\n        }\r\n        draw();\r\n    };\r\n};\r\n\n\n//# sourceURL=webpack://psychotest/./static/js/utils.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./static/js/psychotest/index.js");
/******/ 	
/******/ })()
;