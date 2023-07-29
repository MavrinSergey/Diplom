import { sendRequest, requestTask, access } from "../api/requests";
import { closeModal, createItemBoard, formInObj } from "../views/utils";
import { getItemScrumBoard } from "../views/htmlBoard";
import { Task } from "./../models/Task";

export function formTaskAdd() {
    const screener = document.querySelector(".screener");
    const modal = document.getElementById("form");
    const taskAdd = document.getElementById("taskAdd");

    screener.addEventListener("click", closeModal);
    taskAdd.addEventListener("submit", submitForm);

    function submitForm(event) {
        event.preventDefault();
        sendRequest(
            "POST",
            requestTask,
            localStorage.getItem("access"),
            formInObj(event)
        )
            .then((data) => createNewTask(data))
            .catch((err) => {
                console.log(err);
            });
        event.target.reset(); /* Сбрасывает форму */
        closeModal();
    }
}

export function createNewTask(task) {
    const newTask = new Task(
        task.id,
        task.title,
        task.description,
        task.date_creation,
        task.update_date,
        task.lead_time,
        task.project_id,
        task.status_id,
        task.user_id
    );
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
    return newTask;
}
