import "./index.html";
import "./index.scss";
import { board } from "./modules/controller/board";
import { openSign } from "./modules/controller/popUpSign";
import { authReg, submitAuth } from "./modules/models/auth";

const Auth = authReg;
const openFormSign = document.getElementById("open-form-sign");
const openScrumBoard = document.getElementById("open-ScrumBoard");

openFormSign.addEventListener("click", openSign);
window.addEventListener("load", submitAuth);
