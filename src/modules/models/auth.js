import {
    sendRequestToken,
    sendRequest,
    requestLogin,
    saveToken,
    requestTask,
    requestRegistr,
} from "./../api/requests";
import { openBoard } from "../controller/board";
import { openSign } from "../controller/popUpSign";
import { formInObj } from "../views/utils";

export function authReg() {
    const screener = document.querySelector(".screener");
    const modal = document.getElementById("form");
    const wrapper = document.querySelector(".wrapper");
    const signIn = document.getElementById("sign-in");
    const signUp = document.getElementById("sign-up");

    wrapper.addEventListener("click", (event) => {
        if (event.target.classList.contains("signUp-link")) {
            wrapper.classList.add("animate-signIn");
            wrapper.classList.remove("animate-signUp");
        } else if (event.target.classList.contains("signIn-link")) {
            wrapper.classList.add("animate-signUp");
            wrapper.classList.remove("animate-signIn");
        }
    });

    screener.addEventListener("click", () => {
        screener.remove();
        modal.remove();
    });
    signIn.addEventListener("submit", submitAuth);
    signUp.addEventListener("submit", submitReg);

    function submitAuth(event) {
        sendRequestToken("POST", requestLogin, formInObj(event))
            .then((data) => {
                saveToken(data);
                sendRequest("GET", requestTask, localStorage.getItem("access"))
                    .then((data) => loadingBoard(data))
                    .catch((err) => console.log(err));
            })
            .catch((err) => console.log(err));
        event.target.reset(); /* Сбрасывает форму */
        screener.remove(); /* закрывает окно*/
        modal.remove(); /* закрывает окно*/
    }
    function submitReg(event) {
        sendRequestToken("POST", requestRegistr, formInObj(event))
            .then((data) => {
                saveLS(data);
                openSign();
            })
            .catch((err) => console.log(err));
        event.target.reset(); /* Сбрасывает форму */
        screener.remove(); /* закрывает окно*/
        modal.remove(); /* закрывает окно*/
    }
}

export function saveLS(data) {
    console.log(data);
    localStorage.setItem("name", data.first_name);
    localStorage.setItem("email", data.email);
    localStorage.setItem("surname", data.last_name);
}

export function loadingBoard(data) {
    console.log(data);
    if (!document.getElementById("btnSign").querySelector("a")) {
        // createNameUser(data.name + data.surname);
    }
    openBoard(data);
}
