function createMenu() {
	const menu = document.createElement("div");
	menu.classList.add("menu");

	menu.appendChild(
		createMenuItem("Bubble", "Ice cream, banana, bubble gum syrup", "jpg")
	);

	menu.appendChild(
		createMenuItem("Capuchino", "Ice cream, banana, bubble gum syrup", "png")
	);

	menu.appendChild(
		createMenuItem("Latty", "Ice cream, banana, bubble gum syrup", "png")
	);

	menu.appendChild(
		createMenuItem("Juice", "Ice cream, banana, bubble gum syrup", "png")
	);

	menu.appendChild(
		createMenuItem("Baklava", "Ice cream, banana, bubble gum syrup", "jpg")
	);

	menu.appendChild(
		createMenuItem("CheeseCake", "Ice cream, banana, bubble gum syrup", "jpg")
	);

	menu.appendChild(
		createMenuItem("Medovik", "Ice cream, banana, bubble gum syrup", "jpg")
	);

	menu.appendChild(
		createMenuItem("Tiramisu", "Ice cream, banana, bubble gum syrup", "png")
	);
	return menu;
}

function createMenuItem(name, description, ext) {
	const menuItem = document.createElement("div");
	menuItem.classList.add("menu-item");

	const foodName = document.createElement("h2");
	foodName.textContent = name;

	const foodDescription = document.createElement("p");
	foodDescription.textContent = description;

	const foodImage = document.createElement("img");
	foodImage.src = `images/menu/${name.toLowerCase()}.${ext}`;
	foodImage.alt = `${name}`;

	menuItem.appendChild(foodImage);
	menuItem.appendChild(foodName);
	menuItem.appendChild(foodDescription);

	return menuItem;
}

export function loadMenu() {
	const main = document.getElementById("main");
	main.textContent = "";
	main.appendChild(createMenu());
}
