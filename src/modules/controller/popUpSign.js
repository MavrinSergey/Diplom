import { createModal, openModal } from "../views/utils";
import { getSignForm } from "../views/htmlPopUp";
import { authReg } from "./../models/auth";

export function openSign() {
    createModal("screener");
    createModal("form", getSignForm());
    // openModal(getSignForm());
    authReg();
}
