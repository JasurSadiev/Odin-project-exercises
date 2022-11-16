// DOM Elements
const inputText1 = document.getElementsByClassName("input-text");
const inputButton1 = document.getElementsByClassName("input-button");
const screen = document.querySelector("#screen");

// SumUp function
function sumUp(num) {
	if (num <= 1) {
		return num;
	}
	return num + sumUp(num - 1);
}

function powerUp(base, exponent) {
	if (exponent <= 0) {
		return 1;
	}
	return base * powerUp(base, exponent - 1);
}

// Get Factorial
function getFactorial(int) {
	if (int <= 1) {
		return 1;
	}
	return int * getFactorial(int - 1);
}

// Getting Sum of Array
function getProduct(arr) {
	if (arr.length === 0) return 1;
	return parseInt(arr.shift()) * getProduct(arr);
}

// Event Listeners
inputButton1[0].addEventListener("click", (e) => {
	e.preventDefault();
	screen.textContent = `Answer: sumRange(${inputText1[0].value}): ${sumUp(
		parseInt(inputText1[0].value)
	)}`;
	// console.log(inputText1[1]);
});

inputButton1[1].addEventListener("click", (e) => {
	e.preventDefault();
	var exp = inputText1[1].value[2];
	var bas = inputText1[1].value[0];
	screen.textContent = `Answer: powerUp(${bas}, ${exp}): ${powerUp(
		parseInt(inputText1[1].value[0]),
		parseInt(inputText1[1].value[2])
	)}`;
});

inputButton1[2].addEventListener("click", (e) => {
	e.preventDefault();
	screen.textContent = `Answer: Get factorial(${
		inputText1[2].value
	}): ${getFactorial(parseInt(inputText1[2].value))}`;
});

inputButton1[3].addEventListener("click", (e) => {
	let arr1 = inputText1[3].value.split(",");
	let arr2 = inputText1[3].value.replaceAll(" ", ",");
	console.log(arr2[1]);
	let arr = [];
	for (let i = 0; i < arr1.length; i++) {
		if (arr1[i]) {
			arr.push(parseInt(arr1[i]));
		}
	}
	screen.textContent = `Answer: Get product(${
		inputText1[3].value
	}): ${getProduct(arr)}`;
});
