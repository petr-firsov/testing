import './index.css';
import { checkCardSystem } from './checkcardsystem';
import { validateCardNumber } from './validatecardnumber';

const form = document.querySelector('.card_validation_form');
form.addEventListener('submit', validateCardNumber);

form.addEventListener('input', checkCardSystem);
form.addEventListener('paste', checkCardSystem);

