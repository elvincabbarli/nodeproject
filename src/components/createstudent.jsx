// CreateStudent Component for add new student

// Import Modules
import React, { useState, useEffect } from "react";
import axios from "axios";
import StudentForm from "./studentform";
// ES6 Modules or TypeScript
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";

// CommonJS
//  let Swal = require('sweetalert2')

// CreateStudent Component
const CreateStudent = () => {
  const navigate = useNavigate()
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    rollno: "",
  });
  // onSubmit handler
  const onSubmit = (studentObject) => {
    axios
      .post("https://nodeproject75.vercel.app/students", studentObject)
      .then((res) => {
        if (res.status === 200){
          Swal.fire({
            title: 'Success!',
            text: 'Student Added Successfully',
            icon: 'success',
            confirmButtonText: 'OK',
          }).then(function(isConfirm) {
            if (isConfirm) {
              window.location.reload();
            } else {
              //if no clicked => do something else
            }
          });
        }
        else Promise.reject();
      })
      .catch((err) => console.log(err));
  };

  // Return student form
  return (
    <StudentForm
      initialValues={formValues}
      onSubmit={onSubmit}
      enableReinitialize
    >
      Create Student
    </StudentForm>
  );
};

// Export CreateStudent Component
export default CreateStudent;
