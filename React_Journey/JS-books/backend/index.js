import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();

const db = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "password",
	database: "test",
	// insecureAuth: true,
});

app.use(express.json());
app.use(cors());

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
	const q = "INSERT INTO books (`title`, `desc`, `price`, `cover`) VALUES (?)";
	const values = [
		req.body.title,
		req.body.desc,
		req.body.price,
		req.body.cover,
	];

	db.query(q, [values], (err, data) => {
		if (err) return res.json(err);
		return res.json(data);
	});
});

app.listen(8800, () => {
	console.log("connected...");
});
