import { openModal } from "../views/utils";
import { getSignForm } from "../views/htmlPopUp";
import { authenticationAuthorizationRegistration } from "./../models/auth";

export function openSign() {
    openModal(getSignForm());
    authenticationAuthorizationRegistration();
}
