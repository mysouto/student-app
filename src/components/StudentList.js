import React from "react";
import './StudentList.css';

// const StudentList = () => {
// 	return <h2>Student List</h2>;
// };

const StudentList = () => {
    return (
      <div>
        <h2 className="student-list__heading">Student List</h2>
        <ul className="student-list">
          <li>Student A</li>
          <li>Student B</li>
          <li>Student C</li>
        </ul>
      </div>

    );
}

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
