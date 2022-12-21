import React, { useEffect, useState } from "react";

function isEmpty(obj) {
	return Object.keys(obj).length === 0;
}

const NameConstructor = () => {
	const [items, setItems] = useState({});

	useEffect(() => {
		const items = window.localStorage.getItem("userInfo");
		if (!isEmpty(items)) {
			setItems(JSON.parse(items));
		}
	}, []);

	useEffect(() => {
		if (!isEmpty(items)) {
			window.localStorage.setItem("userInfo", JSON.stringify(items));
		} else {
			console.log("Local Storage is Empty!");
		}
	}, [items]);

	const handleSubmit = (e) => {
		e.preventDefault();
		let education = {};
		const imgLink = e.target.imgLink.value;
		const firstName = e.target.firstName.value;
		const lastName = e.target.lastName.value;
		const position = e.target.position.value;
		education = {
			imgLink,
			firstName,
			lastName,
			position,
		};
		setItems(education);
		// 	e.target.imgLink.value = "";
		// 	e.target.firstName.value = "";
		// 	e.target.lastName.value = "";
		// 	e.target.position.value = "";
	};

	return (
		<div className='constructor'>
			<form className='name' onSubmit={handleSubmit}>
				<h1 className='header1'>How can employers contact you?</h1>
				<div className='img'>
					{/* <p>
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
					</p> */}

					{/* <p>
						<img id='output' alt='img' />
					</p> */}
					<input
						type='text'
						placeholder='Link for profile image...'
						className='borderless inputLink'
						id='imgLink'
					/>
				</div>
				<div className='fullName'>
					<input
						type='text'
						placeholder='First Name'
						className='borderless'
						id='firstName'
					/>
					<input
						type='text'
						placeholder='Last Name'
						className='borderless'
						id='lastName'
					/>
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
			</form>
		</div>
	);
};

export default NameConstructor;
