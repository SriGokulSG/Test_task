import './NewStudentForm.css';
import React,{useState} from 'react';

function NewStudentForm(props){
    
    const[nameTyped,setNameTyped]=useState(props.name);
    const[rollNoTyped,setRollNoTyped]=useState(props.rollNo);
    const[deptTyped,setDeptTyped]=useState(props.dept);
    const[yearTyped,setYearTyped]=useState(props.year);

    const nameChangeHandler = (event) =>{
        setNameTyped(event.target.value);
    };
    const rollNoChangeHandler = (event) =>{
        setRollNoTyped(event.target.value);
    };
    const deptChangeHandler = (event) =>{
        setDeptTyped(event.target.value);
    };
    const yearChangeHandler = (event) =>{
        setYearTyped(event.target.value);
    };

    const onSubmitHandler = (event) =>{
        event.preventDefault();
        const studentData={
            key:rollNoTyped,
            name:nameTyped,
            rollNo:rollNoTyped,
            dept:deptTyped,
            year:yearTyped
        };
        setNameTyped('');
        setYearTyped('');
        setDeptTyped('');
        setRollNoTyped('');
        props.studentsData(studentData);
    };
    
    return(
        <div>
            <form onSubmit={onSubmitHandler}>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Name</label>
                        <input type="text" value={nameTyped} onChange={nameChangeHandler}/>
                    </div>
                    <div className="new-expense__control">
                        <label>Roll Number</label>
                        <input type="text" value={rollNoTyped} onChange={rollNoChangeHandler}/>
                    </div>
                    <div className="new-expense__control">
                        <label>Department</label>
                        <input type="text" value={deptTyped} onChange={deptChangeHandler}/>
                    </div>
                    <div className="new-expense__control">
                        <label>Year</label>
                        <input type="text" value={yearTyped} onChange={yearChangeHandler}/>
                    </div>
                    <div className='new-expense_actions'>
                        <button type='submit'>Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default NewStudentForm;