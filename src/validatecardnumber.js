export function validateCardNumber(event) {
    event.preventDefault();
    let cardNumber = document.querySelector('.card_number').value;
    if (cardNumber.length < 16) {
        alert('Номер введён неверно');
        return
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
    console.log(checkDigit);
    if (checkDigit === 0) {
        alert('Этот номер валиден');
    } else {
        alert('Номер введён неверно');
    }
}
