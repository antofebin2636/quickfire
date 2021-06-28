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

/***/ "./node_modules/@glidejs/glide/dist/glide.modular.esm.js":
/*!***************************************************************!*\
  !*** ./node_modules/@glidejs/glide/dist/glide.modular.esm.js ***!
  \***************************************************************/
/***/ (() => {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/Users/antonypinheiro/Sites/test/wp-content/themes/quick/node_modules/@glidejs/glide/dist/glide.modular.esm.js'\");\n\n//# sourceURL=webpack://wordpress-starter/./node_modules/@glidejs/glide/dist/glide.modular.esm.js?");

/***/ }),

/***/ "./node_modules/gsap/SplitText.js":
/*!****************************************!*\
  !*** ./node_modules/gsap/SplitText.js ***!
  \****************************************/
/***/ (() => {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/Users/antonypinheiro/Sites/test/wp-content/themes/quick/node_modules/gsap/SplitText.js'\");\n\n//# sourceURL=webpack://wordpress-starter/./node_modules/gsap/SplitText.js?");

/***/ }),

/***/ "./node_modules/gsap/index.js":
/*!************************************!*\
  !*** ./node_modules/gsap/index.js ***!
  \************************************/
/***/ (() => {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/Users/antonypinheiro/Sites/test/wp-content/themes/quick/node_modules/gsap/index.js'\");\n\n//# sourceURL=webpack://wordpress-starter/./node_modules/gsap/index.js?");

/***/ }),

/***/ "./node_modules/viewprt/dist/es/viewprt.js":
/*!*************************************************!*\
  !*** ./node_modules/viewprt/dist/es/viewprt.js ***!
  \*************************************************/
/***/ (() => {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/Users/antonypinheiro/Sites/test/wp-content/themes/quick/node_modules/viewprt/dist/es/viewprt.js'\");\n\n//# sourceURL=webpack://wordpress-starter/./node_modules/viewprt/dist/es/viewprt.js?");

/***/ }),

/***/ "./src/scripts/modules/appear-title.js":
/*!*********************************************!*\
  !*** ./src/scripts/modules/appear-title.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ init)\n/* harmony export */ });\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n/* harmony import */ var gsap_SplitText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap/SplitText */ \"./node_modules/gsap/SplitText.js\");\n/* harmony import */ var viewprt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! viewprt */ \"./node_modules/viewprt/dist/es/viewprt.js\");\n\n\n\n\nfunction init() {\n  \n    const title = document.querySelectorAll('[data-appear]');\n    const line = document.querySelectorAll('[data-line]');\n    const show =        document.querySelectorAll('[data-show]');\n    var wrapper = gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.utils.toArray(\".homeBanner__linkWrapper\");\n    var wrapBox = gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.utils.toArray(\".wrap--box\");\n    var upTxt = document.querySelectorAll('[data-up]');\n\n    if (title) {\n        title.forEach((element) => {\n            gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.set(element, { autoAlpha: 0 });\n            gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.set(line, { autoAlpha: 0 });\n\n            (0,viewprt__WEBPACK_IMPORTED_MODULE_0__.ElementObserver)(element, {\n\n                onEnter: () => {\n\n                    const timeline = gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.timeline({\n                            delay: 0.6\n                        }\n                    );\n\n                    const split = new gsap_SplitText__WEBPACK_IMPORTED_MODULE_2__.SplitText(element, {\n                        type: 'words',\n                    })\n                    gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.set(element, { autoAlpha: 1 });\n                    gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.set(line, { autoAlpha: 1 });\n                    timeline.fromTo(split.words, {\n                            x: -15,\n                            opacity: 0,\n\n                        },\n                        {\n                            duration: 1,\n                            x: 0,\n                            autoAlpha:1,\n                            opacity: 1,\n                            stagger: 0.1\n                        }\n                    ).from(line,{x:-10,autoAlpha:1,duration:0.5},'-=1')\n\n                },\n                offset: 0,\n                once: true,\n            });\n        });\n    }\n\n    wrapper.forEach(wrap => {\n\n        const boxes = wrap.querySelectorAll('[data-show]');\n        (0,viewprt__WEBPACK_IMPORTED_MODULE_0__.ElementObserver)(wrap, {\n            onEnter:() =>{\n\n                gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.from(boxes, {\n                    opacity:0,\n                    y:100,\n                    ease: \"expo.out\",\n                    duration:2,\n                    stagger: 0.2,\n                });\n            }\n            ,\n            offset: 0,\n            once: true,\n        });\n\n    });\n\n    wrapBox.forEach(wrap => {\n\n        const boxes = wrap.querySelectorAll('[data-show]');\n        (0,viewprt__WEBPACK_IMPORTED_MODULE_0__.ElementObserver)(wrap, {\n            onEnter:() =>{\n\n                gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.from(boxes, {\n                    opacity:0,\n                    y:100,\n                    ease: \"expo.out\",\n                    duration:2,\n                    stagger: 0.2,\n                });\n            }\n            ,\n            offset: 0,\n            once: true,\n        });\n\n    });\n\n\n\n    if (upTxt) {\n        upTxt.forEach((element) => {\n            gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.set(element, { autoAlpha: 0 });\n\n            (0,viewprt__WEBPACK_IMPORTED_MODULE_0__.ElementObserver)(element, {\n\n                onEnter: () => {\n                    console.log(1);\n                    gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.set(element, { autoAlpha: 1 });\n                    gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.from(element, {\n                        opacity:0,\n                        y:50,\n                        ease: \"expo.out\",\n                        duration:3,\n                        stagger: 0.2,\n                    });\n\n                },\n                offset: 0,\n                once: true,\n            });\n        });\n    }\n\n\n\n\n}\n\n\n//# sourceURL=webpack://wordpress-starter/./src/scripts/modules/appear-title.js?");

