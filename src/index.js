import './index.html';
import './index.scss';
import { mult, sum } from './modules/calc';
import { aside } from './modules/aside';
import { dnd } from './modules/dnd';
import { formSignReg } from './modules/formSignReg';
import { createModalReg, getEntryForm, entryWithEmailAndPassword } from './modules/formSignReg';
import { createModal } from './modules/utils';


const openEntry = document.getElementById("callFormLogin");


openEntry.addEventListener("click", openModal);


function openModal() {
    createModal('form__entry', getEntryForm());
    const modal = document.getElementById('form__entry');
    modal.querySelector('#form-entry-close')
        .addEventListener('click', () => {
            modal.remove()
            })

}



