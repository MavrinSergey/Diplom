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
import { formInObj, closeModal, createModal, createHTML } from "../views/utils";
import { getRegErr, getRegSucc } from "../views/htmlPopUp";

export function authReg() {
    const openFormSign = document.getElementById("open-form-sign");
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
            event.target.reset();
            screener.remove();
            modal.remove();
            const taskData = await sendRequest(
                "GET",
                requestTask,
                localStorage.getItem("access")
            );
            loadingBoard(taskData);
            openFormSign.remove();
        } catch (err) {
            console.log(err);
            createModal("popUp", getRegErr(err.detail));
            setTimeout(() => {
                closeModal("popUp");
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
            createModal("popUp", getRegSucc());
            setTimeout(() => {
                screener.remove();
                modal.remove();
                openSign();
            }, 2500);
        } catch (err) {
            console.log(err);
            createModal("popUp", getRegErr(err.email[0]));
            setTimeout(() => {
                closeModal("popUp");
            }, 2500);
        }
        event.target.reset();
    }
}

export function loadingBoard(data) {
    console.log(data);
    if (!document.getElementById("open-form-sign").querySelector("a")) {
        // createNameUser(data.name + data.surname);
    }
    openBoard(data);
}