/***/ }),

/***/ "./src/scripts/modules/banner.js":
/*!***************************************!*\
  !*** ./src/scripts/modules/banner.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ init)\n/* harmony export */ });\n/* harmony import */ var _glidejs_glide_dist_glide_modular_esm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @glidejs/glide/dist/glide.modular.esm */ \"./node_modules/@glidejs/glide/dist/glide.modular.esm.js\");\n\n\nfunction init({ el }) {\n    /* The original element that requested the module */\n    const context = el;\n    // eslint-disable-next-line no-new\n\n    const elements = {\n        carousel : context.querySelector('[data-carousel]'),\n    }\n\n    new _glidejs_glide_dist_glide_modular_esm__WEBPACK_IMPORTED_MODULE_0__.default(elements.carousel, {\n        type: 'gallery',\n        perView: 1,\n        autoplay: 6000,\n        swipe: true,\n        gap:10,\n        peek: {before:0,after:150},\n    }).mount({ Swipe: _glidejs_glide_dist_glide_modular_esm__WEBPACK_IMPORTED_MODULE_0__.Swipe, Controls: _glidejs_glide_dist_glide_modular_esm__WEBPACK_IMPORTED_MODULE_0__.Controls});\n\n}\n\n//# sourceURL=webpack://wordpress-starter/./src/scripts/modules/banner.js?");

/***/ }),

/***/ "./src/scripts/modules/carousel.js":
/*!*****************************************!*\
  !*** ./src/scripts/modules/carousel.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ init)\n/* harmony export */ });\n/* harmony import */ var _glidejs_glide_dist_glide_modular_esm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @glidejs/glide/dist/glide.modular.esm */ \"./node_modules/@glidejs/glide/dist/glide.modular.esm.js\");\n\n\nfunction init({ el }) {\n    /* The original element that requested the module */\n    const context = el;\n    // eslint-disable-next-line no-new\n\n    const elements = {\n        carousel : context.querySelector('[data-carousel]'),\n    }\n\n    new _glidejs_glide_dist_glide_modular_esm__WEBPACK_IMPORTED_MODULE_0__.default(elements.carousel, {\n        type: 'gallery',\n        perView: 1,\n        autoplay: 6000,\n        swipe: true,\n    }).mount({ Swipe: _glidejs_glide_dist_glide_modular_esm__WEBPACK_IMPORTED_MODULE_0__.Swipe, Controls: _glidejs_glide_dist_glide_modular_esm__WEBPACK_IMPORTED_MODULE_0__.Controls,Breakpoints: _glidejs_glide_dist_glide_modular_esm__WEBPACK_IMPORTED_MODULE_0__.Breakpoints});\n\n}\n\n//# sourceURL=webpack://wordpress-starter/./src/scripts/modules/carousel.js?");

