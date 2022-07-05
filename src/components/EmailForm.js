import React from 'react'
import { Formik, Field, Form } from "formik";
import ButtonRounded from './ButtonRounded';
import { Stack } from '@mui/material';
 import { useFormik } from 'formik';

const EmailForm = () => {

   // Pass the useFormik() hook initial form values and a submit function that will
   // be called when the form is submitted
   const formik = useFormik({
     initialValues: {
       email: '',
     },
     onSubmit: values => {
       alert(JSON.stringify(values, null, 2));
     },
   });
   return (
     <form onSubmit={formik.handleSubmit}>
       <input
         required
         id="email"
         name="email"
         type="email"
         placeholder='Enter email'
         onChange={formik.handleChange}
         value={formik.values.email}
       />
       <button className='button-19' type="submit">Submit</button>
     </form>
   );
 };

export default EmailForm