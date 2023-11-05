import jwt_decode from "../../../node_modules/jwt-decode";

import {
    sendRequestToken,
    sendRequest,
    requestLogin,
    saveToken,
    requestTask,
    requestReg,
} from "../api/requests";
import { openBoard } from "../controller/board";
import { openSign } from "../controller/popUpSign";
import { formInObj, closeModal, createModal } from "../views/utils";
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

    // submitAuth();
    async function submitReg(event) {
        try {
            await sendRequestToken("POST", requestReg, formInObj(event));
            createModal("popUp", getRegSucc());
            setTimeout(() => {
                screener.remove();
                modal.remove();
                openSign();
            }, 2500);
        } catch (err) {
            console.log(err);
            createModal("popUp", getRegErr(err));
            setTimeout(() => {
                closeModal("popUp");
            }, 2500);
        }
        event.target.reset();
    }
}

export function loadingBoard(data) {
    // console.log(data);
    if (!document.getElementById("open-form-sign").querySelector("a")) {
        // createNameUser(data.name + data.surname);
    }
    openBoard(data);
}

export const submitAuth = async function (event) {
    const openFormSign = document.getElementById("open-form-sign");
    const screener = document.querySelector(".screener");
    const modal = document.getElementById("form");

    // console.log(eventType);
    try {
        let accessToken = localStorage.getItem("access");
        let refreshToken = localStorage.getItem("refresh");

        // Проверка наличия токенов в локальном хранилище
        if (!accessToken && !refreshToken) {
            console.log("в локальном хранилще токенов нет");
            const loginData = await sendRequestToken(
                "POST",
                requestLogin,
                formInObj(event)
            );
            saveToken(loginData);
            accessToken = localStorage.getItem("access");
            refreshToken = localStorage.getItem("refresh");
        }

        // Проверка срока действия access токена
        const tokenExpirationTime = jwt_decode(accessToken).exp;
        const currentTime = Math.floor(Date.now() / 1000);
        if (tokenExpirationTime < currentTime) {
            console.log("access токен устарел");
            // Использование refresh токена для обновления access токена
            const refreshTokenData = await sendRequestToken(
                "POST",
                requestLogin + "refresh/",
                { refresh: refreshToken }
            );
            saveToken(refreshTokenData);
            accessToken = localStorage.getItem("access");
        }

        // Использование сохраненного или обновленного access токена для отправки запроса
        const taskData = await sendRequest("GET", requestTask, accessToken);
        loadingBoard(taskData);
        openFormSign.remove();
    } catch (err) {
        console.log(err);
        createModal("popUp", getRegErr(err));
        setTimeout(() => {
            closeModal("popUp");
        }, 2500);
    }
};
