import "./App.css";
import StudentList from "./components/StudentList";
import ClassInfo from "./components/ClassInfo";

const studentData = [
	{
		nameData: "Ada",
		emailData: "ada@dev.org",
	},
	{
		nameData: "Soo-ah",
		emailData: "sooah@dev.org",
	},
	{
		nameData: "Chrissy",
		emailData: "chrissy@dev.org",
	},
	{
		nameData: "Milena",
		emailData: "ada@dev.org",
	},
];

function App() {
	const name = "C18";
	// const studentList = <StudentList />;
	return (
		<div className="App">
			<header className="App-header">
				<h1> {name} Attendance</h1>
			</header>
			<main>
				<StudentList studentData={studentData}></StudentList>
				{/* Here's the first rendered student list: */}
				{/* {studentList} */}

				{/* rending more than 1 component */}
				{/* Here's the second rendered student list:
        <StudentList></StudentList> */}

				{/* a 2nd component */}
				<ClassInfo memberCount={studentData.length}></ClassInfo>
			</main>
		</div>
	);
}

export default App;
