const body = document.querySelector("body");
const header = document.querySelector(".header");
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

const closeNav = () => {
	burgerBtn.classList.remove("is-active");
	navigation.classList.remove("show-nav");
	navigation.classList.remove("navigation-shadow");

	navItems.forEach((item) => {
		item.classList.remove("nav-items-animation");
	});
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

const handleHeaderShadow = () => {
	if (window.scrollY >= 50) {
		header.classList.add("header-shadow");
	} else {
		header.classList.remove("header-shadow");
	}
};

const blockScroll = () => {
	body.classList.toggle("block-scroll");
};

burgerBtn.addEventListener("click", handleNav);
window.addEventListener("scroll", handleHeaderShadow);
navItems.forEach((item) => {
	item.addEventListener("click", closeNav);
});
