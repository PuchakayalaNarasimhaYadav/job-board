import React, {useState } from "react";
import './Home.module.css'
import HomeStyle from './Home.module.css'
import { Button } from "@mui/material";
import Stack from '@mui/material/Stack';
import {Homedata,Carddata} from "./Homedata";
import { IoCheckmarkCircle } from "react-icons/io5";
import { FaApple,FaGooglePlay,} from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";
export default function Home(){
    const[dialouge,setDialouge]=useState(false)
    return(
        <>
        <div className={HomeStyle.home_main_web}>
            <div className={HomeStyle.home_contain1}>
                <div className={HomeStyle.bg_image}>
                    
                </div>
                <div className={HomeStyle.text_heading}>
                    <div className={HomeStyle.text_data}>
                        <div className={HomeStyle.text_para_clamp}>
                            <p>Hire <span style={{color:'#3dbbf3'}}>Talent</span>, Post <span style={{color:'#fe8f00'}}>Jobs</span></p>
                            <p>& View Candidates</p>
                        </div>
                        <div>
                        <h3>Contact millions of profile to here</h3>
                        </div>
                            <Stack spacing={3} direction="row" >
                                <Button variant="outlined">FIND JOBS</Button>
                                <Button variant="contained">HIRE TALENT</Button>
                            </Stack>
                    </div>
                </div>
            </div>
            <div className={HomeStyle.home_contain2}>
                <div className={HomeStyle.img_web}>
                    <div className={HomeStyle.bgweb_img}>
                        
                    </div>
                    <div className={HomeStyle.Matter_info}>
                        <h3>Business</h3>
                        <div className={HomeStyle.text_para1_clamp}>
                            <p>Find & <span style={{color:'#fe8f00'}}>Hire Candidates Worldwide</span></p>
                        </div>
                        <div>
                            <p>Use ONLINE JOB to download millions of resumes, post jobs</p>
                            <p>from any location, run a reference check and hire talent.</p>
                        </div>
                        <div>
                            <Button variant="contained">LEARN MORE</Button>
                        </div>
                    </div>
                </div>
                <div className={HomeStyle.text_contain_info}>
                    {
                        Homedata && Homedata.map((home,id)=>(
                            <div key={id}>
                                <img src={home.images} alt={home.id}/>
                                <h3>{home.Title}</h3>
                                <p>{home.para1}</p>
                                <p>{home.para2}</p>
                            </div>
                        ))
                    }
                    
                </div>
            </div>
            <div className={HomeStyle.home_contain3}>
                <div  className={HomeStyle.person_img}>
                    
                </div>
                <div className={HomeStyle.text_content}>
                        <div className={HomeStyle.text_para1_clamp}>
                            <p>"Find your <span style={{color:'#fe8f00'}}>dream job </span>from <span style={{color:'#3dbbf3'}}>top companies</span> around the globe"</p>
                        </div> 
                        <div>
                            <p>The ONLINE JOB portal has job opportunities from IT to Non-IT fields.</p>
                            <p>Jobseekers can access full-time, part-time, or work-from-home jobs on the website. Optimise your profile and search jobs for Free.</p>
                        </div>
                        <div>
                            <Button variant="contained" >GET HIRED</Button>
                        </div>               
                </div>
            </div>
            <div className={HomeStyle.home_contain4}>
                <div className={HomeStyle.text_title}>
                    <h3 style={{color:'#fe8f00'}}>Jobseekers</h3>
                    <p className={HomeStyle.text_para1_clamp}>HOW IT WORKS</p>
                    <div style={{display: "flex",width: "50%",justifyContent: "center",alignItems: "center"}}>
                        <p style={{borderBottom: "3px solid #3dbbf3",flex: "0.2",border:"1px solid #3dbbf3"}}></p>
                    </div>
                </div>
                <div className={HomeStyle.cards_content}>
                    {
                        Carddata && Carddata.map((item,ft)=>(
                            <div key={ft} className={HomeStyle.text_card}>
                                <div>
                                <img src={ item.img} alt={ft} />
                                </div>
                                <h3>{item.Title}</h3>
                                <div> 
                                    <p>{item.para1}</p>
                                    <p>{item.para2}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div>
                    <Button variant="contained">SIGN UP AS JOBSEEKER</Button>
                </div>
            </div>
            <div className={HomeStyle.home_contain5}>
                <div className={HomeStyle.resume_img}>

                </div>
                <div className={HomeStyle.text_matter}>
                    <h3 style={{color:'#fe8f00'}}>Jobseekers</h3>
                    <p className={HomeStyle.text_para1_clamp}>Submit Your CV</p>
                    <p className={HomeStyle.text_para1_clamp} style={{color:'#3dbbf3'}}>Get Hired</p>
                    <div>
                    <p>Optimise your profile with a Professional CV.</p>
                    <p>Read our blog on resumes if you need assistance in making one .</p>
                    </div>
                    <div style={{display:'flex'}}>
                    <p><IoCheckmarkCircle size={20}/></p>
                    <p style={{paddingLeft:'8px'}}>Free to register</p>
                    </div>
                    <div style={{display:'flex'}}>
                    <p><IoCheckmarkCircle size={20}/></p>
                    <p style={{paddingLeft:'8px'}}>Get free job alerts straight to your inbox</p>
                    </div>
                    <div>
                        <Button variant="contained">SUBMIT YOUR CV</Button>
                    </div>                    
                </div>
            </div>
            <div className={HomeStyle.home_contain6}>
                <div className={HomeStyle.text_mobile_app}>
                    <h3 style={{color:'#fe8f00'}}>Jobseekers Mobile App</h3>
                    <p className={HomeStyle.text_para1_clamp}>Get the <span style={{color:'#3dbbf3'}}>Online Job</span> App</p>
                    <p>Online Job mobile App bridges the gap between job seekers and recruiters.</p>
                    <p>Providing job seekers with the best career exposure. <span style={{color:'#fe8f00',cursor:'pointer'}} onClick={()=>setDialouge(true)}>Download the App now</span></p>
                    <div className={HomeStyle.button_mui}>
                        <Stack spacing={3} direction='row'>
                        <Button variant="contained" startIcon={<FaGooglePlay/>} style={{backgroundColor:'#3949ab'}}>Google playstore</Button>
                        <Button variant="contained" startIcon={<FaApple/>} style={{backgroundColor:'black'}}>App Store</Button>
                        </Stack>
                    </div>
                    {
                        dialouge ? <div className={HomeStyle.btn_mui}>
                            
                            <div><IoIosCloseCircleOutline size={30} onClick={()=>setDialouge(false)}/></div>
                            <Stack spacing={3} direction='row'>
                            <Button variant="contained" startIcon={<FaGooglePlay/>} style={{backgroundColor:'#3949ab'}}>Google playstore</Button>
                            <Button variant="contained" startIcon={<FaApple/>} style={{backgroundColor:'black'}}>App Store</Button>
                            </Stack>
                        </div>:null

                    }
                    
                </div>
                <div className={HomeStyle.mobile_app_img}>

                </div>
            </div>
            <div className={HomeStyle.home_contain7}>
                <div className={HomeStyle.text_app_alerts}>
                    <h3 style={{color:'#fe8f00'}}>Jobseekers</h3>
                    <h2>Get Free Job Alerts</h2>
                    <p className={HomeStyle.text_para1_clamp} style={{color:'#3dbbf3'}}>From Our Job Posting Channels</p>
                    <div>
                        <p>Once you subscribe, you get matching job notifications and varied industry job updates for you to review job opportunities.</p>
                        <p>As many people apply for job boards, ONLINE JOB helps with suitable jobs for your requirements.</p>
                        <p>We are constantly updating new jobs so that you will receive real-time opportunities for offers locally and globally. Once you fully register, you will enjoy job alerts for FREE.</p>
                    </div>
                    <div>
                        <Stack spacing={3} direction="row">
                            <Button variant="contained" style={{backgroundColor:'#3949ab'}}>CREATE JOB ALERT</Button>
                            <Button variant="outlined">Follow US ON TELEGRAM</Button>
                        </Stack>
                    </div>
                </div>
                <div className={HomeStyle.notify_app}>
                    
                </div>
            </div>
        </div>
        </>
        
    )
}