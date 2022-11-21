const form = document.querySelector("form");
const formControls = document.querySelectorAll(".form-control");
const td = document.querySelectorAll("td");
const submitBtn = document.querySelector("#submitBtn");
const selectInput = document.querySelector("select");

function alphanumeric(inputtxt, int) {
	var letterNumber = /^[0-9a-zA-Z]+$/;
	if (inputtxt.value.match(letterNumber)) {
		td[int].textContent = inputtxt.value;
		return true;
	} else {
		inputtxt.style.border = "2px solid red";
		console.log("message");
		return false;
	}
}

function numeric(inputNum, int) {
	var letterNumber = /^\d+$/;
	if (inputNum.value.match(letterNumber)) {
		td[int].textContent = inputNum.value;
		return true;
	} else {
		inputNum.style.border = "2px solid red";
		return false;
	}
}

function displayRadioValue(inputRadio, int) {
	var ele = document.getElementsByName(inputRadio);

	for (i = 0; i < ele.length; i++) {
		if (ele[i].checked) td[int].textContent = ele[i].value;
	}
	return true;
}

function displayCheckBoxValue(inputRadio, int) {
	var ele = document.getElementsByName(inputRadio);
	if (ele[0].checked && ele[1].checked) {
		td[int].textContent = `${ele[0].value} / ${ele[1].value}`;
	} else {
		for (i = 0; i < ele.length; i++) {
			if (ele[i].checked) td[int].textContent = ele[i].value;
		}
	}
	return true;
}

function nonEmpty(inputAny, int) {
	if (inputAny.value) {
		td[int].textContent = inputAny.value;
		return true;
	} else {
		inputAny.style.border = "2px solid red";
		return false;
	}
}

form.addEventListener("submit", (e) => {
	e.preventDefault();
	console.log(formControls[0].value);
	if (
		alphanumeric(formControls[0], 0) &&
		alphanumeric(formControls[2], 1) &&
		numeric(formControls[4], 4) &&
		nonEmpty(formControls[3], 2) &&
		nonEmpty(selectInput, 3) &&
		nonEmpty(formControls[5], 5) &&
		displayRadioValue("radio1", 6) &&
		displayCheckBoxValue("language", 7)
	) {
		updateTable();
	}
});

function updateTable() {
	document.getElementById("data").style.visibility = "visible";
}
