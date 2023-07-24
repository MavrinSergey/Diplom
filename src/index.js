import "./index.html";
import "./index.scss";
import { board } from "./modules/controller/board";
import { openSign } from "./modules/controller/popUpSign";

const openFormSign = document.getElementById("btnSign");
const openScrumBoard = document.getElementById("open-ScrumBoard");

openFormSign.addEventListener("click", openSign);
