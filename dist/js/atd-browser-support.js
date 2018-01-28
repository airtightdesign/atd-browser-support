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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Supports = undefined;

var _modern = __webpack_require__(1);

var _modern2 = _interopRequireDefault(_modern);

var _legacy = __webpack_require__(2);

var _legacy2 = _interopRequireDefault(_legacy);

var _deprecated = __webpack_require__(3);

var _deprecated2 = _interopRequireDefault(_deprecated);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Supports = exports.Supports = function () {
    var callback = null;

    function loadSupport(callback) {
        if (typeof callback === 'function') {
            this.callback = callback;
        }

        if (passesModern()) {
            console.log('Is Modern');
        } else if (passesLegacy()) {
            console.log('Is Legacy');
        } else {
            console.log('Is Deprecated');
        }
    }

    function passesModern() {
        return _modern2.default.checkSupport();
    }

    function passesLegacy() {
        return _legacy2.default.checkSupport();
    }

    function getSupportLevel() {
        if (passesModern()) {
            return 'modern';
        } else if (passesLegacgy()) {
            return 'legacy';
        }

        return 'deprecated';
    }

    function loadScript(script) {}

    return {
        loadSupport: loadSupport,
        passesModern: passesModern,
        passesLegacy: passesLegacy,
        getSupportLevel: getSupportLevel
    };
}();

Supports.loadSupport();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    var callback = null;

    function checkSupport() {
        console.log('Testing Modern');
        if (typeof window.Promise === 'function') {
            return true;
        }

        return false;
    }

    return {
        checkSupport: checkSupport
    };
}();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    function checkSupport() {
        console.log('Testing Legacy');
        if (typeof document.querySelectorAll === 'function') {
            return true;
        }

        return false;
    }

    return {
        checkSupport: checkSupport
    };
}();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    return {};
}();

/***/ })
/******/ ]);