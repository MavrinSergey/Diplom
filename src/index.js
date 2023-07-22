import "./index.html";
import "./index.scss";
import { board } from "./modules/board/board";
import { openModal } from "./modules/popUp/popUp";

const openFormSign = document.getElementById("btnSign");
const openScrumBoard = document.getElementById("open-ScrumBoard");

openFormSign.addEventListener("click", openModal);
// openScrumBoard.addEventListener("click", openBoard);

// Эта строчка для ДЗ по GIT 1-ый комит