/***/ }),

/***/ "./src/scripts/modules/client.js":
/*!***************************************!*\
  !*** ./src/scripts/modules/client.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ init)\n/* harmony export */ });\n/* harmony import */ var _glidejs_glide_dist_glide_modular_esm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @glidejs/glide/dist/glide.modular.esm */ \"./node_modules/@glidejs/glide/dist/glide.modular.esm.js\");\n\n\nfunction init({ el }) {\n    /* The original element that requested the module */\n    const context = el;\n    // eslint-disable-next-line no-new\n\n    const elements = {\n        carousel : context.querySelector('[data-carousel]'),\n\n    }\n\n\n    new _glidejs_glide_dist_glide_modular_esm__WEBPACK_IMPORTED_MODULE_0__.default(elements.carousel, {\n        type: 'carousel',\n        perView: 2,\n        swipe: true,\n        gap:40,\n        peek: {before:100,after:100},\n        // autoPlay:true,\n\n\n    }).mount({ Swipe: _glidejs_glide_dist_glide_modular_esm__WEBPACK_IMPORTED_MODULE_0__.Swipe, Controls: _glidejs_glide_dist_glide_modular_esm__WEBPACK_IMPORTED_MODULE_0__.Controls,Breakpoints: _glidejs_glide_dist_glide_modular_esm__WEBPACK_IMPORTED_MODULE_0__.Breakpoints});\n\n}\n\n//# sourceURL=webpack://wordpress-starter/./src/scripts/modules/client.js?");

/***/ }),

/***/ "./src/scripts/modules/header.js":
/*!***************************************!*\
  !*** ./src/scripts/modules/header.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ init)\n/* harmony export */ });\nfunction init() {\n    console.log(1);\n}\n\n//# sourceURL=webpack://wordpress-starter/./src/scripts/modules/header.js?");

/***/ }),

/***/ "./src/scripts/modules/menu.js":
/*!*************************************!*\
  !*** ./src/scripts/modules/menu.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ init)\n/* harmony export */ });\nfunction init({ el }) {\n    document.querySelector('.has__child').addEventListener('click',\n        function (){\n            this.querySelector('.sub__menu').classList.toggle('active');\n        });\n\n\n    document.querySelector('.headerBanner__menu--item').addEventListener('click',\n        function (){\n            document.querySelector('.menu').classList.toggle('active');\n        });\n\n\n    document.querySelector('.menu-btn').addEventListener('click',function (){\n        document.querySelector('.menu').classList.toggle('active');\n    })\n}\n\n//# sourceURL=webpack://wordpress-starter/./src/scripts/modules/menu.js?");

/***/ }),

/***/ "./src/scripts/modules/pro-carousel.js":
/*!*********************************************!*\
  !*** ./src/scripts/modules/pro-carousel.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ init)\n/* harmony export */ });\n/* harmony import */ var _glidejs_glide_dist_glide_modular_esm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @glidejs/glide/dist/glide.modular.esm */ \"./node_modules/@glidejs/glide/dist/glide.modular.esm.js\");\n/* provided dependency */ var $ = __webpack_require__(/*! jquery */ \"jquery\");\n\n\nfunction init({ el }) {\n    /* The original element that requested the module */\n    const context = el;\n    // eslint-disable-next-line no-new\n\n    const elements = {\n        carousel : context.querySelector('[data-carousels]'),\n\n    }\n\n    const toggler = context.querySelectorAll('[data-indexer]');\n\n\n\n\n    var slides = new _glidejs_glide_dist_glide_modular_esm__WEBPACK_IMPORTED_MODULE_0__.default(elements.carousel, {\n        type: 'carousel',\n        perView: 2,\n        autoplay: 6000,\n        swipe: true,\n        gap:40,\n        peek: {before:0,after:250},\n        // autoPlay:true,\n        breakpoints:{\n            440:{\n                perView:1,\n                peek: {before:0,after:100},\n            },\n            825:{\n                perView: 2,\n                gap: 20,\n                peek: {before:0,after:150},\n\n            },\n            1024:{\n                perView: 2,\n                gap:20,\n                peek: {before:0,after:150},\n            },\n            1880:{\n                perView: 2,\n                gap: 40,\n                peek: {before:0,after:250},\n\n            },\n            // 2000:{\n            //     perView: 3,\n            //     gap: 40,\n            // },\n\n        },\n\n    }).mount({ Swipe: _glidejs_glide_dist_glide_modular_esm__WEBPACK_IMPORTED_MODULE_0__.Swipe, Controls: _glidejs_glide_dist_glide_modular_esm__WEBPACK_IMPORTED_MODULE_0__.Controls,Breakpoints: _glidejs_glide_dist_glide_modular_esm__WEBPACK_IMPORTED_MODULE_0__.Breakpoints});\n\n    toggler.forEach(function (e) {\n        e.addEventListener('click', () => {\n\n            $('.toggler').removeClass(\"clicked\");\n            e.classList.toggle(\"clicked\");\n            const dataIndex = e.dataset.indexer;\n\n            slides.go(`=${dataIndex}`);\n\n        });\n    });\n\n}\n\n//# sourceURL=webpack://wordpress-starter/./src/scripts/modules/pro-carousel.js?");

