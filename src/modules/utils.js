export function createModal(title, content) {
  const modal = document.createElement('form')
  modal.classList.add('form', title)
  modal.id = title
  modal.innerHTML = `${content}`
  document.body.appendChild(modal)
}
