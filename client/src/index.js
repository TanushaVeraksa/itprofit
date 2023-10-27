import Inputmask from "inputmask";
import './styles/main.scss'

const phone = document.querySelector(".phone");

const im = new Inputmask("+(999) 99-99-999-99");
im.mask(phone);