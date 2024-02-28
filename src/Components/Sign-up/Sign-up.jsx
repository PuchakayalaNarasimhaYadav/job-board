import React from "react";
import Signupstyles from "./Sign-up.module.css";
import { Button, Stack, TextField } from "@mui/material";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FiUpload } from "react-icons/fi";
import { useFormik } from "formik";
export default function Signup() {
  function validate(values){
      let Errors={};
      if(!values.firstname || !values.firstname.trim()){
          Errors.firstname ='*your firstname is required'
      }
      if(!values.lastname || !values.lastname.trim()){
        Errors.lastname="*your last name is required"
      }
      if(!values.country || !values.country.trim()){
        Errors.country='*select your country'
      }
      if(!values.mobilenumber || !values.mobilenumber.trim()){
        Errors.mobilenumber="*enter your mobile number"
      }
      if(!values.yop){
        Errors.yop='*enter the year of passing'
      }
      if(!values.jobtitle || !values.jobtitle.trim()){
        Errors.jobtitle='*enter your job title'
      }
      if(!values.skills){
        Errors.skills="*enter your skills"
      }
      if(!values.email || !values.email.trim()){
        Errors.email='*enter your emaill address'
      }else if(values.email.length<15){
        Errors.email='Must be 15 characters or less'
      }
      if(!values.createpassword || !values.createpassword.trim()){
        Errors.createpassword ='*create your password'
      }
       return Errors
  }
  const formik =useFormik({
    initialValues:{
      firstname:'',
      lastname:'',
      country:'',
      mobilenumber:'',
      yop:'',
      jobtitle:'',
      skills:'',
      email:'',
      createpassword:''
    },
    validate,
    onSubmit:(values)=>{
      alert(JSON.stringify(values,null,2))
    }
  })
  return (
    <div className={Signupstyles.signup_main}>
      <div className={Signupstyles.signup_form}>
        <div className={Signupstyles.signup_title}>
          <p><FaUserAlt size={30} /></p>
          <p className={Signupstyles.signuP_title_clamp}> Create your free jobseeker account</p>
        </div>
        <form action="" onSubmit={formik.handleSubmit}>
            <small style={{margin:'0 5px',color:'darkorange'}}>Free to join & get job alerts that match your skills</small>
            <div className={Signupstyles.upload_file}>
              <div className={Signupstyles.file_title}>
                <p style={{fontSize:'20px',color:'darkviolet'}}>Upload resume</p>
                <input type="file"/>
                <p style={{color: "#777585",fontSize: "12px"}}>* Doc, Docx, RTF, PDF Max file size - 5MB</p>
              </div>
              <div>
              <p><FiUpload size={20} color="darkviolet" /></p>
              </div>
            </div>
              <small style={{color: "#777585",fontSize: "12px",margin:'0 5px'}}>Profile with resumes are 3x more likely to be noticed recruiters</small>
            <div className={Signupstyles.field_one}>
            <TextField  
            variant="outlined"
            id="firstname"
            label="Firstname"
            value={formik.values.firstname}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.firstname && Boolean(formik.errors.firstname)}
            helperText={formik.touched.firstname && formik.errors.firstname}
            sx={{width:'100%'}}
            />

            <TextField 
            variant="outlined"
            id='lastname'
            label='Lastname'
            value={formik.values.lastname}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.lastname && Boolean(formik.errors.lastname)}
            helperText={formik.touched.lastname && formik.errors.lastname}
            sx={{width:'100%'}}
            />
            </div>
            <div className={Signupstyles.field_one}>
            <TextField  
            variant="outlined"
            id="country"
            label="Country"
            value={formik.values.country}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.country && Boolean(formik.errors.country)}
            helperText={formik.touched.country && formik.errors.country}
            sx={{width:'100%'}}
            type="text"
            />

            <TextField 
            variant="outlined"
            id='mobilenumber'
            label='Mobile Number'
            value={formik.values.mobilenumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.mobilenumber && Boolean(formik.errors.mobilenumber)}
            helperText={formik.touched.mobilenumber && formik.errors.mobilenumber}
            sx={{width:'100%'}}
            type="number"
            />
            </div>
            <div className={Signupstyles.field_one}>
            <TextField  
            variant="outlined"
            id="yop"
            label="Year of passing"
            value={formik.values.yop}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.yop && Boolean(formik.errors.yop)}
            helperText={formik.touched.yop && formik.errors.yop}
            sx={{width:'100%'}}
            type="text"
            />

            <TextField 
            variant="outlined"
            id='jobtitle'
            label='Job Title'
            value={formik.values.jobtitle}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.jobtitle && Boolean(formik.errors.jobtitle)}
            helperText={formik.touched.jobtitle && formik.errors.jobtitle}
            sx={{width:'100%'}}
            type="text"
            />
            </div>
            <Stack spacing={2.5}>
            <TextField 
            variant="outlined"
            id='skills'
            label='Skills'
            value={formik.values.skills}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.skills && Boolean(formik.errors.skills)}
            helperText={formik.touched.skills && formik.errors.skills}
            sx={{width:'100%'}}
            type="text"
            />
            <TextField 
            variant="outlined"
            id='email'
            label='Email'
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            sx={{width:'100%'}}
            type="email"
            />
            <TextField 
            variant="outlined"
            id='createpassword'
            label='Create Password'
            value={formik.values.createpassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.createpassword && Boolean(formik.errors.createpassword)}
            helperText={formik.touched.createpassword && formik.errors.createpassword}
            sx={{width:'100%'}}
            type="Password"
            />
            </Stack>
            <div className={Signupstyles.btn_submit}>
              <Stack sx={{width:'40%'}}>
              <Button variant="contained"  type="submit" style={{padding:'10px'}}>submit</Button>
              </Stack>
              <small>By signing up you agree to User Agreement , Privacy Policy , Cookie Policy .</small>
              <p>Already a Member? <Link to='/signin'>Login</Link></p>
            </div>
        </form>
      </div>
    </div>
  );
}
