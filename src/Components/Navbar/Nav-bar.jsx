import React, { useEffect, useState } from "react";
import Navstyles from "./Nav-bar.module.css";
import Navbardata from "./Nav-bar-data";
import logo from "../Assets/brand-logo.jpg";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { Button } from "@mui/material";
import { FaAngleDown } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom"
export default function Navbar() {
    const[dialougebox,setDialougebox]=useState(false);
    const[dropdown1,setDropdown1]=useState(false);
    const[dropdown2,setDropdown2]=useState(false);
    const[dropdown3,setDropdown3]=useState(false);  
    useEffect(()=>{
        if(dialougebox === true){
            document.body.style.overflow ='hidden'
        }else{
            document.body.style.overflow = 'auto'
        }
    },[dialougebox])
    const Dialougedata = [
        {
            data1:'Upload CV',
            data2:'Post Job',
            data3:{
                    res:"Resources",
                    blog:"Blogs",
                    news:"News"
                },
            data4:{
                jobseeker:'For Jobseeker',
                sign:'Sign in',
                register:'Register',
                jb_Solution:'Jobseeker Solution'
            },
            data5:{
                business:'For Business',
                sign_in:'Sign in',
                regi:'Register',
                business_solution:'Business Soution',
                pricing:'Pricing'
            }
        }
    ]
    function Dropdowntwo(){
        setDropdown2(!dropdown2)
        setDropdown1(false)
        setDropdown3(false)
    }
    function Dropdownone(){
        setDropdown1(!dropdown1)
        setDropdown2(false)
        setDropdown3(false)
    }
    function Dropdownthree(){
        setDropdown3(!dropdown3)
        setDropdown1(false)
        setDropdown2(false)
    }
    return (
    <>
    <div className={Navstyles.main_navbar}>
    <nav className={Navstyles.navbar}>
        <div className={Navstyles.nav_item1}>
        <div className={Navstyles.box1}>
            <img src={logo} alt="logo" className={Navstyles.img_log_brand} />
        </div>
        {
            Navbardata && Navbardata.map((data,id) => (
            <div className={Navstyles.box2} key={id}>
                <div>{data.item1}</div>
                <div>{data.item2}</div>
                <div>
                    {data.item3.re_source}
                    <span className={Navstyles.Drop_down} onClick={Dropdownone}><IoMdArrowDropdown/></span>
                    {
                        dropdown1 ? <div className={Navstyles.drop_menu1}>
                                        <p>{data.item3.blog}</p>
                                        <p>{data.item3.news}</p>
                                    </div>: null
                    }
                </div>
                <div>
                    {data.item4.seeker}
                    <span className={Navstyles.Drop_down} onClick={Dropdowntwo}><IoMdArrowDropdown/></span>
                    {
                        dropdown2 ?<div className={Navstyles.drop_menu2} > 
                                        <Link to='/signin' onClick={()=>setDropdown2(false)}><p>{data.item4.sign_in}</p></Link>
                                        <Link to='/signup' onClick={()=>setDropdown2(false)}><p>{data.item4.register}</p></Link>
                                        <p>{data.item4.job_seeker}</p>
                                    </div>:null
                    }
                </div>
                <div>
                    {data.item5.business}
                    <span className={Navstyles.Drop_down} onClick={Dropdownthree}><IoMdArrowDropdown/></span>
                    {
                        dropdown3? <div className={Navstyles.drop_menu3}>
                            <p>{data.item5.sign_in}</p>
                            <p>{data.item5.regi}</p>
                            <p>{data.item5.business_solution}</p>
                            <p>{data.item5.pricing}</p>
                        </div>: null
                    }
                </div>
            </div>
            ))
        }
        </div>
        {
            dialougebox ?
                <div className={Navstyles.nav_item2}>
                    {
                        Dialougedata && Dialougedata.map((popup,index)=>(
                            <div className={Navstyles.Dialouge_box} key={index}>
                                    <div>{popup.data1}</div>
                                    <div>{popup.data2}</div>
                                    <div>
                                        {popup.data3.res} 
                                        <span className={Navstyles.Drop_down} onClick={Dropdownone}><FaAngleDown/></span>
                                        {
                                        dropdown1? <div className={Navstyles.drop_menu1}>
                                                    <p>{popup.data3.blog}</p>
                                                    <p>{popup.data3.news}</p>
                                                </div> : null
                                        } 
                                    </div>
                                    <div>
                                        {popup.data4.jobseeker} 
                                        <span className={Navstyles.Drop_down} onClick={Dropdowntwo}><FaAngleDown/></span>
                                        {
                                        dropdown2 ? <div className={Navstyles.drop_menu2}>
                                                    <Link to='/signin' onClick={()=>setDialougebox(false)||setDropdown2(false)}><p>{popup.data4.sign}</p></Link> 
                                                    <Link to='/signup' onClick={()=>setDialougebox(false)||setDropdown2(false)}><p>{popup.data4.register}</p></Link> 
                                                    <p>{popup.data4.jb_Solution}</p>
                                                </div> : null
                                        }
                                    </div>
                                    <div>
                                        {popup.data5.business} 
                                        <span className={Navstyles.Drop_down} onClick={Dropdownthree}><FaAngleDown/></span>
                                        {
                                            dropdown3?<div className={Navstyles.drop_menu3}>
                                                        <p>{popup.data5.sign_in}</p>
                                                        <p>{popup.data5.regi}</p>
                                                        <p>{popup.data5.business_solution}</p>
                                                        <p>{popup.data5.pricing}</p>
                                                    </div>: null
                                        }                                     
                                    </div>
                                    <div>
                                        <Button variant="contained">Request For Demo</Button>
                                    </div>
                            </div> 
                        ))
                    }
                </div>:null
        }
        <div className={Navstyles.icons}>
            {
                dialougebox ?<IoCloseSharp size={25} onClick={()=>setDialougebox(false)}/>: <GiHamburgerMenu size={25} onClick={()=>setDialougebox(true)}/>
            }
        </div>
    </nav>
    </div>
    </>
    );
}
