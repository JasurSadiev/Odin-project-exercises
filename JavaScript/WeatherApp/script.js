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

// Request and Fetching Data from API
async function getData(city = "Khujand") {
	const response = await fetch(
		`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=786b6639c80d8c3478048d4c7a7e21e4`
	);
	const data = await response.json();
	console.log(data);
	tempBtn.addEventListener("click", () => {
		celToFar(data);
	});
	updateCard(data);
	updateBackground(data);
	updateWeatherStatus(data);
	// returnData(data);
	return data;
}

// Getting City name
function getCity() {
	if (input.value) {
		// getData(input.value);
		getData(input.value);
	}
	return;
}

// Updating Card information
function updateCard(data) {
	cityName.textContent = `${data.name}`;
	temperature.textContent = `${data.main.temp} °C`;
	feels.textContent = `Feels like: ${data.main.feels_like} °C`;
	humidity.textContent = `Humidity: ${data.main.humidity}%`;
	wind.textContent = `Wind: ${data.wind.speed} km/h`;
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
function celToFar(data) {
	const str = `"${temperature.innerHTML}"`;
	console.log(str.includes("F"), str);
	if (str.includes("C")) {
		celcius.style.fontWeight = "500";
		let fahranheitTemp = data.main.temp * 1.8 + 32;
		let fahranheitFeels = data.main.feels_like * 1.8 + 32;
		temperature.textContent = `${fahranheitTemp.toFixed(2)} °F`;
		feels.textContent = `Feels like: ${fahranheitFeels.toFixed(2)} °F`;
		fahranheit.style.fontWeight = "600";
	} else {
		fahranheit.style.fontWeight = "500";
		updateCard(data);
		celcius.style.fontWeight = "600";
	}
}

// Event Listeners
searchBtn.addEventListener("click", (e) => {
	e.preventDefault();
	getCity();
});
