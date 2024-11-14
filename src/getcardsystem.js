export function getCardSystem(cardNumber) {
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
