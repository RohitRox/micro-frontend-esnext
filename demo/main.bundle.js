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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "React"
var external_React_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "ReactDOM"
var external_ReactDOM_ = __webpack_require__("faye");

// CONCATENATED MODULE: ./src/CoreAppComponent1.tsx

var CoreAppComponentA = function () {
    return external_React_["createElement"]("div", { className: "card" },
        external_React_["createElement"]("div", { className: "card-body" },
            external_React_["createElement"]("h5", { className: "card-title" }, "CoreAppComponentA"),
            external_React_["createElement"]("p", { className: "card-text" }, "Normal component from core app")));
};
/* harmony default export */ var CoreAppComponent1 = (CoreAppComponentA);

// EXTERNAL MODULE: external "MFE.UIC"
var external_MFE_UIC_ = __webpack_require__("nE34");

// EXTERNAL MODULE: external "MFE.LAC"
var external_MFE_LAC_ = __webpack_require__("FxD2");

// CONCATENATED MODULE: ./src/index.tsx


console.log("Hello from App");



external_ReactDOM_["render"](external_React_["createElement"](external_React_["Fragment"], null,
    external_React_["createElement"](external_MFE_UIC_["Logo"], null),
    external_React_["createElement"]("hr", null),
    external_React_["createElement"](external_MFE_UIC_["UIComponentA"], null),
    external_React_["createElement"]("hr", null),
    external_React_["createElement"](external_MFE_UIC_["UIComponentBLazy"], null),
    external_React_["createElement"]("hr", null),
    external_React_["createElement"](external_MFE_LAC_["LayoutComponentA"], null),
    external_React_["createElement"]("hr", null),
    external_React_["createElement"](external_MFE_LAC_["LayoutComponentBLazy"], null),
    external_React_["createElement"]("hr", null),
    external_React_["createElement"](CoreAppComponent1, null)), document.getElementById('root'));


/***/ }),

/***/ "FxD2":
/***/ (function(module, exports) {

module.exports = MFE.LAC;

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

/***/ })

/******/ });