import React, { useEffect, useState } from "react";

const EducationConstructor = () => {
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
