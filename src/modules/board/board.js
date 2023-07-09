import { aside } from './aside';
import { createMainTitle, createSection, createItemBoard } from "../utils";
import { getScrumBoard, getItemScrumBoard } from "./html";
// import { bindDraggableCards } from './dnd';

const addTask = document.getElementById("add-task");
const deleteTask = document.getElementById("delete");
let board = document.getElementById("board");

addTask.addEventListener('click', () => {
    createItemBoard('to-work', getItemScrumBoard(), 0);
})

deleteTask.addEventListener('click', () => {

})

export function openBoard(js = null) {
    if (!board) {
        createMainTitle('ScrumBoard');
        createSection("board", getScrumBoard());
    }
    const tasksList = js.results
    tasksList.forEach((task, index) => {
        createItemBoard(task.status, getItemScrumBoard(task.title, task.date_creation, task.update_date, task.lead_time, index + 1), index + 1);
    });
    // bindDraggableCards();
}

