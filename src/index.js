import './index.html';
import './index.scss';
import { mult, sum } from './modules/calc';
import { aside } from './modules/aside';
import { dnd } from './modules/dnd';
import { formSignReg } from './modules/formSignReg';
import { createModalReg, getEntryForm, entryWithEmailAndPassword } from './modules/formSignReg';
import { createModal, handleFormSubmit } from './modules/utils';

const requestURL = 'https://jsonplaceholder.typicode.com/users'
const openEntry = document.getElementById("callFormLogin");


openEntry.addEventListener("click", openModal);


function openModal() {
    createModal('form__entry', getEntryForm());
    const modal = document.getElementById('form__entry');
    modal.querySelector('#form-entry-close')
        .addEventListener('click', () => {
            modal.remove()
        })
    modal.addEventListener('submit', handleFormSubmit)

    function handleFormSubmit(event) {
        event.preventDefault()
        const data = serializeForm(modal)
        let object = {};
        data.forEach((value, key) => object[key] = value);
        const jsonData = JSON.stringify(object)
        console.log(jsonData)
    }
}

function serializeForm(formNode) {
    return new FormData(formNode)
}
const body = {
    email: 'Mavrin',
    password: 36
}

// sendRequestGet('GET', requestURL)
// .then(data => console.log(data))
// .catch(err => console.log(err))

sendRequestPOST('POST', requestURL, body)
    .then(data => console.log(data))
    .catch(err => console.log(err))
