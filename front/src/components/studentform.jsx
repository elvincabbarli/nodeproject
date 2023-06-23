import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, Button } from "react-bootstrap";
import sidepisc from '../assets/side.jpeg'

const StudentForm = (props) => {
const validationSchema = Yup.object().shape({
	name: Yup.string().required("Required"),
	email: Yup.string()
	.email("You have enter an invalid email address")
	.required("Required"),
	rollno: Yup.number()
	.positive("Invalid roll number")
	.integer("Invalid roll number")
	.required("Required"),
});
// console.log(props);
return (
	<div className="form-wrapper">
		<h1 style={{marginBottom: '25px'}}>{props.children}</h1>
		<div className="row main-cont">
			<img className="col-md-5" src={sidepisc} alt="" />
			<Formik  {...props} validationSchema={validationSchema}>

				<Form className='col-md-6' style={{display: 'flex' , gap: '15px' , flexDirection: 'column'}}>
				<FormGroup>
					<Field name="name" type="text" placeholder='Student Name'
						className="form-control" />
					<ErrorMessage
					name="name"
					className="d-block invalid-feedback"
					component="span"
					/>
				</FormGroup>
				<FormGroup>
					<Field name="email" type="text"  placeholder='Student Email'
						className="form-control" />
					<ErrorMessage
					name="email"
					className="d-block invalid-feedback"
					component="span"
					/>
				</FormGroup>
				<FormGroup>
					<Field name="rollno" type="number"  placeholder='Student Number'
						className="form-control" />
					<ErrorMessage
					name="rollno"
					className="d-block invalid-feedback"
					component="span"
					/>
				</FormGroup>
				<Button variant="danger" size="lg"
					block="block" type="submit">
					{props.children}
				</Button>
				</Form>
			</Formik>
		</div>

	</div>
);
};

export default StudentForm;
