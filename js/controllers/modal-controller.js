function State() {
    this.container = null;
    this.btnClose = null;    
}

const state = new State();


export function init() {
    state.container = document.querySelector("#modal__contact");
    state.btnClose = document.querySelector("#btn__modal__contact__close");

    state.btnClose.addEventListener('click', handleBtnCloseClick);
    state.container.addEventListener('click', handleContainerClick);
}

export function showModal() {
    state.container.classList.add("active");
}
export function closeModal() {
    state.container.classList.remove("active");
}

function handleBtnCloseClick(event) {
    event.preventDefault();
    closeModal();
}

function handleContainerClick(event) {
    if (event.target === this) {
        closeModal();
    }
}