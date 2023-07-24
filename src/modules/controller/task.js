import { openModal } from "../views/utils";
import { getAddTaskForm } from "../views/htmlPopUp";
import { formTaskAdd } from "../models/taskAdd";
import { formTaskUpd } from "../models/taskUpdate";
import { sendRequest, requestTaskDel, access } from "../api/requests";

export function openAddTask() {
    openModal(getAddTaskForm());
    formTaskAdd();
}

export function openUpdateTask() {
    openModal(getAddTaskForm());
    formTaskUpd();
}

export function taskDel() {
    const items = document.querySelectorAll(
        ".board-item:not(.emptySectionHiddenLesson)"
    );

    items.forEach((item) => {
        const check = item.querySelector("input");
        if (check.checked === true) {
            const url = requestTaskDel + `${item.dataset.item}/`;
            sendRequest("DELETE", url, access)
                .then(() => item.remove())
                .catch((err) => console.log(err));
        }
    });
}
