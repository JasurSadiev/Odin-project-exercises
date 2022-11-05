const email = document.getElementById("mail");
const emailError = document.querySelector("#mail + span.error");
const form = document.querySelector("form");
email.addEventListener("input", (e) => {
	if (email.validity.valid) {
		emailError.textContent = "";
		emailError.className = "error";
	} else {
		showError();
	}
});

form.addEventListener("submit", (e) => {
	if (!email.validity.valid) {
		showError();
		e.preventDefault();
	}
});

function showError() {
	if (email.validity.valueMissing) {
		emailError.textContent = "You need to enter an email address.";
	} else if (email.validity.typeMismatch) {
		emailError.textContent = "Entered value needs to be an email address.";
	} else if (email.validity.tooShort) {
		emailError.textContent =
			"Email should be at least 10 characters; you entered " +
			email.value.length +
			".";
	}

	emailError.className = "error active";
}
