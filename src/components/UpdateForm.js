import React, { useState } from "react";
import NewStudentForm from "./NewStudentForm";
import "./UpdateForm.css";

import Modal from "react-modal";

Modal.setAppElement("#root");

function UpdateForm(props) {
  const [isOpen, setIsOpen] = useState(false);
  function toggleModal() {
    setIsOpen(!isOpen);
  }

  const onEditHandler = (data) =>{
      const updatedData = {
          name:data.nameTyped,
          rollNo:data.rollNoTyped,
          dept:data.deptTyped,
          year:data.yearTyped
      };
      console.log(updatedData);
      props.onEdit(updatedData);
      setIsOpen(false);
  };

  return (
    <div className="App">
      <button onClick={toggleModal}>Edit</button>

      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
      > 
        <div><NewStudentForm name={props.oldName} year={props.oldYear} rollNo={props.oldRollNo} dept={props.oldDept} studentsData={onEditHandler}/></div>
        <button onClick={toggleModal}>Close modal</button>
      </Modal>
    </div>
  );
}

export default UpdateForm;