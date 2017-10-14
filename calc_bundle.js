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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function mul(x, y) {
    return x * y;
}

/* harmony default export */ __webpack_exports__["a"] = (mul);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_js__ = __webpack_require__(0);


var myHeading = document.querySelector('#div_title');
var old = myHeading.innerHTML;
myHeading.innerHTML = old + '<p>Hello!!</p>'

var helloDiv = document.querySelector('#hello_div');
helloDiv.innerHTML = hello();

function hello() {
    return 'hello';
}

function showResult() {
    var x = document.querySelector('input[name="x"]').value;
    var y = document.querySelector('input[name="y"]').value;
    document.querySelector('#div_result').innerHTML = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["a" /* default */])(x, y);
}

document.querySelector('input[name="showResult"]').onclick = () => showResult();

/*
document.querySelector('html').onclick = function() {
    alert('Hello Event');
}
*/

var number1,number2;
var operator;
document.querySelector('input[name="onenumber"]').onclick = function() {
    document.querySelector('.result').innerHTML = '1';
}

document.querySelector('input[name="twonumber"]').onclick = function() {
    document.querySelector('.result').innerHTML = '2';
}

var inputArray = [];
function appendResult(content) {
    var result = document.querySelector('.result');
    result.innerHTML += content;
}

function buttonClickHandler(event) {
    var value = event.target.value;
    var number = Number(value);
    if (number) {
        inputArray.push(number);
    }
    appendResult(value);
}

function resultClickHandler(event) {
    buttonClickHandler(event);
    appendResult(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["a" /* default */])(inputArray[0], inputArray[1]));
}

function clearResultHandler(event) {
    inputArray = [];
    document.querySelector('.result').innerHTML = '';
}

function createButton(parentNode, id, value) {
    var numberButtonElement = document.createElement("input");
    numberButtonElement.setAttribute("type", "button");
    numberButtonElement.setAttribute("id", id);
    numberButtonElement.setAttribute("value", value);
    numberButtonElement.onclick = buttonClickHandler;
    parentNode.appendChild(numberButtonElement);

    return numberButtonElement;
}

var map = {
    "mul-1": "1",
    "mul-2": "2",
    "mul-3": "3",
    "mul-4": "4",
    "mul-5": "5",
    "mul-6": "6",
    "mul-7": "7",
    "mul-8": "8",
    "mul-9": "9",
    "mul-0": "0",
    "mul-*": "*"
}

for(let item in map) {
    var parentNode;
    if (["mul-1","mul-2","mul-3","mul-4","mul-5"].includes(item)) {
        parentNode = document.getElementById('number-pad-r1');
    }
    else if (["mul-6","mul-7","mul-8","mul-9","mul-0"].includes(item)) {
        parentNode = document.getElementById('number-pad-r2');
    } else {
        parentNode = document.getElementById('number-pad-r3');
    }
    createButton(parentNode, item, map[item]);
}

document.querySelector('#equal').onclick = resultClickHandler;
document.querySelector('#clear').onclick = clearResultHandler;


/***/ })
/******/ ]);