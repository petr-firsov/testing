import { getCardSystem } from './getcardsystem';

export function checkCardSystem() {
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