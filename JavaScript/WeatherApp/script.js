// DOM Elements
const searchBtn = document.querySelector("#searchBtn");
const input = document.querySelector("#input");
const cityName = document.querySelector("#cityName");
const temperature = document.querySelector("#temperature");
const feels = document.querySelector("#feels");
const humidity = document.querySelector("#humidity");
const wind = document.querySelector("#wind");
const main = document.querySelector("#main");
const weatherCondition = document.querySelector("#weatherCondition");
const tempBtn = document.querySelector("#tempBtn");
const celcius = document.querySelector("#celcius");
const fahranheit = document.querySelector("#faranheit");
const tempInfo = document.querySelector("#temp_info");
const feelsInfo = document.querySelector("#feels_info");
const humidityInfo = document.querySelector("#humidity_info");
const windInfo = document.querySelector("#wind_info");
const tempUnit = document.querySelector("#tempUnit");
const feelsUnit = document.querySelector("#feelsUnit");
const loadingScreen = document.querySelector("#loader_div");
const container = document.querySelector("#container");
const form = document.querySelector("form");
const searchField = document.querySelector("#search-field");
// const main = document.querySelector("#main");

// Request and Fetching Data from API
async function getData(city = "Khujand", unit = "metric") {
	const response = await fetch(
		`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=786b6639c80d8c3478048d4c7a7e21e4`
	);
	const data = await response.json();
	console.log(data);
	main.classList.add("animation1");
	updateCard(data);
	updateBackground(data);
	updateWeatherStatus(data);
	setUpConvert();
	return data;
}

// Getting City name
function getCity() {
	if (input.value) {
		temperature.value = "";
		// getData(input.value);
		getData(input.value);
	}
}

// loading screen animation
const timerId = setTimeout(() => {
	removeLoading();
}, 5000);

// remove loading screen
function removeLoading() {
	loadingScreen.style.display = "none";
	container.style.display = "flex";
}

// Loading Content
document.addEventListener("DOMContentLoaded", () => {
	getData("Khorugh");
	timerId;
});

// Updating Card information
function updateCard(data) {
	cityName.textContent = `${data.name}`;
	tempInfo.textContent = `${data.main.temp}`;
	feelsInfo.textContent = `${data.main.feels_like}`;
	humidityInfo.textContent = `${data.main.humidity}`;
	windInfo.textContent = `${data.wind.speed}`;
	tempUnit.textContent = "°C";
	feelsUnit.textContent = "°C";
}

// Setting up Convert button
function setUpConvert() {
	celcius.style.fontWeight = "600";
	fahranheit.style.fontWeight = "500";
	tempBtn.classList.add("leftSwitch");
	tempBtn.classList.remove("rightSwitch");
}

// Updating background image depending on weither
function updateBackground(data) {
	if (data.weather[0].id >= 200 && data.weather[0].id < 300) {
		main.style.background =
			"url(./images/200.jpg) no-repeat center center/cover";
	} else if (data.weather[0].id >= 300 && data.weather[0].id < 500) {
		main.style.background =
			"url(./images/drizzle.jpg) no-repeat center center/cover";
	} else if (data.weather[0].id >= 500 && data.weather[0].id < 600) {
		main.style.background =
			"url(./images/rainy.jpg) no-repeat center center/cover";
	} else if (data.weather[0].id >= 600 && data.weather[0].id < 700) {
		main.style.background =
			"url(./images/snow.jpg) no-repeat center center/cover";
	} else if (data.weather[0].id >= 700 && data.weather[0].id < 800) {
		main.style.background =
			"url(./images/mist.jpg) no-repeat center center/cover";
	} else if (data.weather[0].id >= 800 && data.weather[0].id < 900) {
		main.style.background =
			"url(./images/sunny.jpg) no-repeat center center/cover";
	} else {
		main.style.background =
			"url(./images/cloudy3.jpg) no-repeat center center/cover";
	}
}

// Updating weather status icon
function updateWeatherStatus(data) {
	weatherCondition.src = ` http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
}

// Converting Celcuis to Faranheit
function celToFar() {
	const str = `"${tempUnit.innerHTML}"`;
	// console.log(str.includes("F"), str);
	console.log(str);
	if (str.includes("C")) {
		console.log(tempInfo.innerHTML);
		celcius.style.fontWeight = "500";
		tempBtn.classList.remove("leftSwitch");
		const fahranheitTemp = parseFloat(tempInfo.innerHTML) / 1.8 + 32;
		const fahranheitFeels = parseFloat(feelsInfo.innerHTML) / 1.8 + 32;
		tempInfo.textContent = `${fahranheitTemp.toFixed(2)}`;
		tempUnit.textContent = "°F";
		feelsInfo.textContent = `${fahranheitFeels.toFixed(2)}`;
		feelsUnit.textContent = "°F";
		fahranheit.style.fontWeight = "600";
		tempBtn.classList.add("rightSwitch");
	} else if (str.includes("F")) {
		fahranheit.style.fontWeight = "500";
		tempBtn.classList.remove("rightSwitch");
		const fahranheitTemp = (parseFloat(tempInfo.innerHTML) - 32) * 1.8;
		const fahranheitFeels = (parseFloat(feelsInfo.innerHTML) - 32) * 1.8;
		tempInfo.textContent = `${fahranheitTemp.toFixed(2)}`;
		tempUnit.textContent = "°C";
		feelsInfo.textContent = `${fahranheitFeels.toFixed(2)}`;
		feelsUnit.textContent = "°C";
		celcius.style.fontWeight = "600";
		tempBtn.classList.add("leftSwitch");
	}
}

// Event Listeners
form.addEventListener("submit", (e) => {
	e.preventDefault();
	console.log(main.classList);
	main.classList.remove("animation1");
	getCity();
});

tempBtn.addEventListener("click", (e) => {
	// if (e.target)
	// console.log(e.target);
	celToFar();
});
document.querySelector("#input").autofocus = true;
