import { sendRequest, requestTaskDel } from "../api/requests";

export function taskDel() {
    const items = document.querySelectorAll(
        ".board-item:not(.emptySectionHiddenLesson)"
    );

    items.forEach((item) => {
        const check = item.querySelector("input");
        if (check.checked === true) {
            const url = requestTaskDel + `${item.dataset.item}/`;
            console.log(url);
            sendRequest("DELETE", url, localStorage.getItem("access"))
                .then(() => item.remove())
                .catch((err) => console.log(err));
        }
    });
}
