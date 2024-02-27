const body = document.querySelector("body");
const burgerBtn = document.querySelector(".hamburger");
const navigation = document.querySelector(".nav");
const navList = document.querySelector(".nav__menu");
const navItems = document.querySelectorAll(".nav__menu-item-link");

const handleNav = () => {
	burgerBtn.classList.toggle("is-active");
	navigation.classList.toggle("show-nav");

	handleNavItemsAnimation();
	blockScroll();
};

const handleNavItemsAnimation = () => {
	let delayTime = 0;

	navItems.forEach((item) => {
		item.classList.toggle("nav-items-animation");
		item.style.animationDelay = "." + delayTime + "s";
		delayTime++;
	});

	navigation.classList.toggle("navigation-shadow");
};

const blockScroll = () => {
	body.classList.add("block-scroll");
};

burgerBtn.addEventListener("click", handleNav);
