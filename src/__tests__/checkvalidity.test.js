/**
 * @jest-environment jsdom
 */

import { init } from "../init";

test('alert validity status', () => {
    const mainEl = document.createElement('div');
    mainEl.classList.add('main');
    document.body.append(mainEl);

    init();

    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});

    const formEl = mainEl.querySelector('.card_validation_form');
    const inputEl = mainEl.querySelector('.card_number');
    const testCardNumber = '4111111111111111';
    inputEl.value = testCardNumber;

    expect(alertMock).toHaveBeenCalledTimes(0);

    const submitEvent = new Event('submit');
    formEl.dispatchEvent(submitEvent);

    expect(alertMock).toHaveBeenCalledWith('Этот номер валиден');
    expect(alertMock).toHaveBeenCalledTimes(1);

    alertMock.mockRestore();
    
});