/***/ }),

/***/ "./src/scripts/modules/video.js":
/*!**************************************!*\
  !*** ./src/scripts/modules/video.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ init)\n/* harmony export */ });\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction init() {\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.videoImg__box').on('click',function (){\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.Popup__wrapper').toggle();\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').toggleClass('disable');\n    });\n\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.close').on('click',function (){\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.Popup__wrapper').toggle();\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').toggleClass('disable');\n    });\n}\n\n//# sourceURL=webpack://wordpress-starter/./src/scripts/modules/video.js?");

/***/ }),

/***/ "./src/scripts/modules sync recursive ^\\.\\/.*$":
/*!********************************************!*\
  !*** ./src/scripts/modules/ sync ^\.\/.*$ ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./appear-title\": \"./src/scripts/modules/appear-title.js\",\n\t\"./appear-title.js\": \"./src/scripts/modules/appear-title.js\",\n\t\"./banner\": \"./src/scripts/modules/banner.js\",\n\t\"./banner.js\": \"./src/scripts/modules/banner.js\",\n\t\"./carousel\": \"./src/scripts/modules/carousel.js\",\n\t\"./carousel.js\": \"./src/scripts/modules/carousel.js\",\n\t\"./client\": \"./src/scripts/modules/client.js\",\n\t\"./client.js\": \"./src/scripts/modules/client.js\",\n\t\"./header\": \"./src/scripts/modules/header.js\",\n\t\"./header.js\": \"./src/scripts/modules/header.js\",\n\t\"./menu\": \"./src/scripts/modules/menu.js\",\n\t\"./menu.js\": \"./src/scripts/modules/menu.js\",\n\t\"./pro-carousel\": \"./src/scripts/modules/pro-carousel.js\",\n\t\"./pro-carousel.js\": \"./src/scripts/modules/pro-carousel.js\",\n\t\"./video\": \"./src/scripts/modules/video.js\",\n\t\"./video.js\": \"./src/scripts/modules/video.js\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/scripts/modules sync recursive ^\\\\.\\\\/.*$\";\n\n//# sourceURL=webpack://wordpress-starter/./src/scripts/modules/_sync_^\\.\\/.*$?");

/***/ }),

/***/ "./src/scripts/theme.js":
/*!******************************!*\
  !*** ./src/scripts/theme.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module '../styles/theme.scss'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\n\nconst appearTitles = __webpack_require__(/*! ./modules/appear-title */ \"./src/scripts/modules/appear-title.js\").default;\n\n\nappearTitles();\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    document.querySelectorAll(\"[data-module]\").forEach((el) => {\n        const name = el.getAttribute(\"data-module\");\n        const moduleInit = __webpack_require__(\"./src/scripts/modules sync recursive ^\\\\.\\\\/.*$\")(`./${name}`).default;\n        console.log(name);\n        moduleInit({ el });\n    });\n});\n\n//# sourceURL=webpack://wordpress-starter/./src/scripts/theme.js?");

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = jQuery;

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/theme.js");
/******/ 	
/******/ })()
;