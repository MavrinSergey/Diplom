export function createModal(title, content = null) {
  const modal = document.createElement('div')
  modal.classList.add(title)
  modal.id = title
  modal.innerHTML = `${content}`
  document.body.appendChild(modal)
}

export function createMainTitle(content = null) {
  const title = document.createElement('h2')
  title.innerHTML = `${content}`
  main__title.appendChild(title)
}

export function createSection(title, content = null) {
  const section = document.createElement('section')
  section.classList.add(title)
  section.id = title
  section.innerHTML = `${content}`
  main.appendChild(section)
}

export function createNameUser(content = null) {
  const btnSign = document.getElementById("btnSign");
  const openFormSign = document.getElementById("open-form-sign");
  const name = document.createElement('a')
  name.href = '#';
  name.innerHTML = `${content}`
  btnSign.insertBefore(name, openFormSign);
}

export function createItemBoard(col, content = null) {
  const column = document.getElementById(col);
  if (!column) {
    throw new Error(`Column element with id ${col} not found in document`);
  }

  const item = document.createElement('div');
  item.classList.add("board-item");
  item.draggable = true;
  item.innerHTML = `${content}`;
  column.appendChild(item);
}