import { createModal } from "../views/utils";
import { getAddUpdTaskForm } from "../views/htmlPopUp";
import { formTaskAdd } from "../models/taskAdd";
import { formTaskUpd } from "../models/taskUpdate";
import { listTask } from "./board";

export function openAddTask() {
    createModal("screener");
    createModal("form", getAddUpdTaskForm("Add"));
    formTaskAdd();
}

export function openUpdateTask(numTask) {
    console.log(numTask);
    let task = listTask.find((task) => task.id == numTask);
    console.log(task);
    createModal("screener");
    createModal(
        "form",
        getAddUpdTaskForm(
            "Update",
            task.title,
            task.description,
            task.project,
            task.status,
            task.user
        )
    );
    formTaskUpd();
}
