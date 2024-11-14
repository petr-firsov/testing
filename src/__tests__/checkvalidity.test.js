/**
 * @jest-environment jsdom
 */


test('alert validity status', () => {
    const formEl = document.createElement('form');
    const inputEl = document.createElement('input');
    inputEl.style.type = 'text';
    formEl.appendChild(inputEl);
    document.body.appendChild(formEl);

    const alert = jest.fn(() => {
        return 'Форма работает'
    });

    formEl.addEventListener('submit', alert);
    const submit = new Event('submit');
    let result = formEl.dispatchEvent(submit);
    let answer = 'Форма работает';
    expect(result).toBe(answer);
});