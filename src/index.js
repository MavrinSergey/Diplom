import './index.html';
import './index.scss';
import { aside } from './modules/aside';
import { dnd } from './modules/dnd';
import { getEntryForm } from './modules/formSign';
import { createModal } from './modules/utils';
import { sendRequest } from './modules/requests';

const requestURL = 'https://jsonplaceholder.typicode.com/users';
const openFormSign = document.getElementById("open-form-sign");

openFormSign.addEventListener("click", openModal);

function openModal() {
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
        let obj = {};
        // Отменяем стандартное поведение браузера с отправкой формы
        event.preventDefault();
        // event.target — это HTML-элемент form
        let formData = new FormData(event.target);
        // Собираем данные формы в объект
        formData.forEach((value, key) => obj[key] = value);
        console.log(obj);
        sendRequest('POST', requestURL, obj)
            .then(data => console.log(data))
            .catch(err => console.log(err))
        event.target.reset(); /* Сбрасывает форму */

        dropModalWindow(); /* закрывает окно*/
    }
}