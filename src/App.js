import NewStudentForm from "./components/NewStudentForm";
import React,{useState} from "react";
import Table from './components/Table';

const studentsData = [];

function App() {
  const [studentsDatas,setStudentsDatas]=useState(studentsData)
  const addStudentsData = (data) =>
  {
    setStudentsDatas((prevState)=>{
      return[data,...studentsDatas];
    });
  };

  const onDelete = (props) => {
    const newList = studentsDatas.filter((item) => item.rollNo !== props.rollNo);
    setStudentsDatas((prevState)=>{
      return(newList);
    });
  };

  return (
    <div>
      <NewStudentForm name={''} year={''} dept={''} rollNo={''} studentsData={addStudentsData}/>
      <Table data={studentsDatas} onDelete={onDelete}/>
    </div>
  );
}

export default App;
