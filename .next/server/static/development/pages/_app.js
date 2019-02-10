module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/Shea/projects/jason/undefined.is/undefined-site/components/Header.js";


function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  padding: 2rem 0;\n\n  h1 {\n    margin: 0;\n    padding: 0;\n\n    a svg {\n      width: 120px;\n    }\n  }\n  button {\n    border: none;\n    font-size: 1.6rem;\n    display: block;\n  }\n  a {\n    display: block;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




var Logo = function Logo(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    viewBox: "0 0 1000.2 1187.3"
  }, props, {
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M9.1 761.3h991.1V.1H.1v760.6c2.8.9 6 .6 9 .6zm83.6-367.7c12.8.9 25.6 2.5 38.4.8 0 11.9-1.3 23.8-1.8 35.6-.8 28.7-3.7 57.4-2 86.1 1.3 21.2 5.2 42.4 13.8 61.9 12.4 28.2 34.3 51.2 61.8 65.1 35.8 18.2 79.6 19.3 116.3 3.1 27.2-11.7 49.9-32.9 64.1-58.8 19-34.1 25.5-73.4 27.9-111.9 2.6-42.5-.2-84.9-1.5-127.4-.5-13 .2-26.1-.7-39.1-1.2-18.3-3-36.6-3.6-54.9-.3-12.9-.5-26.1 2.3-38.8 13.1-1.7 26.3-1.9 39.5-.4 2.5.4 5.1.6 7.4 1.6 1.6 5.7 1.5 11.7 1.9 17.6.8 26 .6 52.3 5.6 78 3 15.6 8.1 31 16.7 44.4 10.1 16 24.2 29.9 41.4 38.1 13.9 6.8 29.5 9.4 44.9 7.4 18.4-2.3 35.6-11.3 49-24 13.1-12.4 22.1-28.7 26.8-46 5.9-21.1 6.4-43.3 6.3-65.1.1-25.2-.4-50.4 1.5-75.5 1.7-20.7 5.2-41.5 13-60.8 6.2-15.4 15.3-30 27.6-41.3 16.6-15.5 39-24.1 61.5-25.2 34.8-1.9 69.5 11.6 95.9 34 24.7 21.2 40.9 50.8 50.8 81.4 7.4 23.1 11.4 47.1 12 71.4.3 13 .1 26.2-3 38.9-3.3-.4-6.8 0-9.9-1.6-8.7-4.1-18.3-5.1-27.8-5.8.1-22 7.3-43.4 6-65.5-1.6-20.9-6.6-41.9-16.4-60.6-6.4-12.2-15-23.2-25.3-32.4-11.3-11.8-27-19-43.1-21.1-17.6-2.6-35.5.5-51.2 8.8-12.9 6.7-24.3 16.2-34.1 26.9-13.1 14.6-21.4 33-25.2 52.2-4.4 22.1-3.7 44.7-4.3 67.1-.5 29.4-1.2 59-6.5 88.1-3.5 18.3-8.8 36.7-19 52.5-8.1 12.8-20.1 22.6-34.3 28.1-15.7 6-32.8 7.5-49.5 6.9-13.1-.6-26.2-2.7-38.8-6.2-6.4-1.5-12-5.1-18-7.6-10.1-4.5-21-9-32.3-7.7-10.4 1.1-19.8 7.8-25 16.8-6.1 10.3-7.8 22.4-9.2 34-2.8 26.9-2.6 54-3.5 81-.4 8-.2 16.1-1.6 24-10.5 35.3-30.9 66.8-58.7 90.9-22.3 19.6-50.3 32.2-79.4 37.4-42.3 7.6-87.3.5-124.9-20.5-24.3-13.6-44.7-33.2-59.3-56.9-15.3-24.6-25.2-52.8-27-81.7-2.1-26-3.7-52-3.6-78.1.5-21.8.9-44.2 8.1-65.2zm585.8 687.5h36.2c-6-12.8-12-25.7-18.1-38.5-6.3 12.7-12 25.7-18.1 38.5zM.1 778.6v408.6h1000.2V778.6H.1zm593.6 67.7c3.5-.8 7.2-.3 10.8-.3 1.6-.1 2.9 1 3.1 2.6V940.7c.1 1.5-1 2.9-2.6 3h-.4c-3.4 0-6.8.2-10.1-.1-1.4-.3-2.3-1.6-2.1-3V850c-.2-1.2-.1-3 1.3-3.7zm-432.9 61.1c0 10-3.9 19.5-11 26.5-14.9 14.7-41.3 15.1-56.7 1-7.6-7.1-11.9-17-11.9-27.4V850c-.1-1.3 0-2.9 1.3-3.5 3.4-1 7.2-.3 10.8-.5 1.5-.3 3 .7 3.3 2.2.1.3.1.5 0 .8v56.5c0 5.7 1.3 11.5 4.6 16.1 8 11.5 26.4 12.7 36.5 3.3 4.8-4.6 7.5-10.8 7.5-17.4V849c-.2-1.4.7-2.7 2.1-3 3.7-.2 7.3-.2 11 0 1.5.2 2.5 1.5 2.4 3 .1 19.5.1 39 .1 58.4zM275.4 850c-.1 30.8 0 61.7 0 92.5-.2 3.4-4.4 2.5-6.6 2.6-21-24-42.1-48-63.2-71.9-.4 22.5 0 44.9-.2 67.4.2 1.5-.8 2.8-2.3 3h-.5c-3.3.1-6.7.1-10.1-.1-1.7-.5-2.2-2.4-2-4 .1-30.9-.1-61.7.1-92.6.3-3.3 4.4-2.5 6.6-2.5 20.9 23.4 42.1 46.7 63.2 70v-65.5c-.2-1.4.8-2.8 2.3-3 3.7-.3 7.3-.3 11 .1 1.6.8 1.9 2.6 1.7 4zm112.3 68.3c-7.4 12.5-19.7 21.4-33.9 24.3-6.9 1.6-14 1.1-21 1.2h-23.1c-1.6.2-3-.9-3.2-2.4v-.6-90.6c-.1-1.4.1-3.1 1.5-3.8 5.9-.8 11.9-.1 17.8-.3 10.4.3 21-1 31.1 1.9 15 4 28.1 15.1 33.9 29.7 5.2 13.2 4.1 28.2-3.1 40.6zm33.3 25.5c-1.5.2-2.8-.9-3-2.4v-.6V849c-.2-1.5.9-2.8 2.4-3h.7c19.1-.1 38.1 0 57.2 0 1.5-.2 3.4.5 3.6 2.2.2 3 .2 6 0 8.9-.3 1.7-2.1 2.3-3.6 2.2h-45.1v28.3c13 0 26-.1 39 0 1.5 0 2.7 1.2 2.7 2.7v.1c.1 2.9.1 5.7-.1 8.6-.5 1.4-2 2.1-3.4 1.8h-38.3v29.9c15.7.1 31.4-.1 47 .1 2.8 1.1 1.6 4.6 1.9 6.8 0 2.2.5 6.1-2.7 6.1-19.4.2-38.9.1-58.3.1zm112.2 155.9c-3.6 7.3-10.7 12.3-18.3 14.5-15.2 4-31.4.5-43.5-9.6-3-2.1 0-5.3 1.3-7.3s3.3-5.8 6.3-4.2c7.1 5.1 15.2 9.9 24.3 9.9 5.9 0 12.4-2.6 15-8.2 2.4-5 .5-11.1-3.6-14.6-8.5-7.6-20.3-9.5-29.7-15.5-5.8-3.5-11-8.5-13-15.1-2.3-7-1.4-14.8 2.5-21.1 4.4-7.1 12.2-11.4 20.3-12.7 12.5-2 25.4.9 35.8 8.2 2.3 2.5-.6 5.3-2 7.4-1.4 2-3.2 5.3-6.1 3.8-7.9-4.4-16.8-9-26-6.6-6.1 1.2-11.6 7-10.5 13.6 1 7.2 7.9 11.1 13.9 13.8 10.3 4.4 21.6 8 29.5 16.4 6.6 7.5 8.2 18.3 3.8 27.3zm28.1-195.3c-13.1.2-26.3 0-39.4.1 0 12.3.1 24.7-.1 37-.7 3.5-5.1 2.1-7.6 2.4-2.5-.3-7 1.1-7.4-2.5-.1-30.7 0-61.4 0-92.1-.2-1.6 1-3.1 2.6-3.3h.8c17.4-.1 34.8 0 52.2 0 2.3.1 4.6-.3 6.9.3 2.5 1.3 1.2 4.6 1.5 6.9-.1 2.1.6 5.8-2.4 6.1-15.5.2-31 0-46.5.1v32.1c13.1.1 26.3-.1 39.4.1 2.9.3 2.3 3.8 2.4 5.9-.3 2.2.9 6.4-2.4 6.9zm70.6 118.8c-.2 2.3.8 6.4-2.5 6.6-8 .2-16 0-24 .1v81c.4 1.5-.5 3-2 3.5-3.6.2-7.2.2-10.8.1-1.6-.2-2.8-1.8-2.5-3.4v-.2-80.9c-7.8 0-15.7.1-23.5 0-1.2.1-2.3-.6-2.8-1.7-.3-3-.3-6-.1-9 .1-1.4 1.2-2.5 2.6-2.4h63.3c3.1-.1 2.2 4.1 2.3 6.3zm8.6-79.5c-1.2-.5-2-1.6-1.9-2.9V848c-.6-3.7 4.4-4.1 6.7-3.1 21.2 23.2 42.1 46.5 63.2 69.8V849c-.2-1.5.9-2.9 2.4-3.1h.6c3.4-.2 6.7-.1 10.1.2 1.7.5 2 2.4 1.9 3.9-.1 30.9.1 61.7-.1 92.6-.2 3.3-4.4 2.5-6.7 2.6l-63.3-72v67.5c.1 1.5-1 2.9-2.5 3h-.4c-3.3.1-6.6.3-10 0zm102.6 170.6c-3.8.3-7.6.3-11.3.1-1.8-.2-2.4-2.1-3.1-3.4-2.7-5.9-5.6-11.8-8.3-17.7-15.8-.1-31.7 0-47.5-.1-2.9 6.2-5.8 12.3-8.7 18.6-.5 1.6-1.9 2.7-3.6 2.7-3.5.2-7.1.1-10.6-.2-1.7-.5-2-2.6-1.1-3.9 14.7-30.9 29.4-61.8 44.2-92.7.9-3.1 6-3.3 7.2-.3 14.7 31 29.3 61.9 44 92.8.9 1.3.7 3.6-1.2 4.1zm11.5-173.6V849c-.2-1.5.9-2.8 2.4-3h.6c19.4-.1 38.9-.1 58.3 0 3.6.2 2.6 4.6 2.7 7.1 0 2.2.5 6.1-2.7 6.1-15.4.2-30.8 0-46.2.1v28.3c13.3.1 26.5-.2 39.8.1 2.8 1 1.7 4.4 2 6.7-.3 2.1.8 5.2-1.7 6.3-13.3.3-26.7 0-40 .1v29.9c15.7.1 31.3-.1 47 .1 2.8 1.1 1.6 4.5 1.9 6.8 0 2.2.5 6.2-2.8 6.1-19.4.1-38.8 0-58.2 0-1.5.2-2.9-.8-3.1-2.3v-.7zm72.9 89.1c-8 .2-16.1 0-24.2.1v80.9c.2 1.6-.8 3.6-2.6 3.6-3.3.1-6.7.1-10 0-1.4 0-2.6-1.1-2.7-2.5v-.1c-.1-27.3 0-54.6 0-81.8-8-.1-16 .1-24-.1-3.4-.2-2.4-4.3-2.5-6.6.2-2.2-.9-6.3 2.4-6.5 21.2 0 42.5-.1 63.7 0 3.1.4 2.2 4.3 2.3 6.5-.1 2.2.8 6.1-2.4 6.5zm99.5 84.6c-19.3.1-38.6 0-57.9 0-1.6.2-3-.9-3.2-2.5 0-.3 0-.7.1-1v-91.8c-.2-1.6 1.6-2.7 3-2.5 19.6 0 39.2-.1 58.8.1 2.9.6 1.9 4.3 2.2 6.5-.2 2.2.7 5.9-2.2 6.5-15.6.3-31.2 0-46.8.1v28.3c13 0 26.1-.1 39.2.1 3.2.1 2.7 4 2.7 6.3-.3 2.3.8 5.7-1.9 6.8-13.3.2-26.6 0-40 .1v30h46.1c3.4-.1 2.9 4.1 2.9 6.4s.7 6.7-3 6.6zm.1-200.9c-6.2 14.5-19.8 25.3-35 28.8-7.9 2-16 1.3-24.1 1.5-7.4-.1-14.8.1-22.1-.1-1.7.1-2.6-1.7-2.5-3.2v-90.4c0-1.2-.1-2.7 1-3.5 1.2-1.1 3.1-.5 4.6-.7 10.3.1 20.7 0 31 0 19.2-.1 38.3 11.2 46.5 28.8 5.9 12.3 6.1 26.5.6 38.8zM884 859.8c-8.4-.9-17-.2-25.4-.4v71.1c13.3-.4 28 2 39.8-5.7 15-8.8 20.4-29.4 13.2-45-4.8-11-15.9-18.5-27.6-20zm-528.1 2.4c-10.9-4.4-22.9-2.2-34.3-2.8v71.1c13-.4 27.3 2 39-5.2 13.6-7.5 20-24.7 16.1-39.5-2.7-10.8-10.5-19.6-20.8-23.6z",
    __self: this
  }));
};

