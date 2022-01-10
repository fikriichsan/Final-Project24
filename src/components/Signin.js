import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';
import "../style/buttonRegister.css"


export const Signin = () => {
  const validate = Yup.object({
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
          <h1 className="my-4 font-weight-bold .display-4" style={{marginLeft:"30px", fontWeight:"600"}}>Sign In</h1>
          <Form>
            <TextField label="Email" name="email" type="email" style={{width:"400px", marginLeft:"30px"}}/>
            <TextField label="password" name="password" type="password" style={{width:"400px", marginLeft:"30px"}} />
            <TextField label="Confirm Password" name="confirmPassword" type="password" style={{width:"400px", marginLeft:"30px"}} />
            <button className="buttonRegister" style={{marginTop:"15px", marginLeft:"30px", padding:"15px", lineHeight:"0px"}} type="submit">Register</button>
          </Form>
        </div>
      )}
    </Formik>
  )
}
