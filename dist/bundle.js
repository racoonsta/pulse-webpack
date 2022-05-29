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

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ \"./src/scss/style.scss\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/slider */ \"./src/js/modules/slider.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/tabs */ \"./src/js/modules/tabs.js\");\n/* harmony import */ var _modules_hrefs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/hrefs */ \"./src/js/modules/hrefs.js\");\n/* harmony import */ var _modules_modals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/modals */ \"./src/js/modules/modals.js\");\n/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/forms */ \"./src/js/modules/forms.js\");\n\n\n\n\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  (0,_modules_slider__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  (0,_modules_tabs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  (0,_modules_hrefs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  (0,_modules_modals__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('.button_main', '.modal');\n  (0,_modules_forms__WEBPACK_IMPORTED_MODULE_5__[\"default\"])('.modal');\n});\n\n//# sourceURL=webpack://pulse-webpack/./src/js/index.js?");

/***/ }),

/***/ "./src/js/modules/forms.js":
/*!*********************************!*\
  !*** ./src/js/modules/forms.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _modals_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modals.js */ \"./src/js/modules/modals.js\");\n\n\nfunction forms(ModalSelector) {\n  /// FORMS\n  const forms = document.querySelectorAll('form');\n  const message = {\n    loading: 'static/img/spinner.svg',\n    success: 'Спасибо! Скоро свяжемся',\n    failure: 'Ошибка'\n  };\n  forms.forEach(item => {\n    bindPostData(item);\n  });\n\n  const postData = async (url, data) => {\n    const res = await fetch(url, {\n      method: \"POST\",\n      headers: {\n        'Content-type': 'application/json'\n      },\n      body: data\n    });\n    return await res.json();\n  };\n\n  function bindPostData(form) {\n    form.addEventListener('submit', event => {\n      event.preventDefault();\n      const statusMessage = document.createElement('img');\n      statusMessage.src = message.loading;\n      statusMessage.style.cssText = `\n        display: block;\n        margin: 0 auto;\n      `;\n      form.append(statusMessage);\n      const formData = new FormData(form);\n      const json = JSON.stringify(Object.fromEntries(formData.entries()));\n      const object = {};\n      formData.forEach(function (value, key) {\n        object[key] = value;\n      });\n      postData('http://localhost:3000/api/post', json).then(data => {\n        console.log(data);\n        showThanksModal(message.success);\n        statusMessage.remove();\n      }).catch(error => {\n        console.log(error);\n        showThanksModal(message.failure);\n      }).finally(() => {\n        form.reset();\n      });\n    });\n  }\n\n  ;\n\n  function showThanksModal(message) {\n    const prevModalDialog = document.querySelector('.modal__dialog');\n    prevModalDialog.classList.add('modal__hide');\n    (0,_modals_js__WEBPACK_IMPORTED_MODULE_0__.openModal)(ModalSelector);\n    const thanksModal = document.createElement('div');\n    thanksModal.classList.add('modal__dialog');\n    thanksModal.innerHTML = `\n      <div class = \"modal__content\" style=\"background-color: burlywood; border-radius: 10px; display: flex; height: 100px; align-items: center; justify-content: center;\">\n        <div class = \"modal__title\" style=\"height: 20px\">${message}</div>\n      </div>\n      `;\n    document.querySelector('.modal').append(thanksModal);\n    setTimeout(() => {\n      thanksModal.remove();\n      prevModalDialog.classList.add('modal__show');\n      prevModalDialog.classList.remove('modal__hide');\n      (0,_modals_js__WEBPACK_IMPORTED_MODULE_0__.closeModal)(ModalSelector);\n    }, 3500);\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forms);\n\n//# sourceURL=webpack://pulse-webpack/./src/js/modules/forms.js?");

/***/ }),

/***/ "./src/js/modules/hrefs.js":
/*!*********************************!*\
  !*** ./src/js/modules/hrefs.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction hrefs() {\n  const hrefs = document.querySelectorAll('a');\n  hrefs.forEach(item => {\n    item.addEventListener('click', event => {\n      event.preventDefault();\n    });\n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hrefs);\n\n//# sourceURL=webpack://pulse-webpack/./src/js/modules/hrefs.js?");

/***/ }),