var StyledHeader = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.header(_templateObject());

var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledHeader, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Logo, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Contact")));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Meta.js":
/*!****************************!*\
  !*** ./components/Meta.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/Shea/projects/jason/undefined.is/undefined-site/components/Meta.js";



var Meta = function Meta() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    charSet: "utf-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "shortcut icon",
    href: "/static/favicon.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://use.typekit.net/ccq8qac.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "/static/nprogress.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Undefined State"));
};

/* harmony default export */ __webpack_exports__["default"] = (Meta);

/***/ }),

/***/ "./components/Page.js":
/*!****************************!*\
  !*** ./components/Page.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! html-react-parser */ "html-react-parser");
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(html_react_parser__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Meta__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Meta */ "./components/Meta.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Project */ "./components/Project.js");
/* harmony import */ var _styles_DrawerStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/DrawerStyles */ "./styles/DrawerStyles.js");
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../data.js */ "./data.js");
var _jsxFileName = "/Users/Shea/projects/jason/undefined.is/undefined-site/components/Page.js";

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  min-height: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  opacity: 0;\n  background: black;\n  transition: opacity 0.4s;\n  ", ";\n  ", ";\n  ", "; */\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  background: white;\n  box-shadow: 12px 0 15px -4px rgba(0, 0, 0, 0.2),\n    -12px 0 8px -4px rgba(0, 0, 0, 0.2);\n  box-shadow: 0 9px 0px 0px white, 0 -9px 0px 0px white,\n    12px 0 15px -4px rgba(0, 0, 0, 0.2), -12px 0 15px -4px rgba(0, 0, 0, 0.2);\n\n  margin: 0 auto;\n  padding: 0 2rem;\n  width: 1068px;\n  height: 100%;\n  /* You have to set transform so that Screen's fixed position \n  will be relative to StyledPage instead of the viewport */\n  transform: rotate(0);\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  @import url('https://use.typekit.net/ccq8qac.css');\n\n  html, body, #screen {\n    min-height: 100%;\n  }\n\n  html {\n    box-sizing: border-box;\n    font-size: 10px;\n  }\n\n  *, *::before, *::after {\n      box-sizing: inherit;\n  }\n\n  body {\n    background: white;\n    padding: 0;\n    margin: 0;\n    font-family: ", ";\n    font-size: 1.5rem;\n    color: ", ";\n\n  }\n\n  a {\n    color: ", ";\n    text-decoration: none;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }










