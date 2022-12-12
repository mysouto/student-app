import './App.css';
import StudentList from './components/StudentList';
import ClassInfo from './components/ClassInfo';

function App() {
  const name = 'C18';
  const studentList = <StudentList/>;
  return (
    <div className='App'>
      <header className='App-header'>
        <h1> {name} Attendance</h1>
      </header>
      <main>
        {/* Here's the first rendered student list: */}
        {studentList}

        {/* rending more than 1 component */}
        {/* Here's the second rendered student list:
        <StudentList></StudentList> */}

        {/* a 2nd component */}
        <ClassInfo></ClassInfo>
      </main>
    </div>
  );
}

export default App;
