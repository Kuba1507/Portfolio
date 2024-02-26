const burgerBtn = document.querySelector(".burger-btn");
const navigation = document.querySelector(".nav");
const navItems = document.querySelectorAll(".nav__item");

const handleNav = () => {
	navigation.classList.toggle("show-nav");

	navItems.forEach((item) => {
		item.classList.toggle("show-nav-items");
	});
};

burgerBtn.addEventListener("click", handleNav);
