import React from "react";

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

	return (
		<ul>
			<li>Nickname: {props.name}</li>
			<li>Email: {props.email} </li>
		</ul>
	);
};

export default Student;
