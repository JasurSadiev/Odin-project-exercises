import axios from "axios";

export function generateJoke() {
	const config = {
		headers: {
			Accept: "application/json",
		},
	};

	axios.get("https://icanhazdadjoke.com", config).then((res) => {
		document.getElementById("joke").innerHTML = res.data.joke;
	});
}
