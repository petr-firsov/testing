import './index.css';
const tmpl = '<form class="card_validation_form"><input class="card_number" type="text" placeholder="Enter your card ID" maxlength="16" autofocus> <button class="validation_button">Click to Validate</button></form>';

init();

function init() {
    const divEl = document.createElement('div');
    divEl.innerHTML = tmpl;
    const formEl = divEl.querySelector('.card_validation_form');
    const inputEl = divEl.querySelector('.card_number');

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

    function checkValidity(event) {
        event.preventDefault();
        const cardNumber = inputEl.value;
        const result = validateCardNumber(cardNumber);
        if (result.success) {
            alert(result.message)
        }
    }

    inputEl.addEventListener('input', checkCardSystem);
    inputEl.addEventListener('paste', checkCardSystem);
    formEl.addEventListener('submit', checkValidity);
    const main = document.querySelector('.main');
    main.appendChild(divEl);
} 

function getCardSystem(cardNumber) {
    cardNumber.split("");
    let firstDigit = Number(cardNumber[0]);
    if (firstDigit === 2) {
        return 'mir'
    } else if (firstDigit === 3) {
        return 'american-express'
    } else if (firstDigit === 4) {
        return 'visa'
    } else if (firstDigit === 5) {
        return 'mastercard'
    } else {
        return 'undefined'
    }
}

function validateCardNumber(cardNumber) {
    if (cardNumber.length < 16) {
        return {
            success: true,
            message: 'Введённый номер слишком короткий'
        };
    }
    let array = cardNumber.split("");
    array.reverse();
    let numbers = [];
    array.forEach(element => {
        element = Number(element);
        numbers.push(element);
    });
    let sum = 0; 
    for (let i = 0; i < numbers.length; i++) {
        if (i % 2 === 1) {
            let doubleDigit = numbers[i] * 2;
            if (doubleDigit > 9) {
                doubleDigit = doubleDigit - 9;
            }
            sum = sum + doubleDigit;
        } else {
            sum = sum + numbers[i];
        }
    }
    let checkDigit = (10 - (sum % 10)) % 10;
    if (checkDigit === 0) {
        return {
            success: true,
            message: 'Этот номер валиден',
        }
    } else {
        return {
            success: true,
            message: 'Невалидный номер карты'
        }
    }
}