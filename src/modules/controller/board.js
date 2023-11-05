import { createElMain, createNameUser } from "../views/utils";
import { getHeaderSection, getScrumBoard } from "../views/htmlBoard";
import { taskDel } from "../models/taskDel";
import { openAddTask, openUpdateTask } from "./task";
import { createNewTask } from "../models/taskAdd";

export let listTask = [];

export function openBoard(list) {
    if (!board) {
        createElMain("main__title", getHeaderSection("ScrumBoard"));
        createElMain("board", getScrumBoard());
    }
    console.log(list);
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
        const items = document.querySelectorAll(
            ".board-item:not(.emptySectionHiddenLesson)"
        );
        let count = 0;
        let dataItemCheck;
        items.forEach((item) => {
            const check = item.querySelector("input");
            if (check.checked === true) {
                count = count + 1;
                if (count === 1) {
                    dataItemCheck = item.dataset.item;
                }
            }
        });
        if (count !== 1) {
            console.log("Выберите только один элемент для обновления");
        } else {
            openUpdateTask(dataItemCheck);
        }
    });
}
