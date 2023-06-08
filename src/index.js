import './index.html';
import './index.scss';
import { aside } from './modules/aside';
import { dnd } from './modules/dnd';
import { getEntryForm } from './modules/formSign';
import { createModal } from './modules/utils';
import { sendRequestPOST } from './modules/requests';

const requestURL = 'https://jsonplaceholder.typicode.com/users'
const openEntry = document.getElementById("callFormLogin");


openEntry.addEventListener("click", openModal);
let body = 0;

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
        body = JSON.stringify(object)
        console.log(body)
    
    }
}

function serializeForm(formNode) {
    return new FormData(formNode)
}


sendRequestPOST('POST', requestURL, body)
            .then(data => console.log(data))
            .catch(err => console.log(err))


