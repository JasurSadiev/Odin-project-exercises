import express from "express";
import mysql from "mysql";

const app = express();

const db = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "qwerty1234",
	database: "test",
});

app.get("/", (req, res) => {
	res.json("Hello this is the backend!");
});

app.listen(8800, () => {
	console.log("connected...");
});
