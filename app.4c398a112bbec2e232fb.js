/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./script/const.js":
/*!*************************!*\
  !*** ./script/const.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   body: () => (/* binding */ body),
/* harmony export */   buttonsField: () => (/* binding */ buttonsField),
/* harmony export */   cells: () => (/* binding */ cells),
/* harmony export */   clicksCount: () => (/* binding */ clicksCount),
/* harmony export */   container: () => (/* binding */ container),
/* harmony export */   easyButton: () => (/* binding */ easyButton),
/* harmony export */   flagsCount: () => (/* binding */ flagsCount),
/* harmony export */   gameInformation: () => (/* binding */ gameInformation),
/* harmony export */   gamefield: () => (/* binding */ gamefield),
/* harmony export */   hardButton: () => (/* binding */ hardButton),
/* harmony export */   header: () => (/* binding */ header),
/* harmony export */   headerTitle: () => (/* binding */ headerTitle),
/* harmony export */   main: () => (/* binding */ main),
/* harmony export */   mainInner: () => (/* binding */ mainInner),
/* harmony export */   milliseconds: () => (/* binding */ milliseconds),
/* harmony export */   minesCount: () => (/* binding */ minesCount),
/* harmony export */   minutes: () => (/* binding */ minutes),
/* harmony export */   mode: () => (/* binding */ mode),
/* harmony export */   modeDesc: () => (/* binding */ modeDesc),
/* harmony export */   modeName: () => (/* binding */ modeName),
/* harmony export */   newGameButton: () => (/* binding */ newGameButton),
/* harmony export */   normalButton: () => (/* binding */ normalButton),
/* harmony export */   seconds: () => (/* binding */ seconds),
/* harmony export */   timer: () => (/* binding */ timer)
/* harmony export */ });
const body = document.getElementById('body');
const container = document.createElement('div');
const header = document.createElement('div');
const headerTitle = document.createElement('div');
const main = document.createElement('main');
const mainInner = document.createElement('div');
const buttonsField = document.createElement('div');
const easyButton = document.createElement('button');
const normalButton = document.createElement('button');
const hardButton = document.createElement('button');
const mode = document.createElement('div');
const modeName = document.createElement('div');
const modeDesc = document.createElement('div');
const gamefield = document.createElement('div');
const newGameButton = document.createElement('button');
const cells = document.getElementsByClassName('cell');
const gameInformation = document.createElement('div');
const timer = document.createElement('div');
const minutes = document.createElement('div');
const seconds = document.createElement('div');
const milliseconds = document.createElement('div');
const minesCount = document.createElement('div');
const flagsCount = document.createElement('div');
const clicksCount = document.createElement('div');
container.classList.add('container');
header.classList.add('header');
headerTitle.classList.add('header__title');
main.classList.add('main');
mainInner.classList.add('main__inner');
mode.classList.add('mode');
modeName.classList.add('mode__name');
modeDesc.classList.add('mode__desc');
buttonsField.classList.add('main__buttons');
easyButton.classList.add('button');
easyButton.innerHTML = 'Easy';
normalButton.classList.add('button');
normalButton.innerHTML = 'Normal';
hardButton.classList.add('button');
hardButton.innerHTML = 'Hard';
gamefield.classList.add('game');
newGameButton.classList.add('button');
newGameButton.innerHTML = 'New Game';
gameInformation.classList.add('mode__information');
timer.classList.add('timer');
minutes.classList.add('minutes');
seconds.classList.add('seconds');
milliseconds.classList.add('milliseconds');

/***/ }),

/***/ "./script/renderField.js":
/*!*******************************!*\
  !*** ./script/renderField.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createField: () => (/* binding */ createField),
/* harmony export */   timerId: () => (/* binding */ timerId)
/* harmony export */ });
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./const.js */ "./script/const.js");


