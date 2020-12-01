import React from 'react';
import facebook from '../assets/icons/facebook.svg';
import github from '../assets/icons/github.svg';
import instagram from '../assets/icons/instagram.svg';
import download from '../assets/icons/download.svg';
import location from '../assets/icons/location.svg';
import image from '../assets/image.jpg';
import Resume from '../assets/Resume.pdf';
import Linkedin from '../assets/icons/Linkedin.svg';
import twitter from '../assets/icons/twitter.svg';
import mail from '../assets/icons/mail.svg';
import { motion } from "framer-motion";


const sidebar_variant = {
    hidden: {
        x: '-30vw',

    },
    visible: {
        x: 0,

        transition: {
            delay: 0.1, duration: 1, type: 'spring'
        }
    }
}


function Sidebar() {
    const mailhandle = () => {
        window.open("mailto:shivamscool11@gmail.com");
    };
    return (
        <motion.div className="sidebar" 
            variants={sidebar_variant}
            initial='hidden'
            animate="visible"
        >
            <img src={image} alt="avatar" className="sidebar_avatar" />
            <div className="sidebar_name"> Shivam Kumar <span>Singh</span></div>
            <div className="sidebar_item sidebar_title">Web Devloper</div>
            <a href={Resume} download="Resume.pdf">
                <div className="sidebar_item sidebar_resume">
                    <img src={download} alt="resume" className="sidebar_icon mr-1" />Download Resume
                </div>
            </a>
            <figure className="sidebar_social-icons my-3">
                <a href=""> <img src={facebook} alt="facebook" className="sidebar_icon mr-3" /></a>
                <a href=""> <img src={instagram} alt="instagram" className="sidebar_icon mr-3" /></a>
                <a href="https://linkedin.com/in/sshivam-kumar-singh"  target="_blank"> <img src={Linkedin} alt="Linkedin" className="sidebar_icon mr-3" /></a>
                <a href="https://twitter.com/Shivam15287106" target="_blank"> <img src={twitter} alt="twitter" className="sidebar_icon" /></a>
            </figure>
            <div className="sidebar_contact">
                <div className="sidebar_item sidebar_github">
                    <a href="https://github.com/Er-Shivams " target="_blank"><img src={github} alt="github" className="sidebar_icon mr-1" />GitHub</a>
                </div>
                <div className="sidebar_location">
                    <img src={location} alt="location" className="sidebar_icon mr-1" />Agra, India
                </div>
                
                <div className="sidebar_item">9368060897, 9456463734 </div>
            </div>
            
            <div className="sidebar_item sidebar_email" onClick={mailhandle}>Email me</div>
            
        </motion.div>



    );
}
export default Sidebar;