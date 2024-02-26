const burgerBtn = document.querySelector('.hamburger')
const navigation = document.querySelector('.nav')
const navList = document.querySelector('.nav__menu')

const handleNav = () => {
	burgerBtn.classList.toggle('is-active')
	navigation.classList.toggle('show-nav')
	// navList.classList.toggle('show-menu')
}

burgerBtn.addEventListener('click', handleNav)
