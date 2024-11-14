import './index.css';
const tmpl = '<form class="card_validation_form"><input class="card_number" type="text" placeholder="Enter your card ID" maxlength="16" autofocus> <button class="validation_button">Click to Validate</button></form>';
import { checkCardSystem } from './checkcardsystem';
import { checkValidity } from './checkvalidity';


const init = () => {
    const divEl = document.createElement('div');
    divEl.innerHTML = tmpl;
    const formEl = divEl.querySelector('.card_validation_form');
    const inputEl = divEl.querySelector('.card_number');

    inputEl.addEventListener('input', checkCardSystem);
    inputEl.addEventListener('paste', checkCardSystem);
    formEl.addEventListener('submit', checkValidity);

    const main = document.querySelector('.main');
    main.appendChild(divEl);
};
init();

