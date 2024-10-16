const cardIcons = Array.from(document.querySelectorAll('.card-icon'));
const visa = document.querySelector('.visa');
const mastercard = document.querySelector('.mastercard');
const americanExpress = document.querySelector('.american-express');
const mir = document.querySelector('.mir');

export function checkCardSystem() {
    let input = document.querySelector('.card_number');
    let cardNumber = input.value.split("");
    let firstDigit = Number(cardNumber[0]);
    if (firstDigit === 2) {
        mir.classList.toggle('grey-icon');
    } else if (firstDigit === 3) {
        americanExpress.classList.toggle('grey-icon');
    } else if (firstDigit === 4) {
        visa.classList.toggle('grey-icon');
    } else if (firstDigit === 5) {
        mastercard.classList.toggle('grey-icon');
    } else {
        cardIcons.forEach(icon => icon.classList.add('grey-icon'));
    }
}