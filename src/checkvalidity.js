import { validateCardNumber } from './validatecardnumber';
export function checkValidity(event) {
    event.preventDefault();
    const cardNumber = inputEl.value;
    const result = validateCardNumber(cardNumber);
    if (result.success) {
        alert(result.message)
    }
}