var theme = {
  fontFamily: "'brandon-grotesque', Arial, Helvetica, sans-serif;",
  black: '#000000'
};
var GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"])(_templateObject(), function (props) {
  return props.theme.fontFamily;
}, function (props) {
  return props.theme.black;
}, function (props) {
  return props.theme.black;
});

var Page =
/*#__PURE__*/
function (_Component) {
  _inherits(Page, _Component);

  function Page() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Page);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Page)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      selectedProject: {},
      drawerOpen: false,
      transitionEnded: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClick", function (project, e) {
      console.log(e.target);

      if (project) {
        _this.setState({
          selectedProject: project
        });
      }

      if (!_this.state.drawerOpen) {
        // document.querySelector('.drawer').style.width = '80%';
        _this.setState({
          transitionEnded: false
        });
      }

      _this.setState(function (prevState) {
        return {
          drawerOpen: !prevState.drawerOpen
        };
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleTransitionEnd", function (e) {
      if (!_this.state.drawerOpen && e.propertyName === 'opacity') {
        console.log('ended'); // document.querySelector('.drawer').style.width = '0';

        _this.setState({
          transitionEnded: true
        });
      }
    });

    return _this;
  }

  _createClass(Page, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      console.log(_data_js__WEBPACK_IMPORTED_MODULE_8__["default"]);
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_0__["ThemeProvider"], {
        theme: theme,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledPage, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Meta__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(GlobalStyle, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Screen, {
        open: this.state.drawerOpen,
        onClick: this.state.drawerOpen ? function (e) {
          return _this2.handleClick(null, e);
        } : null,
        transitionEnded: this.state.transitionEnded,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }), _data_js__WEBPACK_IMPORTED_MODULE_8__["default"].map(function (project, index) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          key: index,
          href: "/",
          scroll: false,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 92
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          onClick: function onClick(e) {
            return _this2.handleClick(project, e);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Project__WEBPACK_IMPORTED_MODULE_6__["default"], {
          project: project,
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          },
          __self: this
        })));
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_DrawerStyles__WEBPACK_IMPORTED_MODULE_7__["default"], {
        className: "drawer",
        open: this.state.drawerOpen,
        onTransitionEnd: this.handleTransitionEnd,
        transitionEnded: this.state.transitionEnded,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, this.state.selectedProject.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, this.state.selectedProject.tagline), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, Object.keys(this.state.selectedProject).length !== 0 ? html_react_parser__WEBPACK_IMPORTED_MODULE_2___default()(this.state.selectedProject.content) : null))));
    }
  }]);

  return Page;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Page);
