import React from 'react';
import uuid from 'react-uuid';
import newForm from './assets/images/new-form.png';
import "./FormButton.css"

const FormButton = () => {
    function createForm(){
        const id = uuid();
        console.log(id);
    };
  return (
    <div className="new_form" onClick={createForm}>
        <span>Create new form</span>
        <img src={newForm} alt="new form" />
    </div>
  )
}

export default FormButton;