import "./index.html";
import "./index.scss";
import { board } from "./modules/board/board";
import { openSign } from "./modules/popUp/popUpSign";
import { openBoard } from "./modules/board/board";

const openFormSign = document.getElementById("btnSign");
const openScrumBoard = document.getElementById("open-ScrumBoard");

openFormSign.addEventListener("click", openSign);
// openScrumBoard.addEventListener("click", openBoard);
