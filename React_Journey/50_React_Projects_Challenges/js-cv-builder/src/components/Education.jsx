import React, { useState, useEffect } from "react";

const Education = () => {
	const [items, setItems] = useState({});
	const [date, setDate] = useState({});
	let fullDate = "";
	useEffect(() => {
		const items = JSON.parse(localStorage.getItem("educational"));
		if (items) {
			setItems(items);
		}
	}, []);

	return (
		<div className='section_wrapper'>
			<h2 className='section_title'>EDUCATION</h2>
			<div className='education_details'>
				<span className='education_year'>{items.date}</span>
				<strong>{items.degree}</strong>
				<span className='education_name'>{items.uName}</span>
			</div>
		</div>
	);
};

export default Education;
