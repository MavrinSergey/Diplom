import { bindDraggableCards } from "../views/dnd";

export function createModal(title, content = "") {
    const modal = document.createElement("div");
    modal.classList.add(title);
    modal.id = title;
    modal.innerHTML = `${content}`;
    document.body.appendChild(modal);
}

export function closeModal(str) {
    const modal = document.querySelector(`.${str}`);
    modal.remove();
}

export function formInObj(event) {
    const obj = {};
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.forEach((value, key) => (obj[key] = value));
    return obj;
}

export function createNameUser(content = null) {
    const btnSign = document.getElementById("btnSign");
    const openFormSign = document.getElementById("open-form-sign");
    const name = document.createElement("a");
    name.href = "#";
    name.innerHTML = `${content}`;
    btnSign.insertBefore(name, openFormSign);
}

export function createItemBoard(col, content = null, count = 0) {
    const column = document.getElementById(`${col}`);
    if (!column) {
        throw new Error(
            `Column element with id col${col} not found in document`
        );
    }

    const item = document.createElement("div");
    item.classList.add("board-item");
    item.dataset.item = count;

    item.draggable = true;
    item.innerHTML = `${content}`;
    item.addEventListener("click", () => {
        const check = item.querySelector("input");
        check.checked = !check.checked;
    });
    column.appendChild(item);
    bindDraggableCards();
}

export function createElMain(title, content = null) {
    const section = document.createElement("section");
    section.classList.add(title);
    section.id = title;
    section.innerHTML = `${content}`;
    main.appendChild(section);
}

export function taskUpdate(list, id, data) {
    list.forEach((item) => {
        if (item.id == id) {
            item.title = data.title;
            item.description = data.description;
            item.project = data.project;
            item.status = data.status;
            item.user = data.user;
        }
    });
}
