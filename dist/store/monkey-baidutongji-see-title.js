// ==UserScript==
// @name                monkey-baidutongji-see-title
// @namespace           https://github.com/forestsheep911/monkey-baidutongji-see-title
// @version             0.0.2
// @description         write description here
// @author              you
// @copyright           you
// @license             MIT
// @match               https://tongji.baidu.com/*

// @run-at              document-start
// @supportURL          https://github.com/forestsheep911/monkey-baidutongji-see-title/issues
// @homepage            https://github.com/forestsheep911/monkey-baidutongji-see-title
// @grant               GM_xmlhttpRequest
// @icon                https://img.icons8.com/ios/50/000000/happy-eyes.png
// ==/UserScript==
/* eslint-disable */ /* spell-checker: disable */
// @[ You can find all source codes in GitHub repo ]
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 752:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var app = function () {
    function enventToggle(ae) {
        GM_xmlhttpRequest({
            method: 'GET',
            url: ae.href,
            onload: function (response) {
                var document = response.responseText;
                var regExp = /<title>(.*)<\/title>/;
                var ed = regExp.exec(document);
                if (ed && ed.length >= 1) {
                    ae.textContent = ed[1];
                    ae.setAttribute('cd', '1');
                }
            },
        });
    }
    function showTitle() {
        var elementLink = document.querySelectorAll('.access_page a, .visit_page_title a');
        if (!elementLink || elementLink.length === 0) {
            return;
        }
        elementLink.forEach(function (e) {
            if (e.getAttribute('cd') === '1') {
                return;
            }
            var ce = e.cloneNode(true);
            e.replaceWith(ce);
            ce.addEventListener('mouseenter', enventToggle.bind(null, ce), { once: true });
        });
    }
    setTimeout(function () {
        showTitle();
    }, 3000);
    setInterval(function () {
        showTitle();
    }, 12000);
};
exports["default"] = app;


/***/ }),

/***/ 607:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var app_1 = __importDefault(__webpack_require__(752));
if (true) {
    (0, app_1.default)();
}
else {}


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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(607);
/******/ 	
/******/ })()
;