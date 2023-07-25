export const requestLogin = "http://127.0.0.1:8000/api/token/";
export const requestRegistr = "http://127.0.0.1:8000/api/user/";
export const requestTask = "http://127.0.0.1:8000/api/v1/task/";
export const requestTaskDel = "http://127.0.0.1:8000/api/v1/taskdelete/";

export function saveToken(data) {
    console.log(data);
    localStorage.setItem("access", data.access);
    localStorage.setItem("refresh", data.refresh);
}

export function sendRequestToken(method, url, body) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.open(method, url);

        xhr.responseType = "json"; // позволяет получать из респонса данные в json формате
        // xhr.setRequestHeader("Authorization", "JWT " + token);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response);
            } else {
                resolve(xhr.response); // получаем данные в строке
            }
        };
        xhr.onerror = () => {
            reject(xhr.response);
        };
        xhr.send(JSON.stringify(body));
    });
}

export function sendRequest(method, url, token, body = null) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.open(method, url);

        xhr.responseType = "json"; // позволяет получать из респонса данные в json формате
        xhr.setRequestHeader("Authorization", "JWT " + token);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response);
            } else {
                resolve(xhr.response); // получаем данные в строке
            }
        };
        xhr.onerror = () => {
            reject(xhr.response);
        };
        xhr.send(JSON.stringify(body));
    });
}
