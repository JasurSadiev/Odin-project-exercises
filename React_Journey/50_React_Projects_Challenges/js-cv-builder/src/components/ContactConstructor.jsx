import React from "react";
import Phone from "../img/phone.png";
import Email from "../img/mail.png";
import Github from "../img/github.png";
import LinkedIn from "../img/linkedin.png";
import Address from "../img/address.png";

const ContactConstructor = () => {
	return (
		<div className='constructor'>
			<div className='name'>
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
			</div>
		</div>
	);
};

export default ContactConstructor;
