import React from "react";
import Signupstyles from "./Sign-up.module.css";
import { Button, Stack, TextField } from "@mui/material";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FiUpload } from "react-icons/fi";
export default function Signup() {
  return (
    <div className={Signupstyles.signup_main}>
      <div className={Signupstyles.signup_form}>
        <div className={Signupstyles.signup_title}>
          <p><FaUserAlt size={30} /></p>
          <p className={Signupstyles.signuP_title_clamp}> Create your free jobseeker account</p>
        </div>
        <form action="">
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
            id="outline-basic"
            label="Firstname"
            sx={{width:'100%'}}
            />

            <TextField 
            variant="outlined"
            id='outline-basic'
            label='Lastname'
            sx={{width:'100%'}}
            />
            </div>
            <div className={Signupstyles.field_one}>
            <TextField  
            variant="outlined"
            id="outline-basic"
            label="Country"
            sx={{width:'100%'}}
            type="text"
            />

            <TextField 
            variant="outlined"
            id='outline-basic'
            label='Mobile Number'
            sx={{width:'100%'}}
            type="number"
            />
            </div>
            <div className={Signupstyles.field_one}>
            <TextField  
            variant="outlined"
            id="outline-basic"
            label="Year of passing"
            sx={{width:'100%'}}
            type="text"
            />

            <TextField 
            variant="outlined"
            id='outline-basic'
            label='Job Title'
            sx={{width:'100%'}}
            type="text"
            />
            </div>
            <Stack spacing={2.5}>
            <TextField 
            variant="outlined"
            id='outline-basic'
            label='Skills '
            sx={{width:'100%'}}
            type="text"
            />
            <TextField 
            variant="outlined"
            id='outline-basic'
            label='Email'
            sx={{width:'100%'}}
            type="email"
            />
            <TextField 
            variant="outlined"
            id='outline-basic'
            label='Create Password'
            sx={{width:'100%'}}
            type="Password"
            />
            </Stack>
            <div className={Signupstyles.btn_submit}>
              <Stack sx={{width:'40%'}}>
              <Button variant="contained"  style={{padding:'10px'}}>submit</Button>
              </Stack>
              <small>By signing up you agree to User Agreement , Privacy Policy , Cookie Policy .</small>
              <p>Already a Member? <Link to='/signin'>Login</Link></p>
            </div>
        </form>
      </div>
    </div>
  );
}
