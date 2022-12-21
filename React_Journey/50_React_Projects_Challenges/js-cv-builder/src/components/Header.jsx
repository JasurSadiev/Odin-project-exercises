import React, { useState, useEffect } from "react";

const Header = () => {
	const [items, setItems] = useState({});
	useEffect(() => {
		const items = JSON.parse(localStorage.getItem("userInfo"));
		if (items) {
			setItems(items);
		}
	}, []);

	return (
		<div>
			<figure className='figure'>
				<img src={items.imgLink} alt='profile_image' className='ready_img' />
				<figcaption className='figcaption'>
					<h2 className='ready_fullName'>
						{items.firstName + " " + items.lastName}
					</h2>
					<h4 className='ready_position'>{items.position}</h4>
				</figcaption>
			</figure>
			<hr className='hr' />
		</div>
	);
};

export default Header;
