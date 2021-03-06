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

var _modern = __webpack_require__(1);

var _modern2 = _interopRequireDefault(_modern);

var _legacy = __webpack_require__(2);

var _legacy2 = _interopRequireDefault(_legacy);

var _deprecated = __webpack_require__(3);

var _deprecated2 = _interopRequireDefault(_deprecated);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function loadSupport(callback) {
    var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

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
        loadScript(path + _legacy2.default.script, _callback);
    } else {
        console.log('Is Deprecated');
        loadScript(path + _deprecated2.default.script, _callback);
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
    js.src = script;
    document.head.appendChild(js);
}

exports.default = {
    loadSupport: loadSupport,
    loadScript: loadScript,
    passesModern: passesModern,
    passesLegacy: passesLegacy,
    getSupportLevel: getSupportLevel
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
function checkSupport() {
    console.log('Testing Modern');
    if (typeof window.Promise === 'function' && window.NodeList && NodeList.prototype.forEach) {
        return true;
    }

    return false;
}

exports.default = {
    checkSupport: checkSupport
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var script = '/dist/js/atd-legacy-polyfills.js';

function checkSupport() {
    console.log('Testing Legacy');
    return typeof document.querySelectorAll === 'function' && "classList" in document.createElement("_");
}

exports.default = {
    checkSupport: checkSupport,
    script: script
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var script = '/dist/js/atd-deprecated-polyfills.js';

exports.default = {
    script: script
};

/***/ })
/******/ ]);