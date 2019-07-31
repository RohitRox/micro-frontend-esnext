/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("2YZa");


/***/ }),

/***/ "2YZa":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__("cDcd");
var ReactDOM = __webpack_require__("faye");
console.log("Hello from App");
var ui_components_1 = __webpack_require__("nE34");
var layout_components_1 = __webpack_require__("GQzj");
ReactDOM.render(React.createElement(React.Fragment, null,
    React.createElement(ui_components_1.Logo, null),
    React.createElement("hr", null),
    React.createElement(ui_components_1.UIComponentA, null),
    React.createElement("hr", null),
    React.createElement(ui_components_1.UIComponentBLazy, null),
    React.createElement("hr", null),
    React.createElement(layout_components_1.LayoutComponentA, null),
    React.createElement("hr", null),
    React.createElement(layout_components_1.LayoutComponentBLazy, null)), document.getElementById('root'));


/***/ }),

/***/ "4Umm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__("cDcd");
var react_1 = __webpack_require__("cDcd");
var LayoutComponentB = react_1.lazy(function () { return Promise.resolve().then(function () { return __webpack_require__("uJrw"); }); });
var LayoutComponentBLazy = function () {
    return React.createElement("div", { className: "central-comp" },
        React.createElement(react_1.Suspense, { fallback: React.createElement("p", null, "Loading LayoutComponentB ...") },
            React.createElement(LayoutComponentB, null)));
};
exports.default = LayoutComponentBLazy;


/***/ }),

/***/ "GQzj":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var LayoutComponentA_1 = __webpack_require__("KLMm");
exports.LayoutComponentA = LayoutComponentA_1.default;
var lazy_1 = __webpack_require__("4Umm");
exports.LayoutComponentBLazy = lazy_1.default;


/***/ }),

/***/ "KLMm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__("cDcd");
var ui_components_1 = __webpack_require__("nE34");
exports.LayoutComponentA = function () {
    return React.createElement("div", { className: "card layout-component-wrapper" },
        React.createElement("div", { className: "card-body" },
            React.createElement(ui_components_1.Logo, null),
            React.createElement("h5", { className: "card-title" }, "LayoutComponentA that renders Logo from ui-components")));
};
exports.default = exports.LayoutComponentA;


/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ "faye":
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),

/***/ "nE34":
/***/ (function(module, exports) {

module.exports = MFE.UIC;

/***/ }),

/***/ "uJrw":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__("cDcd");
exports.LayoutComponentB = function () {
    return React.createElement("div", { className: "card layout-component-wrapper" },
        React.createElement("div", { className: "card-body" },
            React.createElement("h5", { className: "card-title" }, "LayoutComponentB"),
            React.createElement("p", { className: "card-text" }, "LayoutComponentB which will be lazy loaded"),
            React.createElement("a", { href: "#", className: "btn btn-primary" }, "Go somewhere")));
};
exports.default = exports.LayoutComponentB;


/***/ })

/******/ });