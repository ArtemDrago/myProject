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

/***/ "./src/script/script.js":
/*!******************************!*\
  !*** ./src/script/script.js ***!
  \******************************/
/***/ (() => {

eval("\r\n\r\n//адаптив изображения\r\nfunction ibg(){\r\n   let ibg=document.querySelectorAll(\".ibg\");\r\n   for (var i = 0; i < ibg.length; i++) {\r\n   if(ibg[i].querySelector('img')){\r\n   ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';\r\n   }}}ibg();\r\n   //\r\n\r\n//================================================================================\r\n//slickslider\r\n   $(document).ready(function(){\r\n      $('.slider').slick({\r\n         arrows:false,\r\n         dots:false,\r\n         adaptiveHeight:true,\r\n          infinite: true,\r\n         swipe: true,\r\n         slidesToShow: 2,\r\n         slidesToScroll: 1\r\n         \r\n      });\r\n      });\r\n      $(document).ready(function(){\r\n         $('.slider-two').slick({\r\n            arrows:false,\r\n            dots:false,\r\n            adaptiveHeight:true,\r\n             infinite: true,\r\n            swipe: true,\r\n            slidesToShow: 1,\r\n            slidesToScroll: 1,\r\n            initialSlide:-1,\r\n            \r\n         });\r\n         });\r\n//========================================================================================\r\n//бургер\r\n$('.wrapper').addClass('loaded');\r\n\r\n$('.icon-menu').click(function(event){\r\n   $(this).toggleClass('active');\r\n   $('.menu__body').toggleClass('active');\r\n   $('body').toggleClass('lock');\r\n});\r\n   //====================================================\n\n//# sourceURL=webpack://myproject/./src/script/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/script/script.js"]();
/******/ 	
/******/ })()
;