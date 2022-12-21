import React, { useEffect, useState } from "react";
import Phone from "../img/phone.png";
import Email from "../img/mail.png";
import Github from "../img/github.png";
import LinkedIn from "../img/linkedin.png";
import Address from "../img/address.png";

const ContactConstructor = () => {
	const [items, setItems] = useState({});

	function isEmpty(obj) {
		return Object.keys(obj).length === 0;
	}

	useEffect(() => {
		const items = window.localStorage.getItem("userContacts");
		if (!isEmpty(items)) {
			setItems(JSON.parse(items));
		}
	}, []);

	useEffect(() => {
		if (!isEmpty(items)) {
			window.localStorage.setItem("userContacts", JSON.stringify(items));
		} else {
			console.log("Local Storage is Empty!");
		}
	}, [items]);

	const handleSubmit = (e) => {
		e.preventDefault();
		let education = {};
		const phone = e.target.phone.value;
		const mail = e.target.email.value;
		const github = e.target.github.value;
		const linkedIn = e.target.linkedIn.value;
		const address = e.target.address.value;
		education = {
			phone,
			mail,
			github,
			linkedIn,
			address,
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
				<h1 className='heading1'>Your Contact Details</h1>
				<div className='phone'>
					<label htmlFor='phone'>
						<img src={Phone} alt='phone' className='icons' />
					</label>
					<input
						type='tel'
						id='phone'
						className='borderless'
						placeholder='Phone Number...'
					/>
				</div>
				<div className='phone'>
					<label htmlFor='email'>
						<img src={Email} alt='email' className='icons' />
					</label>
					<input
						type='email'
						id='email'
						className='borderless'
						placeholder='Email Address...'
					/>
				</div>
				<div className='phone'>
					<label htmlFor='github'>
						<img src={Github} alt='github' className='icons' />
					</label>
					<input
						type='text'
						id='github'
						className='borderless'
						placeholder='Github Account...'
					/>
				</div>
				<div className='phone'>
					<label htmlFor='linkedIn'>
						<img src={LinkedIn} alt='linkedIn' className='icons' />
					</label>
					<input
						type='text'
						id='linkedIn'
						className='borderless'
						placeholder='LinkedIn Account...'
					/>
				</div>
				<div className='phone'>
					<label htmlFor='address'>
						<img src={Address} alt='address' className='icons' />
					</label>
					<input
						type='text'
						id='address'
						className='borderless'
						placeholder='Address Details...'
					/>
				</div>
				<button type='submit' className='submitBtn'>
					Save
				</button>
			</form>
		</div>
	);
};

export default ContactConstructor;
