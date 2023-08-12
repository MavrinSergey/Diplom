import { sendRequest, requestTask } from "./../api/requests";
import { createNewTask } from "../models/taskAdd";
import { listTask } from "../controller/board";
import { taskUpdate } from "../views/utils";

export function formTaskUpd() {
    const screener = document.querySelector(".screener");
    const formUpd = document.getElementById("form-task");

    screener.addEventListener("click", () => {
        screener.remove();
        formUpd.remove();
    });
    formUpd.addEventListener("submit", submitForm);

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
                console.log("с сервера");
                console.log(data);
                createNewTask(data);
                taskUpdate(listTask, idTaskUpdate, data);
                console.log("список задач");
                console.log(listTask);
            })
            .catch((err) => console.log(err));
        event.target.reset(); /* Сбрасывает форму */

        screener.remove();
        formUpd.remove();
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

export function eventChangeStatusTaskMouseUp(event) {
    const idDragEl = event.dataset.item;
    let obj;

    listTask.forEach((item) => {
        if (item.id == idDragEl) {
            obj = item;
        }
    });

    document
        .querySelectorAll(".board-column-content-wrapper")
        .forEach((item) => {
            if (item.contains(event)) {
                obj.status = item.id.slice(-1);
            }
        });
    const url = requestTask + `${idDragEl}/`;

    sendRequest("PUT", url, localStorage.getItem("access"), obj)
        .then((data) => {
            console.log("с сервера");
            console.log(data);
            taskUpdate(listTask, idDragEl, data);
        })
        .catch((err) => console.log(err));
}
