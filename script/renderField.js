import { clicksCount, flagsCount, gamefield, minesCount, minutes, seconds,
milliseconds } from "./const.js";
import { cells } from "./const.js";

let field = [];
export let timerId;

export function createField(width, height, mines) {
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

  field = Array.from({length: height * width}, () => 0);
  
  field.forEach(() => {
    const cell = document.createElement('div');

    cell.classList.add('cell', 'hidden');

    gamefield.append(cell);
  });

  for (let i = 0; i < field.length; i++) {
    arrayForIndex.push(i);
  }

  for (let i = 0; i < cells.length; i++) {
    arrayForCells.push(cells[i]);
  }

  gamefield.addEventListener('click', (e) => {
    const target = e.target;

    if (target.classList.contains('hidden')) {
      clickCounter++;
  
      clicksCount.innerHTML = `Clicks: ${clickCounter}`;
    }
  });

  function startTimer() {
    if (arrayForCells.every(el => el.classList.contains('hidden'))) {
      timerId = setInterval(function() {
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

            minutes.innerText = formatTime(min);
          }

          seconds.innerText = formatTime(sec);
        }
        
        milliseconds.innerText = formatTime(ms);

        if (min) {
          time = min*60 + sec;
          return;
        }

        time = sec;
      }, 10);
    }
  }
  
  if (arrayForCells.every(el => el.classList.contains('hidden'))) {
    gamefield.onclick = () => {

      startTimer();
    }
  }
  
  function formatTime(param) {
    return (param < 10) ? ('0' + param) : param;
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

  gamefield.addEventListener('click', leftClick);

  gamefield.oncontextmenu = e => {
    const target = e.target;

    e.preventDefault();

    if (!target.classList.contains('hidden')) return;

    if (target.innerHTML === '') {
      target.innerHTML = '🚩';
      countUsedFlags--;
      flagsCount.innerHTML = `Flags: ${countUsedFlags}`;
      minesCount.innerHTML = `Mines: ${countUsedFlags}`;
    } else {
      target.innerHTML = '';
      countUsedFlags++;
      flagsCount.innerHTML = `Flags: ${countUsedFlags}`;
      minesCount.innerHTML = `Mines: ${countUsedFlags}`;
    }
  }

  function clickOnField(x, y) {
    if (!isValid(x, y)) return;

    const coordinate = y * width + x;
    const cell = arrayForCells[coordinate];

    if (cell.innerHTML === '🚩') return

    if (!cell.classList.contains('hidden')) return;

    cell.classList.remove('hidden');

    if (checkCellForMine(x, y)) {
      cell.innerHTML = '💣';

      alert('Game over. Try again');

      for (let el of arrayForMines) {
        arrayForCells[el].innerHTML = '💣';
      }

      gamefield.removeEventListener('click', leftClick);

      gamefield.oncontextmenu = e => {
        e.preventDefault();
      }

      clearInterval(timerId);

      return;
    }

    closedCells--;

    if (closedCells <= mines) {
      arrayForCells.forEach(el => {
        if (el.classList.contains('hidden')) {
          el.innerHTML = '🚩'
        }
      });
      
      gamefield.onclick = e => {
        e.preventDefault();
      }

      gamefield.oncontextmenu = e => {
        e.preventDefault();
      }

      alert(`Hooray! You found all mines in ${time} seconds and ${clickCounter} moves`);

      gamefield.removeEventListener('click', leftClick);

      gamefield.oncontextmenu = e => {
        e.preventDefault();
      }

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