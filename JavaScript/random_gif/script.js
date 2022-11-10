const img = document.querySelector("img");
const button = document.querySelector("#button");
// function displayGif() {
// 	fetch(
// 		"https://api.giphy.com/v1/gifs/translate?api_key=8pM558k3lIVq1BEZV2OiRlCUTrDDPcUs&s=cats",
// 		{
// 			mode: "cors",
// 		}
// 	)
// 		.then(function (response) {
// 			return response.json();
// 		})
// 		.then(function (response) {
// 			img.src = "";
// 			console.log(response.data.images.original.url);
// 			img.src = response.data.images.original.url;
// 		});
// }

button.addEventListener("click", async () => {
	try {
		let response = await fetch(
			"https://api.giphy.com/v1/gifs/translate?api_key=8pM558k3lIVq1BEZV2OiRlCUTrDDPcUs&s=animals",
			{
				mode: "cors",
			}
		);

		let data = await response.json();
		img.src = data.data.images.original.url;
	} catch (error) {
		console.log(error.message);
		alert(error);
	}
});
