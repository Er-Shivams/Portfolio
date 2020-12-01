import React from 'react';
import skills from './data/about_data'
import Skillcard from './Skillcard';
import { motion } from 'framer-motion'



// const skills = [
//     {
//         icon: webhook,
//         title: "Frontend Development",
//         about: "I can build a beautiful and scalable SPA using HTML, CSS and React.js"
//     },
    
//     {
//         icon: api,
//         title: "Flutter Enthusiast",
//         about: "Build a Chat App using Flutter and Dart"
//     },
//     {
//         icon: algo,
//         title: "Competitive Coder",
//         about: "Problem solver at CodeForces and CodeChef"
//     },
//     {
//         icon: puzzle,
//         title: "UI/UX designer",
//         about: "minimalistic user interface designer using figma and  framer"
//     },
//     {
//         icon: chess,
//         title: "Chess Player",
//         about: "Highest Rating 1121 at Chess.com"
//     },
//     {
//         icon:  backend,
//         title: "Backend  Development",
//         about: "handle database, server, MySQL and  SQLlite",
//     }
// ]

const About = () => {
    const about_variants = {
        hidden: {
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                delay: 0.2, duration: 0.6, type: 'spring'
            }
        },
        exit:{
            opacity:0,
            transition: {
                ease: 'easeInOut'
            }
        }
    }
    return (
        <motion.div className="about"
                   variants={about_variants}
                   initial='hidden'
                   animate='visible'
                   exit = "exit"
        
        >
            <h6 className="about_intro">
                ●  I describe myself as a quick learner and passionate in problem solving by using simple and scalable solutions, want to know more -> Check My Linkedin Profile. 
            </h6>
            <div className="container about_container">
                <h6 className="about_heading">What I offer</h6>
                <div className="row">
                    {
                        skills.map(skill =>
                            <Skillcard skill={skill} />

                        )
                    }
                </div>
            </div>
        </motion.div>
    );
};

export default About;