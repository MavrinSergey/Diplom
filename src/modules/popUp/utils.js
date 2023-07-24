export function createNameUser(content = null) {
    const btnSign = document.getElementById("btnSign");
    const openFormSign = document.getElementById("open-form-sign");
    const name = document.createElement("a");
    name.href = "#";
    name.innerHTML = `${content}`;
    btnSign.insertBefore(name, openFormSign);
}
