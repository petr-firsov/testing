export function validateCardNumber(cardNumber) {
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