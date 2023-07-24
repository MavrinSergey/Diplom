import { sendRequest, requestTask, access } from "../api/requests";
import { createItemBoard } from "../views/utils";
import { getItemScrumBoard } from "../views/htmlBoard";

export function formTaskAdd() {
    const screener = document.querySelector(".screener");
    const modal = document.getElementById("form");
    const taskAdd = document.getElementById("taskAdd");

    screener.addEventListener("click", () => {
        screener.remove();
        modal.remove();
    });
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
