import { getEntryForm } from './formSign';
import { createModal, createNameUser} from './../utils';
import { sendRequest } from './../requests';
import { openBoard } from './../board/board';

const requestURL = 'http://127.0.0.1:8000/api/token/';
const requestTask = 'http://127.0.0.1:8000/api/v1/task/'
let access = '';
let refresh = '';


export function openModal() {
    createModal('screener');
    createModal('form', getEntryForm());
    const screener = document.querySelector('.screener');
    const modal = document.getElementById('form')
    const wrapper = document.querySelector('.wrapper');
    const signIn = document.getElementById('sign-in');
    const signUp = document.getElementById('sign-up');

    wrapper.addEventListener('click', (event) => {
        if (event.target.classList.contains('signUp-link')) {
            wrapper.classList.add('animate-signIn')
            wrapper.classList.remove('animate-signUp')
        } else if (event.target.classList.contains('signIn-link')) {
            wrapper.classList.add('animate-signUp')
            wrapper.classList.remove('animate-signIn')
        }
    })

    screener.addEventListener('click', dropModalWindow);

    function dropModalWindow() {
        screener.remove();
        modal.remove();
    }

    signIn.addEventListener('submit', submitForm);
    signUp.addEventListener('submit', submitForm);

    function submitForm(event) {
        const obj = {};
        // Отменяем стандартное поведение браузера с отправкой формы
        event.preventDefault();
        // event.target — это HTML-элемент form
        const formData = new FormData(event.target);
        // Собираем данные формы в объект
        formData.forEach((value, key) => obj[key] = value);
        // console.log('с формы')
        // console.log(obj)
        sendRequest('POST', requestURL, access, obj)
            .then(data => saveToken(data))
            .catch(err => console.log(err))
        event.target.reset(); /* Сбрасывает форму */
        dropModalWindow(); /* закрывает окно*/
    }

}

function saveToken(data) {
    access = data.access
    refresh = data.refresh
    // console.log(access)
    // console.log(refresh)
    sendRequest('GET', requestTask, access)
        .then(data => Name(data))
        .catch(err => console.log(err))
}

function Name(params) {
    if (!document.getElementById("btnSign").querySelector("a")) {
        createNameUser(params.name + params.surname);
    }
    // console.log(params)
    openBoard(params);
}


