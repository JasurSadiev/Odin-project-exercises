function createHeader() {
	const header = document.createElement("header");
	const restaurantName = document.createElement("h1");
	restaurantName.textContent = "JS Cafee";
	restaurantName.classList.add("restaurantTitle");
	header.appendChild(restaurantName);
	header.appendChild(createNav());

	return header;
}

function createNav() {
	const nav = document.createElement("nav");

	const homeBtn = document.createElement("button");
	homeBtn.classList.add("nav-btns");
	homeBtn.textContent = "Home";

	const menuBtn = document.createElement("button");
	menuBtn.classList.add("nav-btns");
	menuBtn.textContent = "Menu";

	const contactBtn = document.createElement("button");
	contactBtn.classList.add("nav-btns");
	contactBtn.textContent = "Contact";

	nav.appendChild(homeBtn);
	nav.appendChild(menuBtn);
	nav.appendChild(contactBtn);

	return nav;
}

export function initializeWebsite() {
	const content = document.getElementById("content");
	content.appendChild(createHeader());
}
