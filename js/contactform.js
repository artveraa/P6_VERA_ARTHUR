const contactBtn = document.querySelector('.contact_button')
const contactModal = document.querySelector('#contact_modal')
const closeBtn = contactModal.querySelector('img')
const textInput = contactModal.querySelector('input')
const err = contactModal.querySelector('.error')
const submitBtn = contactModal.querySelector('.contact_button')
const form = document.querySelector('form')

const firstName = form.querySelector('#firstname')
const lastName = form.querySelector('#lastname')
const emailAddress = form.querySelector('#email')
const message = form.querySelector('#textarea')

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

})





submitBtn.addEventListener('click', e => {
    e.preventDefault()

    if (!textInput.validity.valid) {

        err.classList.add('show');

    } else {

        err.classList.remove("show");

    }

    if (form.checkValidity()) {
        console.log(`L'utilisateur ${firstName.value} ${lastName.value} vous a envoyé le message suivant : ${message.value}. Répondez-lui à l'adresse : ${emailAddress.value}`)
        contactModal.style.display = "none";
    }

})