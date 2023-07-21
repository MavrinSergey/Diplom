export function sendRequest(method, url, token, body = null) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()

        xhr.open(method, url)

        xhr.responseType = 'json' // позволяет получать из респонса данные в json формате
        xhr.setRequestHeader('Authorization', 'JWT ' + token);
        xhr.setRequestHeader('Content-Type', 'application/json')
        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response); 
            } else {
                resolve(xhr.response); // получаем данные в строке
            }
        }
        xhr.onerror = () => {
            reject(xhr.response);
        }
        xhr.send(JSON.stringify(body))
    })
}