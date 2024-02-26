const burgerBtn = document.querySelector('.hamburger')
const navigation = document.querySelector('.nav')
const navItems = document.querySelectorAll('.nav__item')

const handleNav = () => {
	burgerBtn.classList.toggle('is-active')
}

burgerBtn.addEventListener('click', handleNav)
