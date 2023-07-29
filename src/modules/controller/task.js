import { createModal } from "../views/utils";
import { getAddUpdTaskForm } from "../views/htmlPopUp";
import { formTaskAdd } from "../models/taskAdd";
import { formTaskUpd } from "../models/taskUpdate";

export function openAddTask() {
    createModal("screener");
    createModal("form", getAddUpdTaskForm("Add"));
    formTaskAdd();
}

export function openUpdateTask() {
    createModal("screener");
    createModal("form", getAddUpdTaskForm("Update"));
    formTaskUpd();
}
