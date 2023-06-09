export function createModal(title, content) {
  const screener = document.createElement('div')
  screener.classList.add('screener')
  document.body.appendChild(screener)

  const modal = document.createElement('div')
  
  modal.classList.add(title)
  modal.id = title
  modal.innerHTML = `${content}`
  document.body.appendChild(modal)
}

