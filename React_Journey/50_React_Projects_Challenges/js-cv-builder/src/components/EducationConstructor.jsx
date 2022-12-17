import React from "react";

const EducationConstructor = () => {
	return (
		<div className='constructor'>
			<div className='name'>
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
			</div>
		</div>
	);
};

export default EducationConstructor;
