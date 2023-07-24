import {
    sendRequest,
    requestLogin,
    access,
    saveToken,
    requestTask,
} from "./../api/requests";
import { openBoard } from "../controller/board";

export function authenticationAuthorizationRegistration() {
    const obj = {};
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
    signIn.addEventListener("submit", submitForm);
    signUp.addEventListener("submit", submitForm);

    function submitForm(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        // Собираем данные формы в объект
        formData.forEach((value, key) => (obj[key] = value));
        sendRequest("POST", requestLogin, access, obj)
            .then((data) => {
                saveToken(data);
                sendRequest("GET", requestTask, access)
                    .then((data) => loadingBoard(data))
                    .catch((err) => console.log(err));
            })
            .catch((err) => console.log(err));
        event.target.reset(); /* Сбрасывает форму */
        screener.remove(); /* закрывает окно*/
        modal.remove(); /* закрывает окно*/
    }
}

export function loadingBoard(data) {
    console.log(data);
    if (!document.getElementById("btnSign").querySelector("a")) {
        // createNameUser(data.name + data.surname);
    }
    openBoard(data);
}
