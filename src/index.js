import Inputmask from "inputmask";
import validateInputs from './validation';
import './styles/main.scss'

const form = document.querySelector(".login-form");
const phone = document.querySelector(".phone");

const im = new Inputmask("+(999) 99-99-999-99");
im.mask(phone);

form.addEventListener('submit', event => {
    event.preventDefault();
    validateInputs()
})


