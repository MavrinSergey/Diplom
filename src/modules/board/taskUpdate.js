import { sendRequest } from "./../requests";
import { getAddTaskForm, getItemScrumBoard } from "./html";
import { access } from "./../popUp/popUpSign";
import { createItemBoard } from "./utils";
import { createModal } from "../commonUtils";
import { getNewTask } from "./taskAdd";
import { taskDel } from "./taskDel";

let requestTaskUpdate = "http://127.0.0.1:8000/api/v1/task/";
let requestTask = "http://127.0.0.1:8000/api/v1/task/";

export function openUpdateTask() {
    openModal(getAddTaskForm());
    eventHandlerOpenSign();
}

function openModal(getForm) {
    sendRequest("GET", requestTask, access)
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    createModal("screener");
    createModal("form", getForm);
}
function eventHandlerOpenSign() {
    const screener = document.querySelector(".screener");
    const modal = document.getElementById("form");
    const taskAdd = document.getElementById("taskAdd");

    screener.addEventListener("click", dropModalWindow);
    taskAdd.addEventListener("submit", submitForm);

    function submitForm(event) {
        const idTaskUpdate = taskUpd();
        const url = requestTaskUpdate + `${idTaskUpdate}/`;
        const obj = {};
        event.preventDefault();
        const formData = new FormData(event.target);
        // Собираем данные формы в объект
        formData.forEach((value, key) => (obj[key] = value));
        sendRequest("PUT", url, access, obj)
            .then((data) => {
                const items = document.querySelectorAll(
                    ".board-item:not(.emptySectionHiddenLesson)"
                );
                items.forEach((item) => {
                    const check = item.querySelector("input");
                    if (check.checked === true) {
                        item.remove();
                    }
                });
                getNewTask(data);
            })
            .catch((err) => console.log(err));
        event.target.reset(); /* Сбрасывает форму */

        dropModalWindow(); /* закрывает окно*/
    }
    function dropModalWindow() {
        screener.remove();
        modal.remove();
    }
}

function taskUpd() {
    const items = document.querySelectorAll(
        ".board-item:not(.emptySectionHiddenLesson)"
    );
    let list = [];
    let res = 0;
    items.forEach((item) => {
        const check = item.querySelector("input");
        if (check.checked === true) {
            list.push(item.dataset.item);
        }
    });
    if (list.length === 1) {
        res = list[0];
    }
    return res;
}

export function eventChangeStatusTask() {
    const items = document.querySelectorAll(
        ".board-item:not(.emptySectionHiddenLesson)"
    );
    let list = [];
    let res = 0;
    items.forEach((item) => {
        const check = item.querySelector("input");
        if (check.checked === true) {
            list.push(item.dataset.item);
        }
    });
    if (list.length === 1) {
        res = list[0];
    }
    return res;
}
