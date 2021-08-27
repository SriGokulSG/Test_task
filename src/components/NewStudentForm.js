import './NewStudentForm.css';
import React,{useState} from 'react';
import Card from './Card';
function NewStudentForm(props){
    const[inputTyped,setInputTyped]=useState({
        nameTyped:props.name,
        rollNoTyped:props.rollNo,
        deptTyped:props.dept,
        yearTyped:props.year
    });
    // const[nameTyped,setNameTyped]=useState(props.name);
    // const[rollNoTyped,setRollNoTyped]=useState(props.rollNo);
    // const[deptTyped,setDeptTyped]=useState(props.dept);
    // const[yearTyped,setYearTyped]=useState(props.year);

    const nameChangeHandler = (event) =>{
        setInputTyped((prevState)=>{
            return {...prevState , nameTyped: event.target.value }
        });
    };
    const rollNoChangeHandler = (event) =>{
        setInputTyped((prevState)=>{
            return {...prevState , rollNoTyped: event.target.value }
        });
    };
    const deptChangeHandler = (event) =>{
        setInputTyped((prevState)=>{
            return {...prevState , deptTyped: event.target.value }
        });
    };
    const yearChangeHandler = (event) =>{
        setInputTyped((prevState)=>{
            return {...prevState , yearTyped: event.target.value }
        });
    };

    const onSubmitHandler = (event) =>{
        event.preventDefault();
        const studentData={
            ...inputTyped,
            key:inputTyped.rollNoTyped
        };
        // setNameTyped('');
        // setYearTyped('');
        // setDeptTyped('');
        // setRollNoTyped('');
        setInputTyped({
            nameTyped:'',
            rollNoTyped:'',
            deptTyped:'',
            yearTyped:''
        });
        props.studentsData(studentData);
    };
    
    return(
        <Card>
            <form onSubmit={onSubmitHandler}>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Name</label>
                        <input type="text" value={inputTyped.nameTyped} onChange={nameChangeHandler}/>
                    </div>
                    <div className="new-expense__control">
                        <label>Roll Number</label>
                        <input type="text" value={inputTyped.rollNoTyped} onChange={rollNoChangeHandler}/>
                    </div>
                    <div className="new-expense__control">
                        <label>Department</label>
                        <input type="text" value={inputTyped.deptTyped} onChange={deptChangeHandler}/>
                    </div>
                    <div className="new-expense__control">
                        <label>Year</label>
                        <input type="text" value={inputTyped.yearTyped} onChange={yearChangeHandler}/>
                    </div>
                    <div>
                        <button type='submit' className='button'>Submit</button>
                    </div>
                </div>
            </form>
        </Card>
    );
}

export default NewStudentForm;