import React from "react";
import signinstyles from "./Sign-in.module.css";
import { Button, Stack, TextField } from "@mui/material";
import { Link} from "react-router-dom";
import { useFormik } from "formik";
export default function Signin() {
  const validate = values => {
    const errors = {};
    if (!values.username) {
      errors.username = '*Enter your email address';
    } else if (values.username.length < 15) {
      errors.username = 'Must be 15 characters or less';
    }
    if (!values.password) {
      errors.password = '*Enter your password';
    } else if (values.password.length < 8 ) {
      errors.password = 'Must be 8 characters';
    }
    return errors;
  };
    const formik = useFormik({
      initialValues: {
        username: '',
        password: '',
      },
      validate,
      onSubmit: values => {
        alert(JSON.stringify(values, null, 2));
        formik.resetForm()
      },
    });
  return (
    <>
    <div className={signinstyles.form_main} >
      <div className={signinstyles.form_matter}>
        <p className={signinstyles.text_paragph_clamp}>Login to your account</p>
        <p className={signinstyles.text_paragphtxt_clamp}>see jobs and your profile</p>
      </div>
      <div className={signinstyles.form_details}>
        <p className={signinstyles.text_para1_clamp}>Signin</p>
        <form  action=" " onSubmit={formik.handleSubmit}>
          <center>
          <Stack sx={{width:'90%' }} spacing={3}  noValidate  direction="column" >  
              <TextField
                id="username"
                label="Enter your Email"
                variant="outlined"
                size="medium"
                type="email"
                color="success"
                onChange={formik.handleChange}
                value={formik.values.username}
                error={formik.touched.username && Boolean(formik.errors.username)}
                helperText={formik.touched.username && formik.errors.username}
              />
              <TextField
                id="password"
                variant="outlined"
                type="password"
                size="large"
                label="Enter your password"
                color="success"
                onChange={formik.handleChange}
                value={formik.values.password}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
              />
            </Stack>
            </center> 
            <center style={{margin:'10px 0px'}}>
            <Stack sx={{width:'65%'}} spacing={2} direction="column">
                <Button variant="contained" style={{padding:'10px',textTransform:'capitalize'}} type="submit">Login</Button>
                <p>or</p>
                <Button variant="contained" style={{padding:'10px',backgroundColor:'#d73d32',textTransform:'capitalize'}}>Google</Button>
                <Button variant="contained" style={{padding:'10px',backgroundColor:'#0673b1',textTransform:'capitalize'}}>Linkedin</Button>
          </Stack>
          </center>
        </form>
        <div className={signinstyles.sign_uptext}>
          <p>Don't have an account? <Link to='/signup'><span style={{color:'#2196f3'}}>SignUp</span></Link></p>
          <p>Forgot password?</p>
        </div>
      </div>
    </div>
    </>
  );
}
