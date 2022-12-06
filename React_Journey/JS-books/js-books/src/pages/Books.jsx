import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Books = () => {
	const [books, setBooks] = useState([]);
	useEffect(() => {
		const fetchAllBooks = async () => {
			try {
				const res = await axios.get("http://localhost:8800/books");
				setBooks(res.data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchAllBooks();
	}, []);
	return (
		<div>
			<h1>JS BookShop</h1>
			<div className='books'>
				{books.map((book) => (
					<div className='book' key={book.id}>
						{book.cover && <img src={book.cover} alt={book.title} />}
						<h2>{book.title}</h2>
						<p>{book.desc}</p>
						<span>{book.price}</span>
					</div>
				))}
			</div>
			<button>
				<Link to='/add'>Add new book</Link>
			</button>
		</div>
	);
};

export default Books;
