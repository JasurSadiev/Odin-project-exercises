// DOM Elements
const inputText1 = document.getElementsByClassName("input-text");
const inputButton1 = document.getElementsByClassName("input-button");
const screen = document.querySelector("#screen");
let total = 1;

// SumUp function
function sumUp(num) {
	// console.log(num);
	if (num <= 1) {
		return total;
	}
	total += num;
	num--;
	return sumUp(num);
}

// PowerUp function
function powerUp(base, exponent) {
	if (exponent <= 0) {
		return total;
	}
	total = total * base;
	exponent--;
	return powerUp(base, exponent);
}

// Get Factorial
function getFactorial(int) {
	if (int <= 1) {
		return 1;
	} else {
		return int * getFactorial(int - 1);
	}
}

// Event Listeners
inputButton1[0].addEventListener("click", (e) => {
	e.preventDefault();
	screen.textContent = `Answer: sumRange(${inputText1[0].value}): ${sumUp(
		parseInt(inputText1[0].value)
	)}`;
	// console.log(inputText1[1]);
	total = 1;
});

inputButton1[1].addEventListener("click", (e) => {
	e.preventDefault();
	var exp = inputText1[1].value[2];
	var bas = inputText1[1].value[0];
	screen.textContent = `Answer: powerUp(${bas}, ${exp}): ${powerUp(
		parseInt(inputText1[1].value[0]),
		parseInt(inputText1[1].value[2])
	)}`;
	total = 1;
});

inputButton1[2].addEventListener("click", (e) => {
	e.preventDefault();
	screen.textContent = `Answer: Get factorial(${
		inputText1[2].value
	}): ${getFactorial(parseInt(inputText1[2].value))}`;
});
