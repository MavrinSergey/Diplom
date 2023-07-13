import { aside } from './aside';
import { createMainTitle, createSection, createItemBoard } from "./utils";
import { getScrumBoard, getItemScrumBoard, getHeaderSection } from "./html";

export function openBoard(js = null) {
    if (!board) {
        createMainTitle(getHeaderSection("ScrumBoard"));
        createSection("board", getScrumBoard());
    }
    const tasksList = js.results
    tasksList.forEach((task, index) => {
        createItemBoard(task.status, getItemScrumBoard(task.title, task.date_creation, task.update_date, task.lead_time, index + 1), index + 1);
    });

    const addTask = document.getElementById("add-task");
    const deleteTask = document.getElementById("delete");
    let board = document.getElementById("board");

    addTask.addEventListener('click', () => {
        createItemBoard('to-work', getItemScrumBoard(), 0);
    })

    deleteTask.addEventListener('click', () => {
        const items = document.querySelectorAll('.board-item:not(.emptySectionHiddenLesson)');
        items.forEach(item => {
            const check = item.querySelector('input');
            if (check.checked === true) {
                item.remove();
            }
        });
    });
}