let field = [];
let timerId;
function createField(width, height, mines) {
  const arrayForCells = [];
  const arrayForIndex = [];
  let closedCells = width * height;
  let arrayForMines = [];
  let clickCounter = 0;
  let ms = 0;
  let sec = 0;
  let min = 0;
  let time = 0;
  let countUsedFlags = mines;
  field = Array.from({
    length: height * width
  }, () => 0);
  field.forEach(() => {
    const cell = document.createElement('div');
    cell.classList.add('cell', 'hidden');
    _const_js__WEBPACK_IMPORTED_MODULE_0__.gamefield.append(cell);
  });
  for (let i = 0; i < field.length; i++) {
    arrayForIndex.push(i);
  }
  for (let i = 0; i < _const_js__WEBPACK_IMPORTED_MODULE_0__.cells.length; i++) {
    arrayForCells.push(_const_js__WEBPACK_IMPORTED_MODULE_0__.cells[i]);
  }
  _const_js__WEBPACK_IMPORTED_MODULE_0__.gamefield.addEventListener('click', e => {
    const target = e.target;
    if (target.classList.contains('hidden')) {
      clickCounter++;
      _const_js__WEBPACK_IMPORTED_MODULE_0__.clicksCount.innerHTML = `Clicks: ${clickCounter}`;
    }
  });
  function startTimer() {
    if (arrayForCells.every(el => el.classList.contains('hidden'))) {
      timerId = setInterval(function () {
        ms++;
        if (ms === 100) {
          ms = 0;
          sec++;
          if (sec === 60) {
            sec = 0;
            min++;
            if (min === 60) {
              stopTimer();
            }
            _const_js__WEBPACK_IMPORTED_MODULE_0__.minutes.innerText = formatTime(min);
          }
          _const_js__WEBPACK_IMPORTED_MODULE_0__.seconds.innerText = formatTime(sec);
        }
        _const_js__WEBPACK_IMPORTED_MODULE_0__.milliseconds.innerText = formatTime(ms);
        if (min) {
          time = min * 60 + sec;
          return;
        }
        time = sec;
      }, 10);
    }
  }
  if (arrayForCells.every(el => el.classList.contains('hidden'))) {
    _const_js__WEBPACK_IMPORTED_MODULE_0__.gamefield.onclick = () => {
      startTimer();
    };
  }
  function formatTime(param) {
    return param < 10 ? '0' + param : param;
  }
  function stopTimer() {
    clearInterval(timerId);
  }
  function leftClick(e) {
    const target = e.target;
    const result = arrayForCells.every(el => el.classList.contains('hidden'));
    const clickCoordinate = arrayForCells.indexOf(target);
    const x = clickCoordinate % width;
    const y = Math.floor(clickCoordinate / width);
    if (result) {
      setRandomMines();
    }
    function setRandomMines() {
      arrayForMines = arrayForIndex.sort(() => Math.random() - 0.5).slice(0, mines);
      if (arrayForMines.includes(clickCoordinate) && result) {
        setRandomMines();
      }
    }
    clickOnField(x, y);
  }
  _const_js__WEBPACK_IMPORTED_MODULE_0__.gamefield.addEventListener('click', leftClick);
  _const_js__WEBPACK_IMPORTED_MODULE_0__.gamefield.oncontextmenu = e => {
    const target = e.target;
    e.preventDefault();
    if (!target.classList.contains('hidden')) return;
    if (target.innerHTML === '') {
      target.innerHTML = '🚩';
      countUsedFlags--;
      _const_js__WEBPACK_IMPORTED_MODULE_0__.flagsCount.innerHTML = `Flags: ${countUsedFlags}`;
      _const_js__WEBPACK_IMPORTED_MODULE_0__.minesCount.innerHTML = `Mines: ${countUsedFlags}`;
    } else {
      target.innerHTML = '';
      countUsedFlags++;
      _const_js__WEBPACK_IMPORTED_MODULE_0__.flagsCount.innerHTML = `Flags: ${countUsedFlags}`;
      _const_js__WEBPACK_IMPORTED_MODULE_0__.minesCount.innerHTML = `Mines: ${countUsedFlags}`;
    }
  };
  function clickOnField(x, y) {
    if (!isValid(x, y)) return;
    const coordinate = y * width + x;
    const cell = arrayForCells[coordinate];
    if (cell.innerHTML === '🚩') return;
    if (!cell.classList.contains('hidden')) return;
    cell.classList.remove('hidden');
    if (checkCellForMine(x, y)) {
      cell.innerHTML = '💣';
      alert('Game over. Try again');
      for (let el of arrayForMines) {
        arrayForCells[el].innerHTML = '💣';
      }
      _const_js__WEBPACK_IMPORTED_MODULE_0__.gamefield.removeEventListener('click', leftClick);
      _const_js__WEBPACK_IMPORTED_MODULE_0__.gamefield.oncontextmenu = e => {
        e.preventDefault();
      };
      clearInterval(timerId);
      return;
    }
    closedCells--;
    if (closedCells <= mines) {
      arrayForCells.forEach(el => {
        if (el.classList.contains('hidden')) {
          el.innerHTML = '🚩';
        }
      });
      _const_js__WEBPACK_IMPORTED_MODULE_0__.gamefield.onclick = e => {
        e.preventDefault();
      };
      _const_js__WEBPACK_IMPORTED_MODULE_0__.gamefield.oncontextmenu = e => {
        e.preventDefault();
      };
      alert(`Hooray! You found all mines in ${time} seconds and ${clickCounter} moves`);
      _const_js__WEBPACK_IMPORTED_MODULE_0__.gamefield.removeEventListener('click', leftClick);
      _const_js__WEBPACK_IMPORTED_MODULE_0__.gamefield.oncontextmenu = e => {
        e.preventDefault();
      };
      clearInterval(timerId);
      return;
    }
    const countMines = countNearMines(x, y);
    if (countMines !== 0) {
      cell.innerHTML = countMines;
      cell.classList.add(`cell-${countMines}`);
      return;
    }
    for (let i = -1; i < 2; i++) {
      for (let j = -1; j < 2; j++) {
        clickOnField(x + i, y + j);
      }
    }
  }
  function checkCellForMine(x, y) {
    if (isValid(x, y)) {
      const coordinate = y * width + x;
      return arrayForMines.includes(coordinate);
    }
    return;
  }
  function isValid(x, y) {
    return x >= 0 && x < width && y >= 0 && y < height;
  }
  function countNearMines(x, y) {
    let count = 0;
    for (let i = -1; i < 2; i++) {
      for (let j = -1; j < 2; j++) {
        if (checkCellForMine(x + i, y + j)) {
          count++;
        }
      }
    }
    return count;
  }
}

