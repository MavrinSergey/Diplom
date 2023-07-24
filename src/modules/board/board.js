import { aside } from "./aside";
import { createMainTitle, createSection, createItemBoard } from "./utils";
import { getScrumBoard, getItemScrumBoard, getHeaderSection } from "./html";
import { openAddTask } from "./taskAdd";
import { taskDel } from "./taskDel";
import { openUpdateTask } from "./taskUpdate";

export function openBoard(list = null) {
    if (!board) {
        createMainTitle(getHeaderSection("ScrumBoard"));
        createSection("board", getScrumBoard());
    }
    // console.log(list);
    list.forEach((task) => {
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
    });

    const addTask = document.getElementById("task-add");
    const deleteTask = document.getElementById("task-delete");
    const updateTask = document.getElementById("task-update");
    let board = document.getElementById("board");

    addTask.addEventListener("click", () => {
        openAddTask();
    });

    deleteTask.addEventListener("click", () => {
        taskDel();
    });

    updateTask.addEventListener("click", () => {
        openUpdateTask();
    });
}
