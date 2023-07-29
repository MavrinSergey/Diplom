import { aside } from "../views/aside";
import {
    createMainTitle,
    createSection,
    createItemBoard,
} from "../views/utils";
import {
    getHeaderSection,
    getScrumBoard,
    getItemScrumBoard,
} from "../views/htmlBoard";
import { openAddTask } from "./task";
import { taskDel } from "../models/taskDel";
import { openUpdateTask } from "../controller/task";
import { createNewTask } from "../models/taskAdd";

export let listTask = [];

export function openBoard(list) {
    if (!board) {
        createMainTitle(getHeaderSection("ScrumBoard"));
        createSection("board", getScrumBoard());
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
