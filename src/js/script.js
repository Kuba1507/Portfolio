const body = document.querySelector("body");
const header = document.querySelector(".header");
const burgerBtn = document.querySelector(".hamburger");
const navigation = document.querySelector(".nav");
const navList = document.querySelector(".nav__menu");
const navItems = document.querySelectorAll(".nav__menu-item-link");
const contactSection = document.querySelector(".contact");
const portfolioSection = document.querySelector(".portfolio");
const portfolioWebsites = document.querySelectorAll(".portfolio-box__website");

const mazex = document.querySelector(".mazex");

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
	body.classList.remove("block-scroll");

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

const scrollToContact = () => {
	if (contactSection) {
		contactSection.scrollIntoView({ behavior: "smooth" });
	}
};

const scrollToPortfolio = () => {
	if (portfolioSection) {
		portfolioSection.scrollIntoView({ behavior: "smooth" });
	}
};

const blockScroll = () => {
	body.classList.toggle("block-scroll");
};

const handlePortfolioWebsites = () => {
	const windowWidth = window.innerWidth || document.documentElement.clientWidth;
	const windowHeight =
		window.innerHeight || document.documentElement.clientHeight;
	const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	const halfWindowHeight = windowHeight / 2;

	if (windowWidth <= 710) {
		let activeWebsite = null;

		portfolioWebsites.forEach((website) => {
			const rect = website.getBoundingClientRect();
			const elementTopPosition = rect.top;

			if (elementTopPosition <= halfWindowHeight) {
				activeWebsite = website;
			}
		});

		portfolioWebsites.forEach((website) => {
			if (website === activeWebsite) {
				website.classList.add("hover");
			} else {
				website.classList.remove("hover");
			}
		});
	} else {
		portfolioWebsites.forEach((website) => {
			website.classList.remove("hover");
		});
	}
};

const openNewTab = (url) => {
	window.open(url, "_blank");
};

mazex.addEventListener("click", () => {
	openNewTab("https://mazex-hds.pl/");
});

burgerBtn.addEventListener("click", handleNav);
window.addEventListener("scroll", handleHeaderShadow);
navItems.forEach((item) => {
	item.addEventListener("click", closeNav);
});
window.addEventListener("load", handlePortfolioWebsites);
window.addEventListener("scroll", handlePortfolioWebsites);
window.addEventListener("resize", handlePortfolioWebsites);
