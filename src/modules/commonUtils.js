export function createModal(title, content = null) {
    const modal = document.createElement("div");
    modal.classList.add(title);
    modal.id = title;
    modal.innerHTML = `${content}`;
    document.body.appendChild(modal);
}
