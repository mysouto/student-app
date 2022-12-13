import React from "react";
import "./StudentList.css";
// importing Student presentational component
import Student from "./Student";

// const StudentList = () => {
// 	return <h2>Student List</h2>;
// };


const StudentList = (props) => {
	const componentClass = "student-list";

	const studentComponents = props.studentData.map((student) => {
		return (
			<li key={student.emailData}>
				<Student name={student.nameData} email={student.emailData} />
			</li>
		);
	});

	return (
		<div>
			<h2 className="student-list__heading">Student List</h2>
			<ul className={componentClass}>
				{studentComponents}
				{/* <li>Student A</li>
				<li>Student B</li>
				<li>Student C</li> */}
				{/* <li>
					<Student name="Milena" email="ada@dev.org" />
				</li>
				<li>
					<Student name="Coopi" email="ada@dev.org" />
				</li> */}
				{/* <li> */}
				{/* undefined component below */}
				{/* <Student /> */}
				{/* </li> */}
			</ul>
		</div>
	);
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
