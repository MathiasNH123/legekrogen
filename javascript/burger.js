/* variabler */
let burger = document.querySelector('.fa-bars')
let navUL = document.querySelector('#burger-list')

/* har lavet et event der lytter efter "click" som derefter toggler navul aktiv */
burger.addEventListener('click', () => {
    navUL.classList.toggle('active')
})

