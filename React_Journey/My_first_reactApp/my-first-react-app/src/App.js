import React from "react";
import "./App.css";

function App() {
	function formateName(obj) {
		return obj.firstName + " " + obj.lastName;
	}

	const user = {
		firstName: "Jasurbek",
		lastName: "Sadiev",
	};
	return (
		<div className="App">
			<h1>Hello, {formateName(user)}!</h1>
		</div>
	);
}

export default App;