var StyledPage = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject2());
var Screen = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject3(), function (props) {
  return props.open && "opacity: 0.5;";
}, function (props) {
  return props.open && "z-index: 1;";
}, function (props) {
  return props.transitionEnded && "z-index: -9999;";
});

/***/ }),

/***/ "./components/Project.js":
/*!*******************************!*\
  !*** ./components/Project.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/Shea/projects/jason/undefined.is/undefined-site/components/Project.js";


function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  border-bottom: 1px solid #666;\n  margin-left: 10%;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  float: right;\n  width: 280px;\n\n  @media (min-width: 414px) {\n    width: 400px;\n  }\n\n  @media (min-width: 1200px) {\n    width: 600px;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  flex: auto;\n  order: 3;\n\n  @media (min-width: 728px) {\n    width: 30%;\n    order: 2;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: 63px;\n  position: absolute;\n  top: 0;\n  right: 2rem;\n\n  @media (min-width: 415px) {\n    width: 80px;\n  }\n\n  @media (min-width: 768px) {\n    position: relative;\n    right: 0;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  padding-right: calc(70px + 2rem);\n  color: black;\n  position: relative;\n\n  @media (min-width: 768px) {\n    width: 40%;\n  }\n\n  h1,\n  h2 {\n    font-weight: normal;\n    width: 100%;\n  }\n  h1 {\n    text-transform: uppercase;\n    font-size: 19px;\n    margin-top: 0;\n    @media (min-width: 415px) {\n      font-size: 36px;\n    }\n  }\n  h2 {\n    font-size: 16px;\n    @media (min-width: 415px) {\n      font-size: 24px;\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin: 4rem 0 0 2rem;\n  display: flex;\n  flex-wrap: wrap;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var Icon = function Icon(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    width: "98",
    height: "42",
    viewBox: "0 0 98 42",
    xmlns: "http://www.w3.org/2000/svg"
  }, props, {
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    fill: "none",
    fillRule: "evenodd",
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#231F20",
    d: "M0 42h98V0H0z",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    fill: "#FFF",
    cx: "25",
    cy: "21",
    r: "7",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    fill: "#FFF",
    cx: "48",
    cy: "21",
    r: "7",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    fill: "#FFF",
    cx: "71",
    cy: "21",
    r: "7",
    __self: this
  })));
};

var Section = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.section(_templateObject());
var Text = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject2());
var StyledIcon = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(Icon)(_templateObject3());
var ImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject4());
var Image = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img(_templateObject5());
var HRule = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject6());

var Project = function Project(_ref) {
  var project = _ref.project;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Section, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Text, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, project.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, project.tagline), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledIcon, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ImageContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, project.img && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Image, {
    src: '/static/projects/' + project.img,
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HRule, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Project);

/***/ }),

