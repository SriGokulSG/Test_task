import React,{useState} from "react";
import UpdateForm from './UpdateForm'

function TableData(props){
    const [name,setName]=useState(props.name);
    const [rollNo,setrollNo]=useState(props.rollNo);
    const [dept,setDept]=useState(props.dept);
    const [year,setYear]=useState(props.year);
    const onEditClick = (data) =>
    {
        setName(data.name);
        setrollNo(data.rollNo);
        setDept(data.dept);
        setYear(data.year);
    }

    const onDeleteClick = () =>
    {
        props.onDeleteClick({rollNo});
    }
    
    return(
       <tr>
           <td>{name}</td>
           <td>{rollNo}</td>
           <td>{dept}</td>
           <td>{year}</td>
           <td><UpdateForm oldName={name} oldRollNo={rollNo} oldDept={dept} oldYear={year} onEdit={onEditClick}/></td>
           <input type="button" value="Delete" onClick={onDeleteClick}/>
       </tr>
    );
}

export default TableData;