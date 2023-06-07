import { easyButton, hardButton, normalButton, mode, modeName, modeDesc,
newGameButton, gamefield, gameInformation, timer, minesCount, flagsCount,
clicksCount, minutes, seconds, milliseconds} from "./const.js";
import { createField, timerId } from "./renderField.js";

 export function getMode(width, height, mines, text) {
  gamefield.innerHTML = '';
  mode.innerHTML = '';

  mode.append(modeName);
  mode.append(modeDesc);

  modeName.innerHTML = text;
  modeDesc.innerHTML = `Field: ${width} x ${height} Mines: <input id='input' type='text' value='${mines}'>`;
  
  mode.append(newGameButton);
  mode.append(gameInformation);

  gameInformation.append(timer);

  timer.append(minutes);
  timer.append(seconds);
  timer.append(milliseconds);

  gameInformation.append(minesCount);
  gameInformation.append(flagsCount);
  gameInformation.append(clicksCount);

  modeParam(width, height, mines);

  const input = document.getElementById('input');

  input.addEventListener('blur', () => {
    mines = input.value;
  })

  newGameButton.onclick = () => {
    gamefield.innerHTML = '';

    if (mines < 10 || mines > 99) {
      alert('Incorrect number of mines. Please try again from 10 to 99');

      clearInterval(timerId);

      return;
    }

    modeParam(width, height, mines);
  }
}

function modeParam(width, height, mines) {
  clearInterval(timerId);

  createField(width, height, mines);

  minutes.innerHTML = '00';
  seconds.innerHTML = '00';
  milliseconds.innerHTML = '00';

  flagsCount.innerHTML = `Flags: ${mines}`;
  minesCount.innerHTML = `Mines: ${mines}`;
  clicksCount.innerHTML = 'Clicks: 0';
}

export default function renderDifficulty() {
  easyButton.addEventListener('click', () => {

    getMode(10, 10, 10, 'Easy game');
    
    gamefield.classList.add('game__easy');
    gamefield.classList.remove('game__normal');
    gamefield.classList.remove('game__hard');
  });

  normalButton.addEventListener('click', () => {

    getMode(15, 15, 40, 'Normal game')
    
    gamefield.classList.add('game__normal');
    gamefield.classList.remove('game__easy');
    gamefield.classList.remove('game__hard');
  });

  hardButton.addEventListener('click', () => {

    getMode(25, 25, 99, 'Hard game');
    
    gamefield.classList.add('game__hard');
    gamefield.classList.remove('game__easy');
    gamefield.classList.remove('game__normal');
  });
}
