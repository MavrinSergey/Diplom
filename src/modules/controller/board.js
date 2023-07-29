import { aside } from "../views/aside";
import { createElMain } from "../views/utils";
import { getHeaderSection, getScrumBoard } from "../views/htmlBoard";
import { taskDel } from "../models/taskDel";
import { openAddTask, openUpdateTask } from "../controller/task";
import { createNewTask } from "../models/taskAdd";

export let listTask = [];

export function openBoard(list) {
    if (!board) {
        createElMain("main__title", getHeaderSection("ScrumBoard"));
        createElMain("board", getScrumBoard());
    }
    // console.log(list);
    list.forEach((task) => {
        listTask.push(createNewTask(task));
    });
    console.log(listTask);
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
