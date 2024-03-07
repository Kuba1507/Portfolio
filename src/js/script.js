const body = document.querySelector("body");
const header = document.querySelector(".header");
const burgerBtn = document.querySelector(".hamburger");
const navigation = document.querySelector(".nav");
const navList = document.querySelector(".nav__menu");
const navItems = document.querySelectorAll(".nav__menu-item-link");
const facebookBtn = document.querySelectorAll(".facebook-btn");
const instagramBtn = document.querySelectorAll(".instagram-btn");
const contactSection = document.querySelector(".contact");
const portfolioSection = document.querySelector(".portfolio");
const portfolioWebsites = document.querySelectorAll(".portfolio-box__website");
const msgStatus = document.querySelector(".msg-status");

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

const toFacebook = () => {
	window.location.href = "https://www.facebook.com/kuba.romanski.54";
};

const toInstagram = () => {
	window.location.href =
		"https://www.instagram.com/kubaromanskiwebdev?igsh=MmFlaWl3cjE3SNHNj";
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

const handleForm = () => {
	if (document.location.search === "?mail_status=sent") {
		msgStatus.classList.add("success");
		msgStatus.textContent = "Wiadomość wysłana!";

		setTimeout(() => {
			msgStatus.classList.remove("success");
		}, 3000);
	}

	if (document.location.search === "?mail_status=error") {
		msgStatus.classList.add("error");
		msgStatus.textContent = "Wystąpił błąd.";

		setTimeout(() => {
			msgStatus.classList.remove("error");
		}, 3000);
	}
};

const openNewTab = (url) => {
	window.open(url, "_blank");
};

const mazex = document.querySelector(".mazex");
const rafservis = document.querySelector(".rafservis");
const telegrafcity = document.querySelector(".telegrafcity");
const pytlikbud = document.querySelector(".pytlikbud");
const glamcar = document.querySelector(".glamcar");
const hairdresser = document.querySelector(".hairdresser");
const budmar = document.querySelector(".budmar");
const teraphist = document.querySelector(".teraphist");

mazex.addEventListener("click", () => {
	openNewTab("https://mazex-hds.pl/");
});
rafservis.addEventListener("click", () => {
	openNewTab("https://rafservis.pl/");
});
telegrafcity.addEventListener("click", () => {
	openNewTab("https://telegrafcity.pl/");
});
pytlikbud.addEventListener("click", () => {
	openNewTab("https://pytlik-bud.de/");
});
glamcar.addEventListener("click", () => {
	openNewTab("https://kuba1507.github.io/BootstrapFinal/");
});
hairdresser.addEventListener("click", () => {
	openNewTab("https://kuba1507.github.io/Hairdresser/");
});
budmar.addEventListener("click", () => {
	openNewTab("https://kuba1507.github.io/Handyman/");
});
teraphist.addEventListener("click", () => {
	openNewTab("https://kuba1507.github.io/Therapist/");
});

burgerBtn.addEventListener("click", handleNav);
window.addEventListener("scroll", handleHeaderShadow);
navItems.forEach((item) => {
	item.addEventListener("click", closeNav);
});
facebookBtn.forEach((btn) => {
	btn.addEventListener("click", toFacebook);
});
instagramBtn.forEach((btn) => {
	btn.addEventListener("click", toInstagram);
});
window.addEventListener("load", handlePortfolioWebsites);
window.addEventListener("scroll", handlePortfolioWebsites);
window.addEventListener("resize", handlePortfolioWebsites);
