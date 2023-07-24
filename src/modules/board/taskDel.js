import { sendRequest } from "./../requests";
import { access } from "./../popUp/popUpSign";

let requestTaskDel = "http://127.0.0.1:8000/api/v1/taskdelete/";

export function taskDel() {
    const items = document.querySelectorAll(
        ".board-item:not(.emptySectionHiddenLesson)"
    );

    items.forEach((item) => {
        const check = item.querySelector("input");
        if (check.checked === true) {
            requestTaskDel = requestTaskDel + `${item.dataset.item}/`;
            sendRequest("DELETE", requestTaskDel, access)
                .then(() => item.remove())
                .catch((err) => console.log(err));
        }
    });
}
