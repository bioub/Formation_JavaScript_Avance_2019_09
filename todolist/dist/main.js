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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app/dom.js":
/*!************************!*\
  !*** ./src/app/dom.js ***!
  \************************/
/*! exports provided: prepend, TEST */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prepend", function() { return prepend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEST", function() { return TEST; });
function prepend(parent, child) {
  if (parent.childElementCount) {
    parent.insertBefore(child, parent.firstElementChild);
  } else {
    parent.appendChild(child);
  }
}
var TEST = 'TEST';

/***/ }),

/***/ "./src/app/index.js":
/*!**************************!*\
  !*** ./src/app/index.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/app/dom.js");

/** @type {HTMLFormElement} */

var todoFormElt = document.querySelector('.todo-form');
/** @type {HTMLInputElement} */

var todoInputElt = document.querySelector('.todo-input');
/** @type {HTMLDivElement} */

var todoListElt = document.querySelector('.todo-list');
/** @type {HTMLInputElement} */

var todoToggleElt = document.querySelector('.todo-toggle');
/** @type {HTMLDivElement} */

var todoErrorsElt = document.querySelector('.todo-errors');
todoFormElt.addEventListener('submit', function (event) {
  event.preventDefault();

  if (!todoInputElt.value.match(/^[\t-\r Aa-cehilpt\{\}\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]{5,}$/i)) {
    todoErrorsElt.innerText = 'Il faut saisir des lettres, des espaces ou des chiffres uniquement (au moins 5)';
    return;
  }

  todoErrorsElt.innerText = '';
  var todoRowElt = document.createElement('div'); // todoRowElt.innerHTML = `<input type="checkbox">
  // <span>${todoInputElt.value}</span>
  // <button class="todo-remove">-</button>`;

  var checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'todo-complete';
  todoRowElt.appendChild(checkbox);
  var span = document.createElement('span');
  span.innerText = todoInputElt.value;
  todoRowElt.appendChild(span);
  var buttonMoins = document.createElement('button');
  buttonMoins.className = 'todo-remove';
  buttonMoins.innerText = '-';
  todoRowElt.appendChild(buttonMoins); // buttonMoins.addEventListener('click', (event) => {
  //   // event.target.parentNode.parentNode.removeChild(event.target.parentNode);
  //   // todoListElt.removeChild(todoRowElt);
  // });

  Object(_dom__WEBPACK_IMPORTED_MODULE_0__["prepend"])(todoListElt, todoRowElt);
});
todoListElt.addEventListener('click', function (event) {
  /** @type {HTMLElement} */
  var clickedElt = event.target;

  if (clickedElt.classList.contains('todo-remove')) {
    clickedElt.parentNode.parentNode.removeChild(clickedElt.parentNode);
  }
});
todoToggleElt.addEventListener('click', function () {
  /** @type {NodeListOf<HTMLInputElement>} */
  var checkboxes = todoListElt.querySelectorAll('.todo-complete');
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = checkboxes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var checkbox = _step.value;
      checkbox.checked = todoToggleElt.checked;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
});
/*
Exercice 1 : Ajouter un bouton de suppression
- Ajouter un bouton moins avec document.createElement sur la ligne
- Au clic de ce bouton supprimer la ligne
(pour récupérer la ligne, soit utiliser la variable dans la portée closure,
event.target (dans le callback du click): le bouton sur lequel on a cliqué
)
- Utiliser removeChild https://developer.mozilla.org/fr/docs/Web/API/Node/removeChild

Exercice 2 : Ajouter une checkbox toggle all
- Ajouter une checkbox sur chaque ligne
- Au clic de la checkbox .todo-toggle
Cocher ou décocher toutes les checkbox
todoCheckElt.checked = true (pour cocher), false (pour décocher)
- Utiliser querySelectorAll pour sélectionner les checkboxes au clic

Exercice 3 : Au submit du formulaire
Vérifier avec une regex que le champs contienne au moins 5 charactères parmi lettre, chiffre, espace
En cas d'erreur utiliser alert('Erreur') ou écrire dans une balise div l'erreur
*/

/***/ })

/******/ });