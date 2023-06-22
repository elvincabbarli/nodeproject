import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from 'sweetalert2'

const StudentTableRow = (props) => {
	const { _id, name, email, rollno } = props.obj;

	const deleteStudent = () => {
		axios
			.delete(
				"http://localhost:4000/students/" + _id)
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
		<tr>
			<td>{name}</td>
			<td>{email}</td>
			<td>{rollno}</td>
			<td>
				<Link className="edit-link"
					to={"/edit-student/" + _id}>
					Edit
				</Link>
				<Button onClick={deleteStudent}
					size="sm" variant="danger">
					Delete
				</Button>
			</td>
		</tr>
	);
};

export default StudentTableRow;
