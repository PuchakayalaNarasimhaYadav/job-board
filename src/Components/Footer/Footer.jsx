import React from "react";
import FooterStyles from './Footer.module.css'
import Footerdata from "./Footer-data";
import { GrLinkedin } from "react-icons/gr";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { BiLogoTelegram } from "react-icons/bi";

export default function Footercomponent(){
    return(
        <div>
            <footer className={FooterStyles.footer_content}>
                    <div className={FooterStyles.footer_img}>

                    </div>
                    <div className={FooterStyles.footer_text}>
                        {
                            Footerdata && Footerdata.map((footer_items,id)=>{
                                return(
                                    <div className={FooterStyles.footer_map_items} key={id}>
                                            <h5 style={{color:'#03a9f4'}}>{footer_items.Title}</h5>
                                            <p>{footer_items.item1}</p>
                                            <p>{footer_items.item2}</p>
                                            <p>{footer_items.item3}</p>
                                            <p>{footer_items.item4}</p>
                                            <p>{footer_items.item5}</p>
                                            <p>{footer_items.item6}</p>
                                            
                                    </div>
                                )
                            })
                        }
                    </div>
            </footer>
            <div className={FooterStyles.footer_end}>
                    <div className={FooterStyles.Copy_rights_text}>
                    ©2024 Online Job® All rights reserved.
                    </div>
                    <div className={FooterStyles.footer_icons}>
                        <p><GrLinkedin/></p>
                        <p><FaFacebookF/></p>
                        <p><FaTwitter/></p>
                        <p><FaInstagram/></p>
                        <p><FaYoutube/></p>
                        <p><BiLogoTelegram/></p>
                    </div>
            </div>
        </div>
    )
}