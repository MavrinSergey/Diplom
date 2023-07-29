import { sendRequest, requestTask } from "./../api/requests";
import { createNewTask } from "../models/taskAdd";

export function formTaskUpd() {
    const screener = document.querySelector(".screener");
    const modal = document.getElementById("form");
    const taskAdd = document.getElementById("taskAdd");

    screener.addEventListener("click", () => {
        screener.remove();
        modal.remove();
    });
    taskAdd.addEventListener("submit", submitForm);

    function submitForm(event) {
        const idTaskUpdate = taskUpd();
        const url = requestTask + `${idTaskUpdate}/`;
        const obj = {};
        event.preventDefault();
        const formData = new FormData(event.target);
        // Собираем данные формы в объект
        formData.forEach((value, key) => (obj[key] = value));
        sendRequest("PUT", url, localStorage.getItem("access"), obj)
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
                createNewTask(data);
            })
            .catch((err) => console.log(err));
        event.target.reset(); /* Сбрасывает форму */

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
    console.log("Сработала после перетаскивания");
}