/***/ }),

/***/ "./script/renderPage.js":
/*!******************************!*\
  !*** ./script/renderPage.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderPage)
/* harmony export */ });
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./const.js */ "./script/const.js");

function renderPage() {
  _const_js__WEBPACK_IMPORTED_MODULE_0__.body.append(_const_js__WEBPACK_IMPORTED_MODULE_0__.header);
  _const_js__WEBPACK_IMPORTED_MODULE_0__.header.append(_const_js__WEBPACK_IMPORTED_MODULE_0__.container);
  _const_js__WEBPACK_IMPORTED_MODULE_0__.container.append(_const_js__WEBPACK_IMPORTED_MODULE_0__.headerTitle);
  _const_js__WEBPACK_IMPORTED_MODULE_0__.headerTitle.innerHTML = 'Minesweeper on JS';
  const containerForMain = _const_js__WEBPACK_IMPORTED_MODULE_0__.container.cloneNode(false);
  _const_js__WEBPACK_IMPORTED_MODULE_0__.body.append(_const_js__WEBPACK_IMPORTED_MODULE_0__.main);
  _const_js__WEBPACK_IMPORTED_MODULE_0__.main.append(containerForMain);
  containerForMain.append(_const_js__WEBPACK_IMPORTED_MODULE_0__.mainInner);
  _const_js__WEBPACK_IMPORTED_MODULE_0__.mainInner.append(_const_js__WEBPACK_IMPORTED_MODULE_0__.buttonsField);
  _const_js__WEBPACK_IMPORTED_MODULE_0__.buttonsField.append(_const_js__WEBPACK_IMPORTED_MODULE_0__.easyButton);
  _const_js__WEBPACK_IMPORTED_MODULE_0__.buttonsField.append(_const_js__WEBPACK_IMPORTED_MODULE_0__.normalButton);
  _const_js__WEBPACK_IMPORTED_MODULE_0__.buttonsField.append(_const_js__WEBPACK_IMPORTED_MODULE_0__.hardButton);
  _const_js__WEBPACK_IMPORTED_MODULE_0__.mainInner.append(_const_js__WEBPACK_IMPORTED_MODULE_0__.mode);
  _const_js__WEBPACK_IMPORTED_MODULE_0__.mainInner.append(_const_js__WEBPACK_IMPORTED_MODULE_0__.gamefield);
}

