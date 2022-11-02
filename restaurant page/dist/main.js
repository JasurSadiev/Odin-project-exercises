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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadContact\": () => (/* binding */ loadContact)\n/* harmony export */ });\nfunction createContact() {\r\n\tconst contact = document.createElement(\"div\");\r\n\tcontact.classList.add(\"contact\");\r\n\r\n\tconst phoneNumber = document.createElement(\"p\");\r\n\tphoneNumber.textContent = \"📞 123 456 789\";\r\n\r\n\tconst address = document.createElement(\"p\");\r\n\taddress.textContent = \"🏠 Hollywood Boulevard 42, Los Angeles, USA\";\r\n\r\n\tconst restaurantLocation = document.createElement(\"img\");\r\n\trestaurantLocation.src = \"./images/restaurantLocation.png\";\r\n\trestaurantLocation.alt = \"Cafe location\";\r\n\r\n\tcontact.appendChild(phoneNumber);\r\n\tcontact.appendChild(address);\r\n\tcontact.appendChild(restaurantLocation);\r\n\r\n\treturn contact;\r\n}\r\n\r\nfunction loadContact() {\r\n\tconst main = document.getElementById(\"main\");\r\n\tmain.textContent = \"\";\r\n\tmain.appendChild(createContact());\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadHome\": () => (/* binding */ loadHome)\n/* harmony export */ });\nfunction createHome() {\r\n\tconst home = document.createElement(\"div\");\r\n\thome.classList.add(\"home\");\r\n\r\n\tconst chefImage = document.createElement(\"img\");\r\n\tchefImage.src = \"./images/chef.png\";\r\n\tchefImage.alt = \"chef.png\";\r\n\r\n\thome.appendChild(createParagraph(\"Best Cafe in your Country\"));\r\n\thome.appendChild(createParagraph(\"Made with passion since 2022\"));\r\n\thome.appendChild(chefImage);\r\n\thome.appendChild(createParagraph(\"Order online or Visit us!\"));\r\n\r\n\treturn home;\r\n}\r\n\r\nfunction createParagraph(text) {\r\n\tconst paragraph = document.createElement(\"p\");\r\n\tparagraph.textContent = text;\r\n\treturn paragraph;\r\n}\r\n\r\nfunction loadHome() {\r\n\tconst main = document.getElementById(\"main\");\r\n\tmain.textContent = \"\";\r\n\tmain.appendChild(createHome());\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _website__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website */ \"./src/website.js\");\n\r\n(0,_website__WEBPACK_IMPORTED_MODULE_0__.initializeWebsite)();\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadMenu\": () => (/* binding */ loadMenu)\n/* harmony export */ });\nfunction createMenu() {\r\n\tconst menu = document.createElement(\"div\");\r\n\tmenu.classList.add(\"menu\");\r\n\r\n\tmenu.appendChild(\r\n\t\tcreateMenuItem(\"Bubble\", \"Ice cream, banana, bubble gum syrup\", \"jpg\")\r\n\t);\r\n\r\n\tmenu.appendChild(\r\n\t\tcreateMenuItem(\"Capuchino\", \"Ice cream, banana, bubble gum syrup\", \"png\")\r\n\t);\r\n\r\n\tmenu.appendChild(\r\n\t\tcreateMenuItem(\"Latty\", \"Ice cream, banana, bubble gum syrup\", \"png\")\r\n\t);\r\n\r\n\tmenu.appendChild(\r\n\t\tcreateMenuItem(\"Juice\", \"Ice cream, banana, bubble gum syrup\", \"png\")\r\n\t);\r\n\r\n\tmenu.appendChild(\r\n\t\tcreateMenuItem(\"Baklava\", \"Ice cream, banana, bubble gum syrup\", \"jpg\")\r\n\t);\r\n\r\n\tmenu.appendChild(\r\n\t\tcreateMenuItem(\"CheeseCake\", \"Ice cream, banana, bubble gum syrup\", \"jpg\")\r\n\t);\r\n\r\n\tmenu.appendChild(\r\n\t\tcreateMenuItem(\"Medovik\", \"Ice cream, banana, bubble gum syrup\", \"jpg\")\r\n\t);\r\n\r\n\tmenu.appendChild(\r\n\t\tcreateMenuItem(\"Tiramisu\", \"Ice cream, banana, bubble gum syrup\", \"png\")\r\n\t);\r\n\treturn menu;\r\n}\r\n\r\nfunction createMenuItem(name, description, ext) {\r\n\tconst menuItem = document.createElement(\"div\");\r\n\tmenuItem.classList.add(\"menu-item\");\r\n\r\n\tconst foodName = document.createElement(\"h2\");\r\n\tfoodName.textContent = name;\r\n\r\n\tconst foodDescription = document.createElement(\"p\");\r\n\tfoodDescription.textContent = description;\r\n\r\n\tconst foodImage = document.createElement(\"img\");\r\n\tfoodImage.src = `images/menu/${name.toLowerCase()}.${ext}`;\r\n\tfoodImage.alt = `${name}`;\r\n\r\n\tmenuItem.appendChild(foodImage);\r\n\tmenuItem.appendChild(foodName);\r\n\tmenuItem.appendChild(foodDescription);\r\n\r\n\treturn menuItem;\r\n}\r\n\r\nfunction loadMenu() {\r\n\tconst main = document.getElementById(\"main\");\r\n\tmain.textContent = \"\";\r\n\tmain.appendChild(createMenu());\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initializeWebsite\": () => (/* binding */ initializeWebsite)\n/* harmony export */ });\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n\r\n\r\n\r\nfunction createHeader() {\r\n\tconst header = document.createElement(\"header\");\r\n\tconst restaurantName = document.createElement(\"h1\");\r\n\trestaurantName.textContent = \"JS Cafee\";\r\n\trestaurantName.classList.add(\"restaurantTitle\");\r\n\theader.appendChild(restaurantName);\r\n\theader.appendChild(createNav());\r\n\r\n\treturn header;\r\n}\r\n\r\nfunction createNav() {\r\n\tconst nav = document.createElement(\"nav\");\r\n\r\n\tconst homeBtn = document.createElement(\"button\");\r\n\thomeBtn.classList.add(\"nav-btns\");\r\n\thomeBtn.textContent = \"Home\";\r\n\thomeBtn.addEventListener(\"click\", (e) => {\r\n\t\tif (e.target.classList.contains(\"active\")) return;\r\n\t\tsetActiveButton(homeBtn);\r\n\t\t(0,_home__WEBPACK_IMPORTED_MODULE_1__.loadHome)();\r\n\t});\r\n\r\n\tconst menuBtn = document.createElement(\"button\");\r\n\tmenuBtn.classList.add(\"nav-btns\");\r\n\tmenuBtn.textContent = \"Menu\";\r\n\tmenuBtn.addEventListener(\"click\", (e) => {\r\n\t\tif (e.target.classList.contains(\"active\")) return;\r\n\t\tsetActiveButton(menuBtn);\r\n\t\t(0,_menu__WEBPACK_IMPORTED_MODULE_2__.loadMenu)();\r\n\t});\r\n\r\n\tconst contactBtn = document.createElement(\"button\");\r\n\tcontactBtn.classList.add(\"nav-btns\");\r\n\tcontactBtn.textContent = \"Contact\";\r\n\tcontactBtn.addEventListener(\"click\", (e) => {\r\n\t\tif (e.target.classList.contains(\"active\")) return;\r\n\t\tsetActiveButton(contactBtn);\r\n\t\t(0,_contact__WEBPACK_IMPORTED_MODULE_0__.loadContact)();\r\n\t});\r\n\r\n\tnav.appendChild(homeBtn);\r\n\tnav.appendChild(menuBtn);\r\n\tnav.appendChild(contactBtn);\r\n\r\n\treturn nav;\r\n}\r\n\r\nfunction setActiveButton(button1) {\r\n\tconst buttons = document.querySelectorAll(\".nav-btns\");\r\n\tbuttons.forEach((button) => {\r\n\t\t// console.log(button);\r\n\t\tif (button !== button1) {\r\n\t\t\tbutton.classList.remove(\"active\");\r\n\t\t}\r\n\t});\r\n\r\n\tbutton1.classList.add(\"active\");\r\n}\r\n\r\nfunction createMain() {\r\n\tconst main = document.createElement(\"main\");\r\n\tmain.classList.add(\"main\");\r\n\tmain.setAttribute(\"id\", \"main\");\r\n\treturn main;\r\n}\r\n\r\nfunction createFooter() {\r\n\tconst footer = document.createElement(\"footer\");\r\n\tfooter.classList.add(\"footer\");\r\n\r\n\tconst copyright = document.createElement(\"p\");\r\n\tcopyright.textContent = `Copyright © ${new Date().getFullYear()} JasurSadiev`;\r\n\r\n\tconst githubLink = document.createElement(\"a\");\r\n\tgithubLink.href = \"https://github.com/JasurSadiev\";\r\n\r\n\tconst githubIcon = document.createElement(\"i\");\r\n\tgithubIcon.classList.add(\"fab\");\r\n\tgithubIcon.classList.add(\"fa-github\");\r\n\r\n\tgithubLink.appendChild(githubIcon);\r\n\tfooter.appendChild(copyright);\r\n\tfooter.appendChild(githubLink);\r\n\r\n\treturn footer;\r\n}\r\n\r\nfunction initializeWebsite() {\r\n\tconst content = document.getElementById(\"content\");\r\n\tcontent.appendChild(createHeader());\r\n\tcontent.appendChild(createMain());\r\n\tcontent.appendChild(createFooter());\r\n\r\n\tsetActiveButton(document.querySelector(\".nav-btns\"));\r\n\t(0,_home__WEBPACK_IMPORTED_MODULE_1__.loadHome)();\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/website.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;