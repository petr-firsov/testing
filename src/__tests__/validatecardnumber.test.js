import { validateCardNumber } from '../validatecardnumber';

test('card number is too short', () => {
    let answer = validateCardNumber('1');
    let result = 'Введённый номер слишком короткий';
    expect(answer.message).toBe(result);
});

test('card number is wrong', () => {
    let answer = validateCardNumber('4929282693763933');
    let result = 'Невалидный номер карты';
    expect(answer.message).toBe(result);
});

test('card number is valid', () => {
    let answer = validateCardNumber('4929282693763934');
    let result = 'Этот номер валиден';
    expect(answer.message).toBe(result);
});