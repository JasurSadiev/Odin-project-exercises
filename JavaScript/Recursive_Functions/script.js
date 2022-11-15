// DOM Elements
const inputText = document.getElementsByClassName("input-text");
const inputButton = document.getElementsByClassName("input-button");

let total = 0;

function sumUp(num) {
	// console.log(num);
	if (num <= 0) {
		return total;
	}
	total += num;
	num--;
	return sumUp(num);
}

inputButton[0].addEventListener("click", (e) => {
	e.preventDefault();
	console.log(sumUp(parseInt(inputText[0].value)));
	total = 0;
});
