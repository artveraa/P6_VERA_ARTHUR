const contactBtn = document.querySelector('.contact_button')
const contactModal = document.querySelector('#contact_modal')
const closeBtn = contactModal.querySelector('img')
const textInput = contactModal.querySelector('input')
const err = contactModal.querySelector('.error')
const submitBtn = contactModal.querySelector('.contact_button')
const form = document.querySelector('form')

contactBtn.addEventListener('click', e => {
    contactModal.style.display = 'block';
})

function closeForm(e) {
    if (e.key === 'Escape') {
        contactModal.style.display = 'none';
    }
}

closeBtn.addEventListener('click', e => {
    contactModal.style.display = 'none';
})

contactModal.addEventListener('keyup', e => {
    console.log('Hello')
})





submitBtn.addEventListener('click', e => {
    e.preventDefault()

    if (!textInput.validity.valid) {

        err.classList.add('show');

    } else {

        err.classList.remove("show");

    }

    if (form.checkValidity()) {
        console.log('ok')
        contactModal.style.display = "none";
    }

})