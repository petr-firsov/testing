import { getCardSystem } from "../getcardsystem";

test('card system is american express', () => {
    let result = getCardSystem('342706317459195');
    let answer = 'american-express';
    expect(result).toBe(answer);
});