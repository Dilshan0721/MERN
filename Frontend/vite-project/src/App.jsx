import { useEffect } from "react";
import { useState } from "react";
import Form from "./component/Form";

function App() {

const [studentData, setStudent] = useState([]);

 async function getStudent() {
    const data = await fetch("http://localhost:3000/student");

    const student = await data.json();
    setStudent(student);
    
  }

  console.log(studentData);

  useEffect(() => {
    getStudent();
  }, []);

  return (
    <>
      <div>
        <h1>Student</h1>
        {
          studentData.map((student) => {
            return (
            <li>{student.id}-{student.name}-{student.age}</li>
          );
          })
        }
      </div>
      <Form />
    </>
  );
}

export default App;
