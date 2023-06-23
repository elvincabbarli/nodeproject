import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from 'sweetalert2'
import student from '../assets/student.jpg'

const StudentTableRow = (props) => {
	const { _id, name, email, rollno } = props.obj;

	const deleteStudent = () => {
		axios
			.delete(
				"https://nodeproject-75.onrender.com/students/" + _id)
			.then((res) => {
				if (res.status === 200) {
					Swal.fire({
						title: 'Success!',
						text: 'Student Deleted',
						icon: 'success',
						confirmButtonText: 'OK'
					  }).then(function(isConfirm) {
						if (isConfirm) {
						  window.location.reload();
						} else {
						  //if no clicked => do something else
						}
					  });
				} else Promise.reject();
			})
			.catch((err) => alert("Something went wrong"));
	};

	return (
	<div>
		<div className="card" >
			<img src={student} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">Name: {name}</h5>
				<h6 className="card-text">Email: {email}</h6>
				<h6 className="card-text">No: {rollno}</h6>
				<div className="card-btns">
					<Link to={"/edit-student/" + _id} className="btn btn-primary">Edit</Link>
					<Link className="btn btn-danger" onClick={deleteStudent}
						size="sm" variant="danger">
						Delete
					</Link>
				</div>
			</div>
		</div>
	</div>
	);
};

export default StudentTableRow;
