import React, { useEffect, useRef, useState } from "react";
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
    const dropdownRefone = useRef(null);
    const dropdownReftwo = useRef(null);
    const dropdownRefthree =useRef(null)
    useEffect(() => {
        const handleOutsideClick = (event) => {
          if (dropdownRefone.current && !dropdownRefone.current.contains(event.target)) {
            setDropdown1(false);
          }
          if(dropdownReftwo.current && ! dropdownReftwo.current.contains(event.target)){
            setDropdown2(false)
          }
          if(dropdownRefthree.current && !dropdownRefthree.current.contains(event.target)){
            setDropdown3(false)
          }
        };
        document.addEventListener('mousedown', handleOutsideClick);
    
        return () => {
          document.removeEventListener('mousedown', handleOutsideClick);
        };
      }, []);

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
    function Logohandler(){
        setDropdown1(false);
        setDropdown2(false);
        setDropdown3(false)
    }
    return (
    <>
    <div className={Navstyles.main_navbar}>
    <nav className={Navstyles.navbar}>
        <div className={Navstyles.nav_item1}>
        <div className={Navstyles.box1}>
            <Link to='/' onClick={Logohandler}><img src={logo} alt="logo" className={Navstyles.img_log_brand} /></Link>
        </div>
        {
            Navbardata && Navbardata.map((data,id) => (
            <div className={Navstyles.box2} key={id}>
                <Link to='/signup' className={Navstyles.textline_none}><div>{data.item1}</div></Link>
                <Link to='signin' className={Navstyles.textline_none}><div>{data.item2}</div></Link>
                <div ref={dropdownRefone}>
                    <span onClick={Dropdownone} style={{cursor:'pointer'}}>{data.item3.re_source}</span>
                    <span className={Navstyles.Drop_down} ><IoMdArrowDropdown/></span>
                    {
                        dropdown1 && (<div className={Navstyles.drop_menu1}>
                                        <Link to='*' onClick={()=>setDropdown1(false)} className={Navstyles.textline_none}><p>{data.item3.blog}</p></Link>
                                        <Link to='*' onClick={()=>setDropdown1(false)} className={Navstyles.textline_none}><p>{data.item3.news}</p></Link>
                                    </div>)
                    }
                </div>
                <div ref={dropdownReftwo}>
                    <span onClick={Dropdowntwo}  style={{cursor:'pointer'}}>{data.item4.seeker}</span>
                    <span className={Navstyles.Drop_down} ><IoMdArrowDropdown/></span>
                    {
                        dropdown2 &&(<div className={Navstyles.drop_menu2} > 
                                        <Link to='/signin' onClick={()=>setDropdown2(false)} className={Navstyles.textline_none}><p>{data.item4.sign_in}</p></Link>
                                        <Link to='/signup' onClick={()=>setDropdown2(false)} className={Navstyles.textline_none}><p>{data.item4.register}</p></Link>
                                        <Link to='*' onClick={()=>setDropdown2(false)} className={Navstyles.textline_none}><p>{data.item4.job_seeker}</p></Link>
                                    </div>)
                    }
                </div>
                <div ref={dropdownRefthree}>
                    <span onClick={Dropdownthree} style={{cursor:'pointer'}}>{data.item5.business}</span>
                    <span className={Navstyles.Drop_down} ><IoMdArrowDropdown/></span>
                    {
                        dropdown3 && (<div className={Navstyles.drop_menu3}>
                            <Link to='*' onClick={()=>setDropdown3(false)} className={Navstyles.textline_none}><p>{data.item5.sign_in}</p></Link>
                            <Link to="*" onClick={()=>setDropdown3(false)} className={Navstyles.textline_none}><p>{data.item5.regi}</p></Link>
                            <Link to="*" onClick={()=>setDropdown3(false)} className={Navstyles.textline_none}><p>{data.item5.business_solution}</p></Link>
                            <Link to="*" onClick={()=>setDropdown3(false)} className={Navstyles.textline_none}><p>{data.item5.pricing}</p></Link>
                        </div>)
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
                                    <Link to="/signup" onClick={()=>setDialougebox(false)} className={Navstyles.textlinenone_navtwo}><div>{popup.data1}</div></Link>
                                    <Link to='/signin' onClick={()=>setDialougebox(false)} className={Navstyles.textlinenone_navtwo}><div>{popup.data2}</div></Link>
                                    <div ref={dropdownRefone}>
                                        <span style={{cursor:'pointer'}} onClick={Dropdownone}>{popup.data3.res} </span>
                                        <span className={Navstyles.Drop_down} ><FaAngleDown/></span>
                                        {
                                        dropdown1 && (<div className={Navstyles.drop_menu1}>
                                                    <Link to='*' onClick={()=>setDialougebox(false)||setDropdown1(false)} className={Navstyles.textline_none}><p>{popup.data3.blog}</p></Link>
                                                    <Link to="*" onClick={()=>setDialougebox(false) ||setDropdown1(false)} className={Navstyles.textline_none}><p>{popup.data3.news}</p></Link>
                                                </div>)
                                        }
                                    </div>
                                    <div ref={dropdownReftwo}>
                                        <span style={{cursor:'pointer'}} onClick={Dropdowntwo}>{popup.data4.jobseeker}</span> 
                                        <span className={Navstyles.Drop_down} ><FaAngleDown/></span>
                                        {
                                        dropdown2 && (<div className={Navstyles.drop_menu2}>
                                                    <Link to='/signin' onClick={()=>setDialougebox(false)||setDropdown2(false)} className={Navstyles.textline_none}><p>{popup.data4.sign}</p></Link> 
                                                    <Link to='/signup' onClick={()=>setDialougebox(false)||setDropdown2(false)} className={Navstyles.textline_none}><p>{popup.data4.register}</p></Link> 
                                                    <Link to='*' onClick={()=>setDialougebox(false)||setDropdown2(false)} className={Navstyles.textline_none}><p>{popup.data4.jb_Solution}</p></Link>
                                                </div>)
                                        }
                                    </div>
                                    <div ref={dropdownRefthree}>
                                        <span style={{cursor:'pointer'}} onClick={Dropdownthree}>{popup.data5.business}</span> 
                                        <span  className={Navstyles.Drop_down} ><FaAngleDown/></span>
                                        {
                                            dropdown3 &&(<div className={Navstyles.drop_menu3}>
                                                        <Link to='*' onClick={()=>setDialougebox(false)||setDropdown3(false)} className={Navstyles.textline_none}><p>{popup.data5.sign_in}</p></Link>
                                                        <Link to="*" onClick={()=>setDialougebox(false)||setDropdown3(false)} className={Navstyles.textline_none}><p>{popup.data5.regi}</p></Link>
                                                        <Link to="*" onClick={()=>setDialougebox(false)||setDropdown3(false)} className={Navstyles.textline_none}><p>{popup.data5.business_solution}</p></Link>
                                                        <Link to="*" onClick={()=>setDialougebox(false)||setDropdown3(false)} className={Navstyles.textline_none}><p>{popup.data5.pricing}</p></Link>
                                                    </div>)
                                        }                                     
                                    </div>
                                    <div>
                                        <Button variant="contained" style={{textTransform:'capitalize'}}>Request For Demo</Button>
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
