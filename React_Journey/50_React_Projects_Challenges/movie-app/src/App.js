import React, { useEffect } from "react";
import "./App.css";

const API_URL = "http://www.omdbapi.com?apikey=3a68e8a2";
const App = () => {
	const searchMovies = async (title) => {
		const response = await fetch(`${API_URL}&s=${title}`);
		const data = await response.json();

		console.log(data);
	};
	useEffect(() => {
		searchMovies("After");
	}, []);
	return <div className="App"></div>;
};

export default App;
