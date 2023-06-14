import './index.html';
import './index.scss';
import { aside } from './modules/aside';
import { dnd } from './modules/dnd';
import { getEntryForm } from './modules/formSign';
import { createModal, createMainTitle, createSection, createNameUser, createItemBoard } from './modules/utils';
import { sendRequest } from './modules/requests';
import { getScrumBoard, getItemScrumBoard } from './modules/Board';

const requestURL = 'https://jsonplaceholder.typicode.com/users';
// const requestURL = 'https://localhost/login';
const openFormSign = document.getElementById("open-form-sign");
const openScrumBoard = document.getElementById("open-ScrumBoard");

openFormSign.addEventListener("click", openModal);
openScrumBoard.addEventListener("click", openBoard);

function openModal() {
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
        console.log(obj);
        sendRequest('POST', requestURL, obj)
            .then(data => Name(data))
            .catch(err => console.log(err))
        event.target.reset(); /* Сбрасывает форму */
        dropModalWindow(); /* закрывает окно*/
    }
}

function Name(params) {
    console.log(params);
    const test = `{"id_user": 1, 
                    "name": "Sergey",
                    "surname": "Mavrin",
                    "id_task": [1, 2],
                    "title": ["Заголовок задачи", "Заголовок задачи2"],
                    "date_creation": ["14.06.2023", "14.06.2023"],
                    "update_date": ["14.06.2023", "14.06.2023"],
                    "status": ["agreement", "in-work"],
                    "lead_time": ["31.06.2023", "30.06.2023"]}`;
    const obj = JSON.parse(test);
    console.log(obj);
    if (!document.getElementById("btnSign").querySelector("a")) {
        createNameUser(obj.name + obj.surname);
    }
    openBoard(obj);
}

function openBoard(js) {
    if (!document.getElementById("board")) {
        createMainTitle('ScrumBoard');
        createSection("board", getScrumBoard());
    }

    for (let i = 0; i < js.title.length; i++) {
        createItemBoard(js.status[i], getItemScrumBoard(js.title[i], js.date_creation[i], js.update_date[i], js.lead_time[i]))
    }
   
}