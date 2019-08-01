/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + chunkId + ".main.bundle.js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
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

// EXTERNAL MODULE: external "MFE.GLB.React"
var external_MFE_GLB_React_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "MFE.GLB.ReactDOM"
var external_MFE_GLB_ReactDOM_ = __webpack_require__("faye");

// CONCATENATED MODULE: ./src/CoreAppComponent1.tsx

var CoreAppComponentA = function () {
    return external_MFE_GLB_React_["createElement"]("div", { className: "card" },
        external_MFE_GLB_React_["createElement"]("div", { className: "card-body" },
            external_MFE_GLB_React_["createElement"]("h5", { className: "card-title" }, "CoreAppComponentA"),
            external_MFE_GLB_React_["createElement"]("p", { className: "card-text" }, "Normal component from core app")));
};
/* harmony default export */ var CoreAppComponent1 = (CoreAppComponentA);

// CONCATENATED MODULE: ./src/CoreAppComponent2Lazy.tsx


var CoreAppComponent2 = Object(external_MFE_GLB_React_["lazy"])(function () { return __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, "9Wuz")); });
var CoreAppComponent2Lazy = function () {
    return external_MFE_GLB_React_["createElement"]("div", { className: "central-comp" },
        external_MFE_GLB_React_["createElement"](external_MFE_GLB_React_["Suspense"], { fallback: external_MFE_GLB_React_["createElement"]("p", null, "Loading CoreAppComponent2 ...") },
            external_MFE_GLB_React_["createElement"](CoreAppComponent2, null)));
};
/* harmony default export */ var src_CoreAppComponent2Lazy = (CoreAppComponent2Lazy);

// EXTERNAL MODULE: external "MFE.UIC"
var external_MFE_UIC_ = __webpack_require__("nE34");

// EXTERNAL MODULE: external "MFE.LAC"
var external_MFE_LAC_ = __webpack_require__("FxD2");

// CONCATENATED MODULE: ./src/index.tsx


console.log("Hello from App");




external_MFE_GLB_ReactDOM_["render"](external_MFE_GLB_React_["createElement"]("div", { className: "container", style: { margin: '40px auto' } },
    external_MFE_GLB_React_["createElement"](external_MFE_UIC_["Logo"], null),
    external_MFE_GLB_React_["createElement"]("hr", null),
    external_MFE_GLB_React_["createElement"](external_MFE_UIC_["UIComponentA"], null),
    external_MFE_GLB_React_["createElement"]("hr", null),
    external_MFE_GLB_React_["createElement"](external_MFE_UIC_["UIComponentBLazy"], null),
    external_MFE_GLB_React_["createElement"]("hr", null),
    external_MFE_GLB_React_["createElement"](external_MFE_LAC_["LayoutComponentA"], null),
    external_MFE_GLB_React_["createElement"]("hr", null),
    external_MFE_GLB_React_["createElement"](external_MFE_LAC_["LayoutComponentBLazy"], null),
    external_MFE_GLB_React_["createElement"]("hr", null),
    external_MFE_GLB_React_["createElement"](CoreAppComponent1, null),
    external_MFE_GLB_React_["createElement"]("hr", null),
    external_MFE_GLB_React_["createElement"](src_CoreAppComponent2Lazy, null),
    external_MFE_GLB_React_["createElement"]("hr", null),
    external_MFE_GLB_React_["createElement"](external_MFE_LAC_["BuggyWidget"], null),
    external_MFE_GLB_React_["createElement"]("hr", null)), document.getElementById('root'));


/***/ }),

/***/ "FxD2":
/***/ (function(module, exports) {

module.exports = MFE.LAC;

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = MFE.GLB.React;

/***/ }),

/***/ "faye":
/***/ (function(module, exports) {

module.exports = MFE.GLB.ReactDOM;

/***/ }),

/***/ "nE34":
/***/ (function(module, exports) {

module.exports = MFE.UIC;

/***/ })

/******/ });