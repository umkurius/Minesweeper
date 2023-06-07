import renderPage from "./script/renderPage.js";
import renderDifficulty, { getMode } from "./script/selectDifficulty.js";
import { gamefield } from "./script/const.js";
import './index.html';
import './style/style.css';

renderPage();
renderDifficulty();
getMode(10, 10, 10, 'Easy game');
gamefield.classList.add('game__easy');