/***/ "./data.js":
/*!*****************!*\
  !*** ./data.js ***!
  \*****************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  title: 'Showcase Module Title Goes Here',
  tagline: 'Tiny tagline or explainer text, at least one sentence but a long one.',
  img: 'jack-daniels.png',
  order: 1,
  content: 'Here is some cool content'
}, {
  title: 'Showcase Module Title Goes Here',
  tagline: 'Tiny tagline or explainer text, at least one sentence but a long one.',
  img: 'sony.png',
  order: 2,
  content: 'Here is some cool content'
}, {
  title: 'CK One Shock',
  tagline: 'Tiny tagline or explainer text, at least one sentence but a long one.',
  img: 'ck-one.png',
  order: 3,
  content: "<p>Grasshoppers have a wide range of predators at different stages of their lives; eggs are eaten by bee-flies, ground beetles and blister beetles; hoppers and adults are taken by other insects such as ants, robber flies and sphecid wasps, by spiders, and by many birds and small mammals.\n    The eggs and nymphs are under attack by parasitoids including blow flies, flesh flies, and tachinid flies. External parasites of adults and nymphs include mites.\n    The grasshopper nematode (Mermis nigrescens) is a long slender worm that infects grasshoppers, living in the insect's hemocoel. Adult worms lay eggs on plants and the host becomes infected when the foliage is eaten.</p>\n    \n    <div class=\"float right\">\n        <img src=\"grasshopper.jpg\" alt=\"\" />\n    </div>\n    \n    <p>The fungal pathogen Metarhizium acridum is found in Africa, Australia and Brazil where it has caused epizootics in grasshoppers. It is being investigated for possible use as a microbial insecticide for locust control.\n    Grasshoppers exemplify a range of anti-predator adaptations, enabling them to avoid detection, to escape if detected, and in some cases to avoid being eaten if captured. Grasshoppers are often camouflaged to avoid detection by predators that hunt by sight; some species can change their coloration to suit their surroundings.\n    Several species such as the hooded leaf grasshopper Phyllochoreia ramakrishnai (Eumastacoidea)  are detailed mimics of leaves. Stick grasshoppers (Proscopiidae) mimic wooden sticks in form and colouration.</p>\n    \n    <div class=\"float left\" style=\"width: 200px;\"> \n        <img src=\"grasshopper.jpg\" alt=\"\" />\n    </div>\n\n    <p>Some species are genuinely aposematic, having both bright warning coloration and sufficient toxicity to dissuade predators. Dictyophorus productus (Pyrgomorphidae) is a \"heavy, bloated, sluggish insect\" that makes no attempt to hide; it has a bright red abdomen. A Cercopithecus monkey that ate other grasshoppers refused to eat the species.\n    Grasshoppers are occasionally depicted in artworks, such as the Dutch Golden Age painter Balthasar van der Ast's still life oil painting, Flowers in a Vase with Shells and Insects, c. 1630, now in the National Gallery, London, though the insect may be a bush-cricket.\n    Another orthopteran is found in Rachel Ruysch's still life Flowers in a Vase, c. 1685. The seemingly static scene is animated by a \"grasshopper on the table that looks about ready to spring\", according to the gallery curator Betsy Wieseman, with other invertebrates including a spider, an ant, and two caterpillars.\n    Grasshoppers are also featured in cinema. The 1957 film Beginning of the End portrayed giant grasshoppers attacking Chicago.</p>"
}]);

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ "next/app");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Page */ "./components/Page.js");
var _jsxFileName = "/Users/Shea/projects/jason/undefined.is/undefined-site/pages/_app.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var CustomApp =
/*#__PURE__*/
function (_App) {
  _inherits(CustomApp, _App);

  function CustomApp() {
    _classCallCheck(this, CustomApp);

    return _possibleConstructorReturn(this, _getPrototypeOf(CustomApp).apply(this, arguments));
  }

  _createClass(CustomApp, [{
    key: "render",
    value: function render() {
      var Component = this.props.Component;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_app__WEBPACK_IMPORTED_MODULE_1__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Page__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      })));
    }
  }]);

  return CustomApp;
}(next_app__WEBPACK_IMPORTED_MODULE_1___default.a);

