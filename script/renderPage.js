import { body, header, headerTitle, container, main, mainInner,
  easyButton, normalButton, hardButton, mode, gamefield,
  buttonsField} from "./const.js";
  
export default function renderPage() {
  body.append(header);
  header.append(container);
  container.append(headerTitle);
  headerTitle.innerHTML = 'Minesweeper on JS';

  const containerForMain = container.cloneNode(false);
  body.append(main);
  main.append(containerForMain);
  containerForMain.append(mainInner);

  mainInner.append(buttonsField);
  buttonsField.append(easyButton);
  buttonsField.append(normalButton);
  buttonsField.append(hardButton);

  mainInner.append(mode);

  mainInner.append(gamefield);
}