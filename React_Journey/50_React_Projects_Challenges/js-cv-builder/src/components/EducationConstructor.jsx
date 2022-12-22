import React, { useEffect, useState } from "react";

const EducationConstructor = () => {
	const [items, setItems] = useState({});

	function isEmpty(obj) {
		return Object.keys(obj).length === 0;
	}

	useEffect(() => {
		const items = window.localStorage.getItem("educational");
		if (!isEmpty(items)) {
			setItems(JSON.parse(items));
		}
	}, []);

	useEffect(() => {
		if (!isEmpty(items)) {
			window.localStorage.setItem("educational", JSON.stringify(items));
		} else {
			console.log("Local Storage is Empty!");
		}
	}, [items]);

	const handleSubmit = (e) => {
		e.preventDefault();
		let startDate = e.target.date.value;
		let endDate = e.target.end_date.value;
		let fullDate = `${startDate.split("-")[0]}-${endDate.split("-")[0]}`;
		let education = {};
		const date = fullDate;
		const uName = e.target.u_name.value;
		const degree = e.target.u_degree.value;
		education = {
			date,
			uName,
			degree,
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
				<h1 className='heading1'>Your Education Details</h1>
				<div className='phone'>
					<label htmlFor='date'> Start Year</label>
					<input
						type='date'
						id='date'
						className='borderless'
						placeholder='Start Year...'
					/>
				</div>

				<div className='phone'>
					<label htmlFor='end_date'> End Year</label>
					<input
						type='date'
						id='end_date'
						className='borderless'
						placeholder='End Year...'
					/>
				</div>

				<div className='phone'>
					<label htmlFor='u_name'> University</label>
					<input
						type='text'
						id='u_name'
						className='borderless'
						placeholder='University Name'
						name='u_name'
					/>
				</div>

				<div className='phone'>
					<label htmlFor='u_degree'> Degree </label>
					<input
						type='text'
						id='u_degree'
						className='borderless'
						placeholder='Degree Name'
					/>
				</div>

				<button type='submit' className='submitBtn'>
					Save
				</button>
			</form>
		</div>
	);
};

export default EducationConstructor;
