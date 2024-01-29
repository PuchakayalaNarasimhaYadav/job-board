import React from "react";
import signinstyles from "./Sign-in.module.css";
import { Stack, TextField } from "@mui/material";

export default function Signin() {
  return (
    <>
    <div className={signinstyles.form_main} >
      <div className={signinstyles.form_matter}>
        <p className={signinstyles.text_para1_clamp}>Login to your account</p>
        <p style={{color:'orange'}}>see jobs and your profile</p>
      </div>
      <div className={signinstyles.form_details}>
        <p className={signinstyles.text_para1_clamp}>Jobseeker Login</p>
        <form action="" className={signinstyles.form_login}>
        <center>
        <Stack sx={{width:'60ch' }} spacing={3}  noValidate autoComplete="off" >   
            <TextField
              id="filled-hidden-label-small"
              variant="filled"
              size="small"
            />
            <TextField
              id="filled-hidden-label-small"
              variant="filled"
              size="small"
            />
          </Stack>
          </center>
        </form>
      </div>
    </div>
    </>
  );
}
