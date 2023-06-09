import './index.html';
import './index.scss';
import { aside } from './modules/aside';
import { dnd } from './modules/dnd';
import { getEntryForm } from './modules/formSign';
import { createModal } from './modules/utils';
import { sendRequestPOST } from './modules/requests';

const requestURL = 'https://jsonplaceholder.typicode.com/users'
const openFormSign = document.getElementById("open-form-sign");


openFormSign.addEventListener("click", openModal);
let body = 0;

function openModal() {
    createModal('form', getEntryForm());
    const screener = document.querySelector('.screener');
    const modal = document.getElementById('form')
    const wrapper = document.querySelector('.wrapper');
    const signIn = document.getElementById('sign-in');

    const signUpLink = document.querySelector('.signUp-link')
    const signInLink = document.querySelector('.signIn-link')


    screener.addEventListener('click', dropModalWindow);

    function dropModalWindow() {
        screener.remove();
        modal.remove();
    }

    signUpLink.addEventListener('click', () => {
        wrapper.classList.add('animate-signIn')
        wrapper.classList.remove('animate-signUp')
    });

    signInLink.addEventListener('click', () => {
        wrapper.classList.add('animate-signUp')
        wrapper.classList.remove('animate-signIn')
    });

    signIn.addEventListener('submit', handleFormSubmit)

    function handleFormSubmit(event) {
        event.preventDefault()
        const data = serializeForm(signIn)
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


