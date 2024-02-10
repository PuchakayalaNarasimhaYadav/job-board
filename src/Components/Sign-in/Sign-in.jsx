import React from "react";
import signinstyles from "./Sign-in.module.css";
import { Button, Stack, TextField } from "@mui/material";
import { Link} from "react-router-dom";
export default function Signin() {
  return (
    <>
    <div className={signinstyles.form_main} >
      <div className={signinstyles.form_matter}>
        <p className={signinstyles.text_paragph_clamp}>Login to your account</p>
        <p className={signinstyles.text_paragphtxt_clamp}>see jobs and your profile</p>
      </div>
      <div className={signinstyles.form_details}>
        <p className={signinstyles.text_para1_clamp}>Jobseeker Login</p>
        <form action="">
          <center>
          <Stack sx={{width:'90%' }} spacing={3}  noValidate autoComplete="off" direction="column" >  
              <TextField
                id="outlined-basic"
                label="Enter your Email"
                variant="outlined"
                size="medium"
                color="success"
              />
              <TextField
                id="outlined-basic"
                variant="outlined"
                size="large"
                label="Enter your password"
                color="success"
              />
            </Stack>
            </center> 
        </form>
        <center>
        <Stack sx={{width:'70%'}} spacing={2} direction="column">
                <Button variant="contained" style={{padding:'10px'}}>Login</Button>
                <p>or</p>
                <Button variant="contained" style={{padding:'10px',backgroundColor:'#d73d32'}}>Google</Button>
                <Button variant="contained" style={{padding:'10px',backgroundColor:'#0673b1'}}>Linkedin</Button>
          </Stack>
          
        </center>
        <div className={signinstyles.sign_uptext}>
          <p>Don't have an account? <Link to='/signup'><span style={{color:'#2196f3'}}>SignUp</span></Link></p>
          <p>Forgot password?</p>
        </div>
      </div>
    </div>
    </>
  );
}
