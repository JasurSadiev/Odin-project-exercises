function createHome() {
	const home = document.createElement("div");
	home.classList.add("home");

	const chefImage = document.createElement("img");
	chefImage.src = "./images/chef.png";
	chefImage.alt = "chef.png";

	home.appendChild(createParagraph("Best Cafe in your Country"));
	home.appendChild(createParagraph("Made with passion since 2022"));
	home.appendChild(chefImage);
	home.appendChild(createParagraph("Order online or Visit us!"));

	return home;
}

function createParagraph(text) {
	const paragraph = document.createElement("p");
	paragraph.textContent = text;
	return paragraph;
}

export function loadHome() {
	const main = document.getElementById("main");
	main.textContent = "";
	main.appendChild(createHome());
}
