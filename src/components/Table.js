import TableData from './TableData';
import './Table.css'
function Table(props){

    const onDeleteClick = (data) =>{
        const rollNo=data.rollNo;
        props.onDelete({rollNo});
    }

    return(
        <div>
        <table id="students">
            <tr>
                <th>Name</th>
                <th>Roll Number</th>
                <th>Department</th>
                <th>Year</th>
                <th></th>
                <th></th>
            </tr>
            {props.data.map((item)=>(<TableData key={item.key} name={item.name} rollNo={item.rollNo} dept={item.dept} year={item.year} onDeleteClick={onDeleteClick}/>))}
        </table>
        </div>
    );
}

export default Table;