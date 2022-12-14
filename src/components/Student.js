import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

import "./Student.css";

// const Student = () => {
// 	return (
// 		<ul>
// 			<li>Nickname: Ada</li>
// 			<li>Email: ada@dev.org</li>
// 		</ul>
// 	);
// };

const Student = (props) => {
	// console.log(props);

	const [isPresent, setIsPresent] = useState(false);

	const togglePresence = () => {
		setIsPresent(!isPresent);
	};

	const updateColor = isPresent ? "green" : "red";

	return (
		<div>
			<ul>
				<li className={updateColor}>Nickname: {props.name}</li>
				<li>Email: {props.email} </li>
			</ul>
			<button onClick={togglePresence}>
				Toggle if {props.name} is present
			</button>
		</div>
	);
};

Student.propTypes = {
	name: PropTypes.string.isRequired,
	email: PropTypes.string.isRequired,
};

export default Student;
