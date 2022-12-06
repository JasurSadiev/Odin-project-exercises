import React from "react";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Write = () => {
	const [value, setValue] = useState("");
	console.log(value);
	return (
		<div className='add'>
			<div className='content'>
				<input type='text' placeholder='Title' />
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
					/>
					<label htmlFor='file' className='file'>
						Upload Image
					</label>
					<div className='buttons'>
						<button>Save as a draft</button>
						<button>Update</button>
					</div>
				</div>
				<div className='item'>
					<h1>Category</h1>
					<div className='cat'>
						<input type='radio' name='cat' id='art' value='art' />
						<label htmlFor='art'>Art</label>
					</div>
					<div className='cat'>
						<input type='radio' name='cat' id='science' value='science' />
						<label htmlFor='science'>Science</label>
					</div>
					<div className='cat'>
						<input type='radio' name='cat' id='technology' value='technology' />
						<label htmlFor='technology'>Technology</label>
					</div>
					<div className='cat'>
						<input type='radio' name='cat' id='Cinema' value='Cinema' />
						<label htmlFor='Cinema'>Cinema</label>
					</div>
					<div className='cat'>
						<input type='radio' name='cat' id='Design' value='Design' />
						<label htmlFor='Design'>Design</label>
					</div>
					<div className='cat'>
						<input type='radio' name='cat' id='food' value='food' />
						<label htmlFor='food'>Food</label>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Write;