/* harmony default export */ __webpack_exports__["default"] = (CustomApp);

/***/ }),

/***/ "./styles/DrawerStyles.js":
/*!********************************!*\
  !*** ./styles/DrawerStyles.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  padding: 20px;\n  position: fixed;\n  background: white;\n  height: 100%;\n  top: 0;\n  right: 0;\n  width: 95%;\n  bottom: 0;\n  transform: translateX(100%);\n  transition: all 0.4s;\n  transition-property: transform, opacity;\n  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.2);\n  z-index: 5;\n  opacity: 0;\n  grid-template-rows: auto 1fr auto;\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n\n  h1 {\n    text-transform: uppercase;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var DrawerStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject(), function (props) {
  return props.open && "transform: translateX(0);";
}, function (props) {
  return props.open && "opacity: 1;";
}, function (props) {
  return props.transitionEnded && "width: 0;";
}, function (props) {
  return props.transitionEnded && "padding: 0;";
});
/* harmony default export */ __webpack_exports__["default"] = (DrawerStyles);

/***/ }),

/***/ 0:
/*!*****************************!*\
  !*** multi ./pages/_app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "html-react-parser":
/*!************************************!*\
  !*** external "html-react-parser" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("html-react-parser");

/***/ }),

/***/ "next/app":
/*!***************************!*\
  !*** external "next/app" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/app");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map