import { bindDraggableCards } from './dnd';


export function createMainTitle(content = null) {
  const title = document.createElement('div')
  title.classList.add('main__title')
  title.id = 'main__title'
  title.innerHTML = `${content}`
  main.appendChild(title)
}

export function createSection(title, content = null) {
  const section = document.createElement('section')
  section.classList.add(title)
  section.id = title
  section.innerHTML = `${content}`
  main.appendChild(section)
}

export function createItemBoard(col = 'to-work', content = null, count = 0) {
  const column = document.getElementById(col);
  if (!column) {
    throw new Error(`Column element with id ${col} not found in document`);
  }

  const item = document.createElement('div');
  item.classList.add("board-item");
  item.dataset.item = count;

  item.draggable = true;
  item.innerHTML = `${content}`;
  item.addEventListener('click', () => {
    const check = item.querySelector("input");
    check.checked = !check.checked;
  })
  column.appendChild(item);
  bindDraggableCards();
}