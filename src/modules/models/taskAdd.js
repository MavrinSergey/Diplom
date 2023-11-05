import { sendRequest, requestTask } from "../api/requests";
import { closeModal, createItemBoard, formInObj } from "../views/utils";
import { getItemScrumBoard } from "../views/htmlBoard";
import { Task } from "./Task";
import { listTask } from "../controller/board";

export function formTaskAdd() {
    const screener = document.querySelector(".screener");
    const taskAdd = document.getElementById("form-task");

    screener.addEventListener("click", () => {
        closeModal("screener");
        closeModal("form-task");
    });
    taskAdd.addEventListener("submit", submitForm);

    function submitForm(event) {
        event.preventDefault();
        sendRequest(
            "POST",
            requestTask,
            localStorage.getItem("access"),
            formInObj(event)
        )
            .then((data) => {
                createNewTask(data);
                listTask.push(data);
                event.target.reset();

                closeModal("screener");
                closeModal("form-task");
            })
            .catch((err) => {
                console.log(err);
            });
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
        task.status,
        task.user,
        task.user_first_name,
        task.user_last_name
    );
    createItemBoard(
        task.status,
        getItemScrumBoard(
            task.title,
            task.date_creation,
            task.update_date,
            task.lead_time,
            task.id,
            task.description,
            task.user_first_name,
            task.user_last_name
        ),
        task.id
    );
    return newTask;
}