/***/ }),

/***/ "./script/selectDifficulty.js":
/*!************************************!*\
  !*** ./script/selectDifficulty.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderDifficulty),
/* harmony export */   getMode: () => (/* binding */ getMode)
/* harmony export */ });
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./const.js */ "./script/const.js");
/* harmony import */ var _renderField_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderField.js */ "./script/renderField.js");


function getMode(width, height, mines, text) {
  _const_js__WEBPACK_IMPORTED_MODULE_0__.gamefield.innerHTML = '';
  _const_js__WEBPACK_IMPORTED_MODULE_0__.mode.innerHTML = '';
  _const_js__WEBPACK_IMPORTED_MODULE_0__.mode.append(_const_js__WEBPACK_IMPORTED_MODULE_0__.modeName);
  _const_js__WEBPACK_IMPORTED_MODULE_0__.mode.append(_const_js__WEBPACK_IMPORTED_MODULE_0__.modeDesc);
  _const_js__WEBPACK_IMPORTED_MODULE_0__.modeName.innerHTML = text;
  _const_js__WEBPACK_IMPORTED_MODULE_0__.modeDesc.innerHTML = `Field: ${width} x ${height} Mines: <input id='input' type='text' value='${mines}'>`;
  _const_js__WEBPACK_IMPORTED_MODULE_0__.mode.append(_const_js__WEBPACK_IMPORTED_MODULE_0__.newGameButton);
  _const_js__WEBPACK_IMPORTED_MODULE_0__.mode.append(_const_js__WEBPACK_IMPORTED_MODULE_0__.gameInformation);
  _const_js__WEBPACK_IMPORTED_MODULE_0__.gameInformation.append(_const_js__WEBPACK_IMPORTED_MODULE_0__.timer);
  _const_js__WEBPACK_IMPORTED_MODULE_0__.timer.append(_const_js__WEBPACK_IMPORTED_MODULE_0__.minutes);
  _const_js__WEBPACK_IMPORTED_MODULE_0__.timer.append(_const_js__WEBPACK_IMPORTED_MODULE_0__.seconds);
  _const_js__WEBPACK_IMPORTED_MODULE_0__.timer.append(_const_js__WEBPACK_IMPORTED_MODULE_0__.milliseconds);
  _const_js__WEBPACK_IMPORTED_MODULE_0__.gameInformation.append(_const_js__WEBPACK_IMPORTED_MODULE_0__.minesCount);
  _const_js__WEBPACK_IMPORTED_MODULE_0__.gameInformation.append(_const_js__WEBPACK_IMPORTED_MODULE_0__.flagsCount);
  _const_js__WEBPACK_IMPORTED_MODULE_0__.gameInformation.append(_const_js__WEBPACK_IMPORTED_MODULE_0__.clicksCount);
  modeParam(width, height, mines);
  const input = document.getElementById('input');
  input.addEventListener('blur', () => {
    mines = input.value;
  });
  _const_js__WEBPACK_IMPORTED_MODULE_0__.newGameButton.onclick = () => {
    _const_js__WEBPACK_IMPORTED_MODULE_0__.gamefield.innerHTML = '';
    if (mines < 10 || mines > 99) {
      alert('Incorrect number of mines. Please try again from 10 to 99');
      clearInterval(_renderField_js__WEBPACK_IMPORTED_MODULE_1__.timerId);
      return;
    }
    modeParam(width, height, mines);
  };
}
function modeParam(width, height, mines) {
  clearInterval(_renderField_js__WEBPACK_IMPORTED_MODULE_1__.timerId);
  (0,_renderField_js__WEBPACK_IMPORTED_MODULE_1__.createField)(width, height, mines);
  _const_js__WEBPACK_IMPORTED_MODULE_0__.minutes.innerHTML = '00';
  _const_js__WEBPACK_IMPORTED_MODULE_0__.seconds.innerHTML = '00';
  _const_js__WEBPACK_IMPORTED_MODULE_0__.milliseconds.innerHTML = '00';
  _const_js__WEBPACK_IMPORTED_MODULE_0__.flagsCount.innerHTML = `Flags: ${mines}`;
  _const_js__WEBPACK_IMPORTED_MODULE_0__.minesCount.innerHTML = `Mines: ${mines}`;
  _const_js__WEBPACK_IMPORTED_MODULE_0__.clicksCount.innerHTML = 'Clicks: 0';
}
function renderDifficulty() {
  _const_js__WEBPACK_IMPORTED_MODULE_0__.easyButton.addEventListener('click', () => {
    getMode(10, 10, 10, 'Easy game');
    _const_js__WEBPACK_IMPORTED_MODULE_0__.gamefield.classList.add('game__easy');
    _const_js__WEBPACK_IMPORTED_MODULE_0__.gamefield.classList.remove('game__normal');
    _const_js__WEBPACK_IMPORTED_MODULE_0__.gamefield.classList.remove('game__hard');
  });
  _const_js__WEBPACK_IMPORTED_MODULE_0__.normalButton.addEventListener('click', () => {
    getMode(15, 15, 40, 'Normal game');
    _const_js__WEBPACK_IMPORTED_MODULE_0__.gamefield.classList.add('game__normal');
    _const_js__WEBPACK_IMPORTED_MODULE_0__.gamefield.classList.remove('game__easy');
    _const_js__WEBPACK_IMPORTED_MODULE_0__.gamefield.classList.remove('game__hard');
  });
  _const_js__WEBPACK_IMPORTED_MODULE_0__.hardButton.addEventListener('click', () => {
    getMode(25, 25, 99, 'Hard game');
    _const_js__WEBPACK_IMPORTED_MODULE_0__.gamefield.classList.add('game__hard');
    _const_js__WEBPACK_IMPORTED_MODULE_0__.gamefield.classList.remove('game__easy');
    _const_js__WEBPACK_IMPORTED_MODULE_0__.gamefield.classList.remove('game__normal');
  });
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/group-css-media-queries-loader/lib/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[5]!./style/style.css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/group-css-media-queries-loader/lib/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[5]!./style/style.css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
}

