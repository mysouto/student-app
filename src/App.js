import "./App.css";
import { useState } from "react";

import StudentList from "./components/StudentList";
// import ClassInfo from "./components/ClassInfo";
// import Post from "./components/Post";

function App() {
	const name = "C18";
	// const studentList = <StudentList />;

	const [studentData, setStudentData] = useState([
		{
			id: 1,
			nameData: "Ada",
			emailData: "ada@dev.org",
			isPresentData: false,
		},
		{
			id: 2,
			nameData: "Soo-ah",
			emailData: "sooah@dev.org",
			isPresentData: false,
		},
		{
			id: 3,
			nameData: "Chrissy",
			emailData: "chrissy@dev.org",
			isPresentData: true,
		},
	]);

	// update student, pass in student object
	const updateStudent = (studentToUpdate) => {
		// students is a new array
		const students = studentData.map((student) => {
			if (student.id === studentToUpdate.id) {
				// student.isPresent = !student.isPresent;
				return studentToUpdate;
			}
			return student;
		});

		// use state update function to update new students array
		setStudentData(students);
	};

	return (
		<div className="App">
			<header className="App-header">
				<h1> {name} Attendance</h1>
			</header>
			<main>
				<StudentList
					studentData={studentData}
					onUpdateStudent={updateStudent}
				></StudentList>

				{/* a 2nd component */}
				{/* <ClassInfo memberCount={studentData.length}></ClassInfo> */}

				{/* <Post /> */}
				{/* <Post /> */}
			</main>
		</div>
	);
}

export default App;
