import React from "react";

const ClassInfo = (props) => {
	return (
		<section>
			<h2>Class Information</h2>
			<ul>
				<li>Name: Lions</li>
				<li>Number of members: {props.memberCount} </li>
			</ul>
		</section>
	);
};

export default ClassInfo;
