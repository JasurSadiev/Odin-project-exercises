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

// Getting Fibonachchi Numbers
function getFibonachi(n) {
	if (n == 0) return [0];
	if (n == 1) return [0, 1];
	const arr = getFibonachi(n - 1);
	return [...arr, arr[n - 1] + arr[n - 2]];
}

// Merge Sort
function getSortedArray(arr) {
	const mergeSortRec = (arr) => {
		if (arr.length === 0) return "Please provide a non empty array!";
		if (arr.length === 1) return arr;

		const mid = Math.floor(arr.length / 2);
		const left = arr.slice(0, mid);
		const right = arr.slice(mid, arr.length);

		return merge(mergeSortRec(left), mergeSortRec(right));
	};

	const merge = (leftArr, rightArr) => {
		//To merge the both incoming arrays
		const result = new Array();

		let iL = 0;
		let iR = 0;

		while (iL < leftArr.length && iR < rightArr.length) {
			if (leftArr[iL] < rightArr[iR]) {
				result.push(leftArr[iL]);
				iL++;
			} else {
				result.push(rightArr[iR]);
				iR++;
			}
		}

		while (iL < leftArr.length) {
			result.push(leftArr[iL]);
			iL++;
		}

		while (iR < rightArr.length) {
			result.push(rightArr[iR]);
			iR++;
		}
		// console.log(result);

		return result;
	};
	return mergeSortRec(arr);
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
	// let arr2 = inputText1[3].value.replaceAll(" ", ",");
	// console.log(arr2[1]);
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

inputButton1[4].addEventListener("click", () => {
	screen.textContent = `Answer: getFibonachi(${
		inputText1[4].value
	}): ${getFibonachi(parseInt(inputText1[4].value))}`;
});

inputButton1[5].addEventListener("click", () => {
	let arr1 = inputText1[5].value.split(",");
	// console.log(arr1);
	let arr = [];
	for (let i = 0; i < arr1.length; i++) {
		if (arr1[i]) {
			arr.push(parseInt(arr1[i]));
		}
	}
	screen.textContent = `Given array = [${arr1}]\n\nSorted array = [${getSortedArray(
		arr
	)}]`;
});
