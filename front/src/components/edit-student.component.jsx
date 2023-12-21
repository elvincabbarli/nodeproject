// Import Modules
import React, { useState, useEffect } from "react";
import axios from "axios";
import StudentForm from "./studentform";
import { useNavigate, useParams } from "react-router-dom";

// EditStudent Component
const EditStudent = (props) => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    rollno: "",
  });

  const { id } = useParams();

  // console.log(id);

  //onSubmit handler
  const onSubmit = (studentObject) => {
    axios
      .put("https://nodeproject-75.onrender.com/update-student/" + id, studentObject)
      .then((res) => {
        if (res.status === 200) {
          alert("Student successfully updated");
          //   props.history.push("/student-list");
          navigate("/student-list");
        } else Promise.reject();
      })
      .catch((err) => console.log(err));
  };

  // Load data from server and reinitialize student form
  useEffect(() => {
    axios
      .get("https://nodeproject-75.onrender.com/students/" + id)
      .then((res) => {
        const { name, email, rollno } = res.data;
        setFormValues({ name, email, rollno });
      })
      .catch((err) => console.log(err));
  });

  // Return student form
  return (
    <StudentForm
      initialValues={formValues}
      onSubmit={onSubmit}
      enableReinitialize
    >
      Update Student
    </StudentForm>
  );
};

// Export EditStudent Component
export default EditStudent;
