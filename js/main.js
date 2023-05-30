const body = document.querySelector('body')
const burger = document.querySelector('.header__burger')
const menu = document.querySelector('.header__menu')
const menuLinks = document.querySelectorAll('.header__menu a')

burger.addEventListener('click', () => {
    menu.classList.toggle('active')
    body.classList.toggle('no-scroll')
})

const removeActive = () => {
    menu.classList.remove('active')
    body.classList.remove('no-scroll')
}

