import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import "../style/buttonRegister.css"
import { ErrorMessage, useField } from 'formik';
import { Link } from "react-router-dom";

export const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="mb-2">
      <label htmlFor={field.name} style={{marginLeft:"30px"}}>{label}</label>
      <input
        className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
        {...field} {...props}
        autoComplete="off"
      />
      <ErrorMessage component="div" name={field.name} style={{marginLeft:"30px"}} className="error" />
    </div>
  )
}


export const Signup = () => {
  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    lastName: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Required'),
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 charaters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match')
      .required('Confirm password is required'),
  })
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
      }}
      validationSchema={validate}
      onSubmit={values => {
        console.log(values)
      }}
    >
      {formik => (
        <div>
          <h1 className="my-4 font-weight-bold .display-4" style={{marginLeft:"30px", fontWeight:"600"}}>ADD USER</h1>
          <Form>
          <TextField label="First Name" name="firstName" type="firstName" style={{width:"400px", marginLeft:"30px"}}/>
            <TextField label="Last Name" name="lastName" type="lastName" style={{width:"400px", marginLeft:"30px"}} />
            <TextField label="Email" name="email" type="email" style={{width:"400px", marginLeft:"30px"}}/>
            <TextField label="password" name="password" type="password" style={{width:"400px", marginLeft:"30px"}} />
            <TextField label="Confirm Password" name="confirmPassword" type="password" style={{width:"400px", marginLeft:"30px"}} />
            <Link to="/kelas">
            <button className="buttonRegister" style={{marginTop:"15px", marginLeft:"30px", padding:"15px", lineHeight:"0px"}} type="submit">Register</button>
            </Link>
          </Form>
        </div>
      )}
    </Formik>
  )
}