/***/ "./src/js/modules/modals.js":
/*!**********************************!*\
  !*** ./src/js/modules/modals.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"closeModal\": () => (/* binding */ closeModal),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"openModal\": () => (/* binding */ openModal)\n/* harmony export */ });\nfunction openModal(ModalSelector) {\n  const modal = document.querySelector(ModalSelector);\n  modal.classList.add('modal__show');\n  modal.classList.remove('modal__hide');\n  document.body.style.overflow = 'hidden';\n}\n\n;\n\nfunction closeModal(ModalSelector) {\n  const modal = document.querySelector(ModalSelector);\n  modal.classList.add('modal__hide');\n  modal.classList.remove('modal__show');\n  document.body.style.overflow = '';\n}\n\n;\n\nfunction modals(TriggerSelector, ModalSelector) {\n  /// MODALS\n  const consultTrigger = document.querySelector(TriggerSelector),\n        modal = document.querySelector(ModalSelector);\n  consultTrigger.addEventListener('click', () => openModal(ModalSelector)); // при подстановке значение как аргумента, функция выполняется сразу, поэтому мы оборачиваем её в стрелочную\n\n  modal.addEventListener('click', event => {\n    if (event.target == modal || event.target.getAttribute('data-close') == '') {\n      closeModal(ModalSelector);\n    }\n  });\n  document.addEventListener('keydown', event => {\n    if (event.code === 'Escape' && modal.classList.contains('modal__show')) {\n      closeModal(ModalSelector);\n    }\n  });\n\n  function showModalByScroll() {\n    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {\n      openModal(ModalSelector);\n      window.removeEventListener('scroll', showModalByScroll);\n    }\n  }\n\n  ;\n  window.addEventListener('scroll', showModalByScroll);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modals);\n\n\n//# sourceURL=webpack://pulse-webpack/./src/js/modules/modals.js?");

/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction slider() {\n  /// SLIDER\n  const sliderItems = document.querySelectorAll('.slide'),\n        sliderInner = document.querySelector('.slider-inner'),\n        sliderWrapper = document.querySelector('.slider-wrapper'),\n        dots = document.querySelectorAll('.dot'),\n        width = window.getComputedStyle(sliderWrapper).width;\n  let offset = 0;\n  sliderInner.style.width = 100 * sliderItems.length + `%`;\n\n  function setDots(arr, i) {\n    arr.forEach(dot => dot.style.opacity = '0.5');\n    arr[i].style.opacity = 0.8;\n  }\n\n  ;\n  dots.forEach((dot, i) => {\n    dot.addEventListener('click', event => {\n      const target = event.target;\n      offset = +width.slice(0, 3) * i;\n\n      if (target && target == dot) {\n        sliderInner.style.transform = `translateX(-${offset}px)`;\n      }\n\n      setDots(dots, i);\n    });\n  }); /// SLIDER AUTOMATION\n\n  const slider = document.querySelector('.slider'),\n        sliderHeight = window.getComputedStyle(slider).height.slice(0, 3),\n        sliderYoffset = slider.getBoundingClientRect().top,\n        sliderHeightFull = +sliderHeight + sliderYoffset;\n  const interval = setInterval(() => {\n    if (window.pageYOffset + document.documentElement.clientHeight >= sliderHeightFull) {\n      setTimeout(dots[1].click(), 1500);\n      clearInterval(interval);\n    }\n  }, 1000);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack://pulse-webpack/./src/js/modules/slider.js?");

/***/ }),

/***/ "./src/js/modules/tabs.js":
/*!********************************!*\
  !*** ./src/js/modules/tabs.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction tabs() {\n  /// TABS\n  const tabsTrigger = document.querySelectorAll('.tab'),\n        tabsButton = document.querySelectorAll('.catalog__tab'),\n        tabsContent = document.querySelectorAll('.catalog__content'),\n        tabsParent = document.querySelector('.catalog__tabs'),\n        itemsContent = document.querySelectorAll('.catalog-item__content'),\n        itemsListContent = document.querySelectorAll('.catalog-item__list'),\n        itemsNext = document.querySelectorAll('.catalog-item__link'),\n        itemsPrev = document.querySelectorAll('.catalog-item__back');\n  tabsParent.addEventListener('click', event => {\n    const target = event.target;\n\n    if (target && target.classList.contains('tab')) {\n      tabsTrigger.forEach((item, i) => {\n        if (target == item) {\n          tabsContent.forEach((item, i) => {\n            tabsButton[i].classList.remove('catalog__tab_active');\n            tabsContent[i].classList.remove('catalog__content_active');\n          });\n          tabsButton[i].classList.add('catalog__tab_active');\n          tabsContent[i].classList.add('catalog__content_active');\n        }\n      });\n    }\n  });\n\n  function toggleItemsClass(event, i) {\n    event.preventDefault();\n    itemsContent[i].classList.toggle('catalog-item__content_active');\n    itemsListContent[i].classList.toggle('catalog-item__list_active');\n  }\n\n  itemsNext.forEach((item, i) => {\n    item.addEventListener('click', event => {\n      toggleItemsClass(event, i);\n    });\n  });\n  itemsPrev.forEach((item, i) => {\n    item.addEventListener('click', event => {\n      toggleItemsClass(event, i);\n    });\n  });\n}\n\n;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack://pulse-webpack/./src/js/modules/tabs.js?");

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://pulse-webpack/./src/scss/style.scss?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;