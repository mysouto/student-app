import React from "react";
import PropTypes from "prop-types";

import "./StudentList.css";

// importing Student presentational component
import Student from "./Student";

const StudentList = ({ studentData, onUpdateStudent }) => {
	const componentClass = "student-list";

	// StudentList receives student data in a prop named students and
	// passes student data info into each Student component
	const studentComponents = studentData.map((student) => {
		return (
			<li key={student.id}>
				<Student
					id={student.id}
					name={student.nameData}
					email={student.emailData}
					isPresent={student.isPresentData}
					onUpdateStudent={onUpdateStudent}
				></Student>
			</li>
		);
	});

	return (
		<div>
			<h2 className="student-list__heading">Student List</h2>
			<ul className={componentClass}>{studentComponents}</ul>
		</div>
	);
};

StudentList.propTypes = {
	students: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			nameData: PropTypes.string.isRequired,
			emailData: PropTypes.string.isRequired,
			isPresentData: PropTypes.bool,
		})
	),
	onUpdateStudent: PropTypes.func.isRequired,
};

// const StudentList = () => {
//   const headingClass = 'student-list__heading';
//   const listClass = 'student-list';

//   return (
//       <section>
//           <h2 className={headingClass}>Student List</h2>
//           <ul className={listClass}>
//               <li>Student A</li>
//               <li>Student B</li>
//               <li>Student C</li>
//           </ul>
//       </section>
//   )
// }

export default StudentList;
