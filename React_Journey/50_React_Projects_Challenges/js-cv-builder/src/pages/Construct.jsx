import React from "react";
import NameConstructor from "../components/NameConstructor";
import ContactConstructor from "../components/ContactConstructor";
import EducationConstructor from "../components/EducationConstructor";

const Construct = () => {
	return (
		<div className='wrapper'>
			{/* <NameConstructor /> */}
			<ContactConstructor />
			{/* <EducationConstructor /> */}
		</div>
	);
};

export default Construct;
