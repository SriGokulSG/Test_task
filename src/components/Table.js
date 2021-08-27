import TableData from './TableData';
import './Table.css'
import Card from './Card';
function Table(props){

    const onDeleteClick = (data) =>{
        const rollNo=data.rollNo;
        console.log(rollNo);
        props.onDelete({rollNo});
    }

    return(
        <Card>
        <table id="students">
            <tr>
                <th>Name</th>
                <th>Roll Number</th>
                <th>Department</th>
                <th>Year</th>
                <th></th>
                <th></th>
            </tr>
            {props.data.map((item)=>(<TableData key={item.key} name={item.nameTyped} rollNo={item.rollNoTyped} dept={item.deptTyped} year={item.yearTyped} onDeleteClick={onDeleteClick}/>))}
        </table>
        </Card>
    );
}

export default Table;