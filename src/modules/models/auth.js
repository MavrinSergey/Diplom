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
import { formInObj, openModal, closeModal } from "../views/utils";
import { getRegErr, getRegSucc } from "../views/htmlPopUp";

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

    async function submitAuth(event) {
        try {
            const loginData = await sendRequestToken(
                "POST",
                requestLogin,
                formInObj(event)
            );
            saveToken(loginData);

            const taskData = await sendRequest(
                "GET",
                requestTask,
                localStorage.getItem("access")
            );
            loadingBoard(taskData);

            event.target.reset(); /* Сбрасывает форму */
            closeModal();
        } catch (err) {
            // console.log(err.detail);
            openModal(getRegErr(err.detail));
            setTimeout(() => {
                closeModal();
                openSign();
            }, 2500);
        }
    }
    async function submitReg(event) {
        try {
            const data = await sendRequestToken(
                "POST",
                requestRegistr,
                formInObj(event)
            );
            // saveLS(data);
            openModal(getRegSucc());
            setTimeout(() => {
                closeModal();
                openSign();
            }, 2500);
        } catch (err) {
            // console.log(err);
            openModal(getRegErr(err.email[0]));
            setTimeout(() => {
                closeModal();
                openSign();
                const wrapper = document.querySelector(".wrapper");
                wrapper.classList.add("animate-signIn");
                wrapper.classList.remove("animate-signUp");
            }, 2000);
        }
        event.target.reset(); /* Сбрасывает форму */
        closeModal();
    }
}

export function loadingBoard(data) {
    console.log(data);
    if (!document.getElementById("btnSign").querySelector("a")) {
        // createNameUser(data.name + data.surname);
    }
    openBoard(data);
}
