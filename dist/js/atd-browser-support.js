module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _modern = __webpack_require__(8);

var _modern2 = _interopRequireDefault(_modern);

var _legacy = __webpack_require__(9);

var _legacy2 = _interopRequireDefault(_legacy);

var _deprecated = __webpack_require__(10);

var _deprecated2 = _interopRequireDefault(_deprecated);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function loadSupport(callback) {
    var _callback = void 0;

    if (typeof callback === 'function') {
        _callback = callback;
    }

    if (passesModern()) {
        console.log('Is Modern');
        if (_callback) {
            _callback();
        }
    } else if (passesLegacy()) {
        console.log('Is Legacy');
        loadScript(_legacy2.default.script, _callback);
    } else {
        console.log('Is Deprecated');
        loadScript(_deprecated2.default.script, _callback);
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
    } else if (passesLegacy()) {
        return 'legacy';
    }

    return 'deprecated';
}

function loadScript(script, callback) {
    var js = document.createElement('script');
    js.src = script;
    js.onload = function () {
        if (callback) {
            callback();
        }
    };
    js.onerror = function () {
        if (callback) {
            callback(new Error('Failed to load script ' + script));
        }
    };
    document.head.appendChild(js);
}

exports.default = {
    loadScript: loadScript,
    passesModern: passesModern,
    passesLegacy: passesLegacy,
    getSupportLevel: getSupportLevel
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
function checkSupport() {
    console.log('Testing Modern');
    if (typeof window.Promise === 'function') {
        return true;
    }

    return false;
}

exports.default = {
    checkSupport: checkSupport
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var script = '/dist/js/legacy-polyfills.js';

function checkSupport() {
    console.log('Testing Legacy');
    return typeof document.querySelectorAll === 'function' && _typeof(document.body.classList) === 'object';
}

exports.default = {
    checkSupport: checkSupport,
    script: script
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var script = '/dist/js/deprecated-polyfills.js';

exports.default = {
    script: script
};

/***/ })
/******/ ]);