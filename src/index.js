import "./index.html";
import "./index.scss";
import { openSign } from "./modules/controller/popUpSign";
import { authReg, submitAuth } from "./modules/models/auth";


const openFormSign = document.getElementById("open-form-sign");
const logOut = document.getElementById("log-out");

openFormSign.addEventListener("click", openSign);
window.addEventListener("load", submitAuth);
logOut.addEventListener("click", () => {
    localStorage.clear();
});
