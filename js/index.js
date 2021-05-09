const navSlide = () => {
	const burger = document.querySelector(".nav--burger");
	const nav = document.querySelector(".nav__list");
	const navLinks = document.querySelectorAll(".nav__list li");

	burger.addEventListener("click", () => {
		//Toggle Nav
		nav.classList.toggle("nav--bar-active");

		//Animate Links
		navLinks.forEach((link, index) => {
			if (link.style.animation) {
				link.style.animation = "";
			} else {
				link.style.animation = `navLinkFade 0.5s ease forwards ${
					index / 7 + 0.5
				}s`;
			}
		});
		//Burger Animation
		burger.classList.toggle("toggle");
	});
};

navSlide();
