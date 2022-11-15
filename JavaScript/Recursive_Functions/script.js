// DOM Elements
const inputText = document.querySelectorAll(".input-text");
const inputButton = document.querySelectorAll(".input-button");

let total = 0;
function sumUp(num) {
	if (num === 1) {
		alert(++total);
	}
	total += num;
	sumUp(num - 1);
}

inputButton[0].addEventListener("click", (e) => {
	e.preventDefault();
	sumUp(parseInt(inputText.value));
});
