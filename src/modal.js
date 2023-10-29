const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnOpen = document.querySelector(".btn-open");
const btnClose = document.querySelector(".btn-close");
const container = document.querySelector(".container");

export const openModal = () => {
    btnOpen.addEventListener('click', event => {
        document.body.classList.add("modal-open");
        modal.classList.add('show')
    })
}

export const closeModal = () => {
    container.addEventListener('click', event => {
        console.log(event.target)
        if(event.target === btnClose || event.target === overlay) {
            modal.classList.remove('show');
            document.body.classList.remove("modal-open");
        }
    })
}

