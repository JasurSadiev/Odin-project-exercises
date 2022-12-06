import express from "express";
import mysql from "mysql";

const app = express();

const db = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "password",
	database: "test",
	// insecureAuth: true,
});

app.use(express.json());
app.get("/", (req, res) => {
	res.json("Hello this is the backend!");
});

app.get("/books", (req, res) => {
	const q = "SELECT * FROM books";
	db.query(q, (err, data) => {
		if (err) return res.json(err);
		return res.json(data);
	});
});

app.post("/books", (req, res) => {
	const q = "INSERT INTO books (`title`, `desc`, `cover`) VALUES (?)";
	const values = ["Alibaba", "Bestselling Book", "alibaba.png"];

	db.query(q, [values], (err, data) => {
		if (err) return res.json(err);
		return res.json(data);
	});
});

app.listen(8800, () => {
	console.log("connected...");
});
