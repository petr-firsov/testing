import { validateCardNumber } from './validatecardnumber';
import { getCardSystem } from './getcardsystem';
const tmpl = '<form class="card_validation_form"><input class="card_number" type="text" placeholder="Enter your card ID" maxlength="16" autofocus> <button class="validation_button">Click to Validate</button></form>';
export const init = () => {
    const divEl = document.createElement('div');
    divEl.innerHTML = tmpl;
    const formEl = divEl.querySelector('.card_validation_form');
    const inputEl = divEl.querySelector('.card_number');

    function checkValidity(event) {
        event.preventDefault();
        const cardNumber = inputEl.value;
        const result = validateCardNumber(cardNumber);
        if (result.success) {
            alert(result.message)
        }
    };

    function checkCardSystem() {
        const cardNumber = inputEl.value;
        const cardSystem = getCardSystem(cardNumber);
        const cardIconsEl = Array.from(document.querySelectorAll('.card-icon'));
        for (let cardIconEl of cardIconsEl) {
            if (cardIconEl.classList.contains(cardSystem)) {
                cardIconEl.classList.toggle('grey-icon');
                console.log(cardIconEl)
            } else {
                cardIconEl.classList.add('grey-icon');
            }
        }
    };    

    inputEl.addEventListener('input', checkCardSystem);
    inputEl.addEventListener('paste', checkCardSystem);
    formEl.addEventListener('submit', checkValidity);

    const main = document.querySelector('.main');
    main.appendChild(divEl);
};