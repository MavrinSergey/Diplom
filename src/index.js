import './index.html';
import './index.scss';
import { aside } from './modules/widgets/aside';
import { openModal } from './modules/processes/formSignIn-Up';

const openFormSign  = document.getElementById("btnSign");
const openScrumBoard  = document.getElementById("open-ScrumBoard");

openFormSign.addEventListener("click", openModal);
// openScrumBoard.addEventListener("click", openBoard);

// Эта строчка для ДЗ по GIT 1-ый комит