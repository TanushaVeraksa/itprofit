import { registrationApi } from "./api";
import Inputmask from "inputmask";

const phone = document.querySelector(".phone");
const name = document.querySelector(".name");
const email = document.querySelector(".email");
const message = document.querySelector(".message");

const form = document.querySelector(".login-form");

const im = new Inputmask("+(999) 99-99-999-99");
im.mask(phone);

const registration = () => {
    form.addEventListener('submit', event => {
        event.preventDefault();
        if(validateInputs()) {
            registrationApi(phone.value, name.value, email.value, message.value)
                .then(data => { 
                    alert(data.message)
                    resetValidation()
                })
                .catch(data => alert(data))
        }
    })
}

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const error = inputControl.querySelector(".error");
    error.innerText = message;

    error.classList.add("error-display");
    error.classList.remove("success-display")

    element.classList.add("error-input")
    element.classList.remove("success-input")
}

const setSuccess = (element) => {
    const inputControl = element.parentElement;
    const error = inputControl.querySelector(".error");
    error.innerText = '';

    error.classList.add("success-display");
    error.classList.remove("error-display");

    element.classList.add("success-input")
    element.classList.remove("error-input")
}

const isValidEmail = (email) => {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
 
const validateInputs = () => {
    const phoneValue = phone.value.trim();
    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const messageValue = message.value.trim();

    if(phoneValue === '') {
        setError(phone, "Phone is required")
    } else {
        setSuccess(phone)
    }
    if(nameValue === '') {
        setError(name, "Username is required")
    } else {
        setSuccess(name)
    }
    if(emailValue === '') {
        setError(email, "Email is required")
    } else if(!isValidEmail(emailValue)) {
        setError(email, "Provide a valid email address")
    } else {
        setSuccess(email)
    }
    if(messageValue === '') {
        setError(message, "Message is required")
    } else {
        setSuccess(message)
    }

    if(messageValue === '' || !isValidEmail(emailValue) || emailValue === '' || nameValue === '' || phoneValue === '') {
        return false;
    } else {
        return true;
    }
}

const resetValidation = () => {
    const inputControl = document.querySelectorAll('.input-control');
    for(let control of inputControl) {
        const error = document.querySelector('.error');
        error.classList.remove('success-display')
        control.querySelector(".input").value = ""; 
        control.querySelector(".input").classList.remove("success-input");
    }
    return inputControl;
}

export default registration;