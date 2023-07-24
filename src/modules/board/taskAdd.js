import { getAddTaskForm, getItemScrumBoard } from "./html";
import { createItemBoard } from "./utils";
import { createModal } from "../commonUtils";
import { sendRequest } from "../requests";
import { access } from "../popUp/popUpSign";

const requestTask = "http://127.0.0.1:8000/api/v1/task/";

export function openAddTask() {
    openModal(getAddTaskForm());
    eventHandlerOpenSign();
}

function openModal(getForm) {
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
        const obj = {};
        event.preventDefault();
        const formData = new FormData(event.target);
        // Собираем данные формы в объект
        formData.forEach((value, key) => (obj[key] = value));
        sendRequest("POST", requestTask, access, obj)
            .then((data) => getNewTask(data))
            .catch((err) => console.log(err));
        event.target.reset(); /* Сбрасывает форму */
        dropModalWindow(); /* закрывает окно*/
    }
    function dropModalWindow() {
        screener.remove();
        modal.remove();
    }
}

export function getNewTask(task) {
    console.log(task);
    createItemBoard(
        task.status,
        getItemScrumBoard(
            task.title,
            task.date_creation,
            task.update_date,
            task.lead_time,
            task.id
        ),
        task.id
    );
}
