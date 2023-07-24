import { openModal } from "../views/utils";
import { getSignForm } from "../views/htmlPopUp";
import { authReg } from "./../models/auth";

export function openSign() {
    openModal(getSignForm());
    authReg();
}
