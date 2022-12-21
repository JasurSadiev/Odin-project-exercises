import React, { useState, useEffect } from "react";
import phone from "../img/phone.png";
import address from "../img/address.png";
import linkedin from "../img/linkedin.png";
import mail from "../img/mail.png";
import github from "../img/github.png";

const Contact = () => {
	const [items, setItems] = useState({});
	useEffect(() => {
		const items = JSON.parse(localStorage.getItem("userContacts"));
		if (items) {
			setItems(items);
		}
	}, []);

	const userName = items.github.split("/");

	return (
		<div className='contact_wrapper'>
			<h2 className='section_title'>CONTACT INFO</h2>
			<figure className='contact_figure1'>
				<img src={phone} alt='phone_icon' className='contact_icon1' />
				<figcaption className='contact_figcaption1'>
					<a href={`tel:${items.phone}`}>{items.phone}</a>
				</figcaption>
			</figure>

			<figure className='contact_figure'>
				<img src={mail} alt='mail_icon' className='contact_icons' />
				<figcaption className='contact_figcaption'>
					<a href={`mailto:${items.mail}`}>{items.mail}</a>
				</figcaption>
			</figure>

			<figure className='contact_figure'>
				<img src={github} alt='github_icon' className='contact_icons' />
				<figcaption className='contact_figcaption'>
					<a href={items.github}>Github: {userName[3]}</a>
				</figcaption>
			</figure>

			<figure className='contact_figure'>
				<img src={linkedin} alt='linkedIn_icon' className='contact_icons' />
				<figcaption className='contact_figcaption'>
					<a href={items.linkedIn}>LinkedIn {userName[3]}</a>
				</figcaption>
			</figure>

			<figure className='contact_figure'>
				<img src={address} alt='address_icon' className='contact_icons' />
				<figcaption className='contact_figcaption'>
					<address>{items.address}</address>
				</figcaption>
			</figure>
		</div>
	);
};

export default Contact;
