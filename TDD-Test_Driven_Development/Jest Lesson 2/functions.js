const axios = require("axios");

const functions = {
	add: (num1, num2) => num1 + num2,
	isNull: () => null,
	checkValue: (x) => x,
	createUser: () => {
		const user = { firstName: "Brad" };
		user["lastName"] = "Traversy";
		return user;
	},
	fetchUser: () =>
		axios
			.get("https://jsonplaceholder.typicode.com/users/")
			.then((res) => res.data)
			.catch((err) => err),
};
module.exports = functions;
