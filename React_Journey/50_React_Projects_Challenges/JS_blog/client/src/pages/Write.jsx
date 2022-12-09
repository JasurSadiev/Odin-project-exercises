import React from "react";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment";

const Write = () => {
	const state = useLocation().state;
	const [value, setValue] = useState(state?.desc || "");
	const [title, setTitle] = useState(state?.title || "");
	const [file, setFile] = useState(null);
	const [cat, setCat] = useState(state?.cat || "");
	const navigate = useNavigate();

	const upload = async e => {
		// e.preventDefault();
		try {
			const formData = new FormData();
			formData.append("file", file);
			const res = await axios.post("/upload", formData);
			return res.data;
		} catch (error) {
			console.log(error);
		}
	}

	const handleSubmit = async e => {
		const imgUrl = await upload();
		e.preventDefault();
		try {
			state 
				? await axios.put(`/posts/${state.id}`, {
					title,
					desc: value,
					cat,
					img: file ? imgUrl : "",
				})
				: await axios.post(`/posts/`, {
					title,
					desc:value,
					cat,
					img: file ? imgUrl : "",
					date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss")
				});
				navigate("/")
		} catch (error) {
			console.log(error);
		}
	}
	return (
		<div className='add'>
			<div className='content'>
				<input type='text' placeholder='Title' onChange={e => setTitle(e.target.value)}/>
				<div className='editorContainer'>
					<ReactQuill
						className='editor'
						theme='snow'
						value={value}
						onChange={setValue}
					/>
				</div>
			</div>
			<div className='menu'>
				<div className='item'>
					<h1>Publish</h1>
					<span>
						<b>Status: </b>Draft
					</span>
					<span>
						<b>Visibility: </b>Public
					</span>
					<input
						type='file'
						name='file'
						id='file'
						style={{ display: "none" }}
						onChange = {e => setFile(e.target.files[0])}
					/>
					<label htmlFor='file' className='file'>
						Upload Image
					</label>
					<div className='buttons'>
						<button>Save as a draft</button>
						<button onClick={handleSubmit}>Publish</button>
					</div>
				</div>
				<div className='item'>
					<h1>Category</h1>
					<div className='cat'>
						<input type='radio' checked={cat === "art"} name='cat' id='art' value='art' onChange = {e => setCat(e.target.value)}/>
						<label htmlFor='art'>Art</label>
					</div>
					<div className='cat'>
						<input type='radio' checked={cat === "science"} name='cat' id='science' value='science' onChange = {e => setCat(e.target.value)}/>
						<label htmlFor='science'>Science</label>
					</div>
					<div className='cat'>
						<input type='radio' checked={cat === "technology"} name='cat' id='technology' value='technology' onChange = {e => setCat(e.target.value)}/>
						<label htmlFor='technology'>Technology</label>
					</div>
					<div className='cat'>
						<input type='radio' checked={cat === "cinema"} name='cat' id='cinema' value='cinema' onChange = {e => setCat(e.target.value)}/>
						<label htmlFor='Cinema'>Cinema</label>
					</div>
					<div className='cat'>
						<input type='radio' checked={cat === "design"} name='cat' id='design' value='design' onChange = {e => setCat(e.target.value)}/>
						<label htmlFor='Design'>Design</label>
					</div>
					<div className='cat'>
						<input type='radio' checked={cat === "food"} name='cat' id='food' value='food' onChange = {e => setCat(e.target.value)}/>
						<label htmlFor='food'>Food</label>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Write;
