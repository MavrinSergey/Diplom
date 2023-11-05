import { createModal } from "../views/utils";
import { getAddUpdTaskForm } from "../views/htmlPopUp";
import { formTaskAdd } from "../models/taskAdd";
import { formTaskUpd } from "../models/taskUpdate";
import { listTask } from "./board";

export function openAddTask() {
    createModal("screener");
    createModal("form-task", getAddUpdTaskForm("Add"));
    formTaskAdd();
}

export function openUpdateTask(numTask) {
    console.log(`id задачи ${numTask}`);
    let task = listTask.find((task) => task.id === numTask);
    console.log(`Из html`);
    console.log(task);
    createModal("screener");
    createModal(
        "form-task",
        getAddUpdTaskForm(
            "Update",
            task.title,
            task.description,
            task.status,
            task.user
        )
    );
    formTaskUpd();
}