body {
  font-size: 10px;
  background-color: #000000;
  color: #EDEDED;
}

.container {
  max-width: 1200px;
  padding: 0 10px;
}

.header {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  color: #BB8F38;
  margin: 20px 0 10px;
}

.button {
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid #EDEDED;
  background-color: inherit;
  transition: 0.2s;
  color: #EDEDED;
}

.button:hover {
  cursor: pointer;
  transform: scale(1.1);
  color: #BB8F38;
  border: 1px solid #BB8F38;
  box-shadow: 0 0 10px 1px #BB8F38;
}

.button:active {
  transform: scale(1);
}

.main {
  display: flex;
  justify-content: center;
}

.main__inner {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.main__buttons {
  display: flex;
  -moz-column-gap: 10px;
  column-gap: 10px;
  justify-content: space-between;
}

.cell {
  border: 1px solid #6F6F6F;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  background-color: rgb(181, 179, 179);
}

.hidden {
  border: 4px solid #9E9E9E;
  background-color: #6F6F6F;
  border-style: outset;
  cursor: pointer;
}

.cell-1 {
  color: blue;
}

.cell-2 {
  color: green;
}

.cell-3 {
  color: red;
}

.cell-4 {
  color: darkblue;
}

.cell-5 {
  color: brown;
}

.cell-6 {
  color: turquoise;
}

.cell-7 {
  color: black;
}

.cell-8 {
  color: white;
}

.game {
  display: flex;
  flex-wrap: wrap;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

.game__easy {
  width: 450px;
  height: 450px;
}

.game__easy .cell {
  width: 45px;
  height: 45px;
}
.game__normal {
  width: 495px;
  height: 495px;
}

.game__normal .cell {
  width: 33px;
  height: 33px;
}
.game__hard {
  width: 750px;
  height: 750px;
}

.game__hard .cell {
  width: 30px;
  height: 30px;
}
.mode {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  font-size: 1rem;
}

.mode__name {
  text-align: center;
}

.mode__desc {
  display: flex;
  align-items: center;
  margin: 10px 0;
}

.mode__desc input {
  width: 27px;
  border: 2px solid #EDEDED;
  border-radius: 5px;
  margin-left: 10px;
  background-color: inherit;
  color: #EDEDED;
  font-size: 1rem;
  padding: 2px;
}

.mode__desc input:focus {
  outline: none;
}

.mode__information {
  display: flex;
  align-items: center;
  -moz-column-gap: 10px;
  column-gap: 10px;
  margin-top: 10px;
}

.timer {
  display: flex;
  -moz-column-gap: 5px;
  column-gap: 5px;
  border: 1px solid #EDEDED;
  border-radius: 5px;
  padding: 3px;
}

@media (max-width: 510px) {
  .game__easy {
    width: 400px;
    height: 400px;
  }
  .game__easy .cell {
    width: 40px;
    height: 40px;
  }
  .game__normal {
    width: 450px;
    height: 450px;
  }
  .game__normal .cell {
    width: 30px;
    height: 30px;
  }
}

@media (max-width: 550px) {
  .game__hard {
    width: 450px;
    height: 450px;
  }
  .game__hard .cell {
    width: 18px;
    height: 18px;
  }
} `, "",{"version":3,"sources":["webpack://./style/style.css","webpack://./<no source>"],"names":[],"mappings":"AAAA;EACE,SAAA;EACA,sBAAA;EACA,yCAAA;AACF;;AAEA;EACE,eAAA;EACA,yBAAA;EACA,cAAA;AACF;;AAEA;EACE,iBAAA;EACA,eAAA;AACF;;AAEA;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,eAAA;EACA,cAAA;EACA,mBAAA;AACF;;AAEA;EACE,iBAAA;EACA,kBAAA;EACA,yBAAA;EACA,yBAAA;EACA,gBAAA;EACA,cAAA;AACF;;AACA;EACE,eAAA;EACA,qBAAA;EACA,cAAA;EACA,yBAAA;EACA,gCAAA;AAEF;;AAAA;EACE,mBAAA;AAGF;;AAAA;EACE,aAAA;EACA,uBAAA;AAGF;;AADA;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;AAIF;;AAFA;EACE,aAAA;EACA,qBAAA;EACK,gBAAA;EACL,8BAAA;AAKF;;AAFA;EACE,yBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,eAAA;EACA,oCAAA;AAKF;;AAFA;EACE,yBAAA;EACA,yBAAA;EACA,oBAAA;EACA,eAAA;AAKF;;AAFA;EACE,WAAA;AAKF;;AAFA;EACE,YAAA;AAKF;;AAFA;EACE,UAAA;AAKF;;AAFA;EACE,eAAA;AAKF;;AAFA;EACE,YAAA;AAKF;;AAFA;EACE,gBAAA;AAKF;;AAFA;EACE,YAAA;AAKF;;AAFA;EACE,YAAA;AAKF;;AAFA;EACE,aAAA;EACA,eAAA;EACA,yBAAA;EACG,sBAAA;EACK,iBAAA;AAKV;;AAHA;EACE,YAAA;EACA,aAAA;AAMF;;AAJA;EACE,WAAA;EACA,YAAA;AAOF;AAKA;EACE,YAAA;EACA,aAAA;AAQF;;AANA;EACE,WAAA;EACA,YAAA;AASF;AAGA;EACE,YAAA;EACA,aAAA;AAUF;;AARA;EACE,WAAA;EACA,YAAA;AAWF;AAEA;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,cAAA;EACA,eAAA;AAWF;;AATA;EACE,kBAAA;AAYF;;AAVA;EACE,aAAA;EACA,mBAAA;EACA,cAAA;AAaF;;AAXA;EACE,WAAA;EACA,yBAAA;EACA,kBAAA;EACA,iBAAA;EACA,yBAAA;EACA,cAAA;EACA,eAAA;EACA,YAAA;AAcF;;AAZA;EACE,aAAA;AAeF;;AAbA;EACE,aAAA;EACA,mBAAA;EACA,qBAAA;EACK,gBAAA;EACL,gBAAA;AAgBF;;AAbA;EACE,aAAA;EACA,oBAAA;EACK,eAAA;EACL,yBAAA;EACA,kBAAA;EACA,YAAA;AAgBF;;ACvOA;ED8HE;IACE,YAAA;IACA,aAAA;EAQF;EANA;IACE,WAAA;IACA,YAAA;EAQF;EAIA;IACE,YAAA;IACA,aAAA;EAUF;EARA;IACE,WAAA;IACA,YAAA;EAUF;AAyDF;;ACzNA;EDkKE;IACE,YAAA;IACA,aAAA;EAYF;EAVA;IACE,WAAA;IACA,YAAA;EAYF;AAgDF","sourcesContent":["* {\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\nbody {\r\n  font-size: 10px;\r\n  background-color: #000000;\r\n  color: #EDEDED;\r\n}\r\n\r\n.container {\r\n  max-width: 1200px;\r\n  padding: 0 10px;\r\n}\r\n\r\n.header {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-size: 2rem;\r\n  color: #BB8F38;\r\n  margin: 20px 0 10px;\r\n}\r\n\r\n.button {\r\n  padding: 5px 10px;\r\n  border-radius: 5px;\r\n  border: 1px solid #EDEDED;\r\n  background-color: inherit;\r\n  transition: 0.2s;\r\n  color: #EDEDED;\r\n}\r\n.button:hover {\r\n  cursor: pointer;\r\n  transform: scale(1.1);\r\n  color: #BB8F38;\r\n  border: 1px solid #BB8F38;\r\n  box-shadow: 0 0 10px 1px #BB8F38;\r\n}\r\n.button:active {\r\n  transform: scale(1);\r\n}\r\n\r\n.main {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n.main__inner {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n.main__buttons {\r\n  display: flex;\r\n  -moz-column-gap: 10px;\r\n       column-gap: 10px;\r\n  justify-content: space-between;\r\n}\r\n\r\n.cell {\r\n  border: 1px solid #6F6F6F;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-size: 1rem;\r\n  background-color: rgb(181, 179, 179);\r\n}\r\n\r\n.hidden {\r\n  border: 4px solid #9E9E9E;\r\n  background-color: #6F6F6F;\r\n  border-style: outset;\r\n  cursor: pointer;\r\n}\r\n\r\n.cell-1 {\r\n  color: blue;\r\n}\r\n\r\n.cell-2 {\r\n  color: green;\r\n}\r\n\r\n.cell-3 {\r\n  color: red;\r\n}\r\n\r\n.cell-4 {\r\n  color: darkblue;\r\n}\r\n\r\n.cell-5 {\r\n  color: brown;\r\n}\r\n\r\n.cell-6 {\r\n  color: turquoise;\r\n}\r\n\r\n.cell-7 {\r\n  color: black;\r\n}\r\n\r\n.cell-8 {\r\n  color: white;\r\n}\r\n\r\n.game {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n          user-select: none;\r\n}\r\n.game__easy {\r\n  width: 450px;\r\n  height: 450px;\r\n}\r\n.game__easy .cell {\r\n  width: 45px;\r\n  height: 45px;\r\n}\r\n@media (max-width: 510px) {\r\n  .game__easy {\r\n    width: 400px;\r\n    height: 400px;\r\n  }\r\n  .game__easy .cell {\r\n    width: 40px;\r\n    height: 40px;\r\n  }\r\n}\r\n.game__normal {\r\n  width: 495px;\r\n  height: 495px;\r\n}\r\n.game__normal .cell {\r\n  width: 33px;\r\n  height: 33px;\r\n}\r\n@media (max-width: 510px) {\r\n  .game__normal {\r\n    width: 450px;\r\n    height: 450px;\r\n  }\r\n  .game__normal .cell {\r\n    width: 30px;\r\n    height: 30px;\r\n  }\r\n}\r\n.game__hard {\r\n  width: 750px;\r\n  height: 750px;\r\n}\r\n.game__hard .cell {\r\n  width: 30px;\r\n  height: 30px;\r\n}\r\n@media (max-width: 550px) {\r\n  .game__hard {\r\n    width: 450px;\r\n    height: 450px;\r\n  }\r\n  .game__hard .cell {\r\n    width: 18px;\r\n    height: 18px;\r\n  }\r\n}\r\n\r\n.mode {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin: 10px 0;\r\n  font-size: 1rem;\r\n}\r\n.mode__name {\r\n  text-align: center;\r\n}\r\n.mode__desc {\r\n  display: flex;\r\n  align-items: center;\r\n  margin: 10px 0;\r\n}\r\n.mode__desc input {\r\n  width: 27px;\r\n  border: 2px solid #EDEDED;\r\n  border-radius: 5px;\r\n  margin-left: 10px;\r\n  background-color: inherit;\r\n  color: #EDEDED;\r\n  font-size: 1rem;\r\n  padding: 2px;\r\n}\r\n.mode__desc input:focus {\r\n  outline: none;\r\n}\r\n.mode__information {\r\n  display: flex;\r\n  align-items: center;\r\n  -moz-column-gap: 10px;\r\n       column-gap: 10px;\r\n  margin-top: 10px;\r\n}\r\n\r\n.timer {\r\n  display: flex;\r\n  -moz-column-gap: 5px;\r\n       column-gap: 5px;\r\n  border: 1px solid #EDEDED;\r\n  border-radius: 5px;\r\n  padding: 3px;\r\n}/*# sourceMappingURL=style.css.map */",null],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n  <meta charset=\"UTF-8\">\r\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n  <title>Minesweeper</title>\r\n</head>\r\n<body id=\"body\">\r\n</body>\r\n</html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./style/style.css":
/*!*************************!*\
  !*** ./style/style.css ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../node_modules/group-css-media-queries-loader/lib/index.js!../node_modules/resolve-url-loader/index.js!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[5]!./style.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/group-css-media-queries-loader/lib/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[5]!./style/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************!*\
  !*** ./app.js ***!
  \****************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _script_renderPage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./script/renderPage.js */ "./script/renderPage.js");
/* harmony import */ var _script_selectDifficulty_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./script/selectDifficulty.js */ "./script/selectDifficulty.js");
/* harmony import */ var _script_const_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./script/const.js */ "./script/const.js");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.html */ "./index.html");
/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style/style.css */ "./style/style.css");





(0,_script_renderPage_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_script_selectDifficulty_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_script_selectDifficulty_js__WEBPACK_IMPORTED_MODULE_1__.getMode)(10, 10, 10, 'Easy game');
_script_const_js__WEBPACK_IMPORTED_MODULE_2__.gamefield.classList.add('game__easy');
})();

/******/ })()
;
//# sourceMappingURL=app.4c398a112bbec2e232fb.js.map