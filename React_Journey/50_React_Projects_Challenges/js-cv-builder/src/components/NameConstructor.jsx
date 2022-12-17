import React, { useEffect, useState } from "react";

const NameConstructor = () => {
	const [items, setItems] = useState({});

	useEffect(() => {
		localStorage.setItem("educational", JSON.stringify(items));
	}, [items]);

	useEffect(() => {
		const items = JSON.parse(localStorage.getItem("educational"));
		if (items) {
			setItems(items);
		}
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		let education = {};
		const uName = e.target.u_name.value;
		const uDegree = e.target.u_degree.value;
		const date = e.target.date.value;
		const endDate = e.target.end_date.value;
		education = {
			uName,
			uDegree,
			date,
			endDate,
		};
		setItems(education);
	};

	const handleImgFile = (e) => {
		const image = document.getElementById("output");
		const label = document.getElementById("img__label");
		image.src = URL.createObjectURL(e.target.files[0]);
		image.style.display = "block";
		label.classList.add("img__label");
	};

	return (
		<div className='constructor'>
			<div className='name'>
				<h1 className='header1'>How can employers contact you?</h1>
				<div className='img'>
					<p>
						<input
							type='file'
							accept='image/*'
							name='image'
							id='file'
							onChange={handleImgFile}
						/>
					</p>
					<p>
						<label for='file' id='img__label'>
							Select Image
						</label>
					</p>
					<p>
						<img id='output' alt='img' />
					</p>
				</div>
				<div className='fullName'>
					<input type='text' placeholder='First Name' className='borderless' />
					<input type='text' placeholder='Last Name' className='borderless' />
				</div>
				<input
					type='text'
					placeholder='Your Position'
					className='borderless'
					id='position'
				/>
				{/* <input
						type='tel'
						name='tel'
						id='tel'
						className='borderless'
						placeholder='Phone Number'
					/> */}
				<button type='submit' className='submitBtn'>
					Save
				</button>
			</div>
		</div>
	);
};

export default NameConstructor;
