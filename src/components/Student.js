import React from "react";
import PropTypes from "prop-types";

import "./Student.css";

// const Student = () => {
// 	return (
// 		<ul>
// 			<li>Nickname: Ada</li>
// 			<li>Email: ada@dev.org</li>
// 		</ul>
// 	);
// };

const Student = ({ name, email, id, isPresent, onUpdateStudent }) => {
	// logic below moved to App
	// const [isPresent, setIsPresent] = useState(false);
	// const togglePresence = () => {
	// 	setIsPresent(!isPresent);
	// };

	const updateAttendenceButtonClick = () => {
		// onUpdateStudent(id);
		const updatedStudent = {
			id: id,
			emailData: email,
			nameData: name,
			isPresentData: !isPresent,
		};
		console.log(`Updating Attendence for ${name}`);

		// Invoke the function passed in through the prop named "onUpdateStudent"
		// This function is referenced by the name "updateStudent" in App
		onUpdateStudent(updatedStudent);
	};

	const updateColor = isPresent ? "green" : "red";

	return (
		<div>
			<ul>
				<li className={updateColor}>Nickname: {name}</li>
				<li>Email: {email} </li>
			</ul>
			{/* <button onClick={togglePresence}>Toggle if {props.name} is present</button> */}
			<button onClick={updateAttendenceButtonClick}>
				Toggle if {name} is present
			</button>
		</div>
	);
};

Student.propTypes = {
	id: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	email: PropTypes.string.isRequired,
	isPresent: PropTypes.bool,
	onUpdateStudent: PropTypes.func.isRequired,
};

export default Student;
