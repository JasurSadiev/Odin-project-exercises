function createHeader() {
	const header = document.createElement("header");
	const restaurantName = document.createElement("h1");
	restaurantName.textContent = "JS Cafee";
	restaurantName.classList.add("restaurantTitle");
	header.appendChild(restaurantName);
	header.appendChild(createNav());

	return header;
}

import { loadHome } from "./home";
function createNav() {
	const nav = document.createElement("nav");

	const homeBtn = document.createElement("button");
	homeBtn.classList.add("nav-btns");
	homeBtn.textContent = "Home";
	homeBtn.addEventListener("click", (e) => {
		if (e.target.classList.contains("active")) return;
		setActiveButton(homeBtn);
		loadHome();
	});

	const menuBtn = document.createElement("button");
	menuBtn.classList.add("nav-btns");
	menuBtn.textContent = "Menu";
	menuBtn.addEventListener("click", (e) => {
		if (e.target.classList.contains("active")) return;
		setActiveButton(menuBtn);
	});

	const contactBtn = document.createElement("button");
	contactBtn.classList.add("nav-btns");
	contactBtn.textContent = "Contact";
	contactBtn.addEventListener("click", (e) => {
		if (e.target.classList.contains("active")) return;
		setActiveButton(contactBtn);
	});

	nav.appendChild(homeBtn);
	nav.appendChild(menuBtn);
	nav.appendChild(contactBtn);

	return nav;
}

function setActiveButton(button1) {
	const buttons = document.querySelectorAll(".nav-btns");
	buttons.forEach((button) => {
		// console.log(button);
		if (button !== button1) {
			button.classList.remove("active");
		}
	});

	button1.classList.add("active");
}

function createMain() {
	const main = document.createElement("main");
	main.classList.add("main");
	main.setAttribute("id", "main");
	return main;
}

export function initializeWebsite() {
	const content = document.getElementById("content");
	content.appendChild(createHeader());
	content.appendChild(createMain());
}
