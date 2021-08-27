import React,{useState} from "react";
import UpdateForm from './UpdateForm'

function TableData(props){
//     const [name,setName]=useState(props.name);
//     const [rollNo,setrollNo]=useState(props.rollNo);
//     const [dept,setDept]=useState(props.dept);
//     const [year,setYear]=useState(props.year);
    const[inputTyped,setInputTyped]=useState({
        nameTyped:props.name,
        rollNoTyped:props.rollNo,
        deptTyped:props.dept,
        yearTyped:props.year
    });
    const onEditClick = (data) =>
    {
        // setName(data.name);
        // setrollNo(data.rollNo);
        // setDept(data.dept);
        // setYear(data.year);
        setInputTyped({  
                rollNoTyped: data.rollNo,
                nameTyped:data.name,
                yearTyped:data.year,
                deptTyped:data.dept
        });
    }
    const onDeleteClick = () =>
    {
        const rollNo=inputTyped.rollNoTyped;
        props.onDeleteClick({rollNo});
        console.log(rollNo);
    }
    
    return(
       <tr>
           <td>{inputTyped.nameTyped}</td>
           <td>{inputTyped.rollNoTyped}</td>
           <td>{inputTyped.deptTyped}</td>
           <td>{inputTyped.yearTyped}</td>
           <td><UpdateForm oldName={inputTyped.nameTyped} oldRollNo={inputTyped.rollNoTyped} oldDept={inputTyped.deptTyped} oldYear={inputTyped.yearTyped} onEdit={onEditClick}/></td>
           <input type="button" value="Delete" onClick={onDeleteClick}/>
       </tr>
    );
}

export default TableData;