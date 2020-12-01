import React from 'react';
import Bar from './Bar';
import {tools, languages} from './data/resume_data'
import { motion } from 'framer-motion'



const Resume = () => {

    const resume_variants = {
        hidden: {
            opacity: 0
        },
        visible: {
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
        <motion.div className="container resume" 
                variants={resume_variants}
                 initial='hidden'
                  animate='visible'
                  exit="exit"


        >
            <div className="row">
                <div className="col-lg-6 resume-card" >
                    <h4 className="resume-card_heading">
                        Education
                    </h4>
                    <div className="resume-card_body">
                        <h5 className="resume-card_title">
                            Computer Science and Enginnering
                        </h5>
                        <p className="resume-card_name">
                           <i> ● Indian Institute of Information and Technology, Kota, Rajasthan (Mnit-Campus).</i>
                        </p>
                        <p className="resume-card_details ">
                           <strong><i>Hello</i>, I am 2nd year student (Sophomore), persuing B.tech in Computer Science Engineering from <i>IIITkota</i></strong>
                        </p>
                    </div>
                </div>
                <div className="col-lg-6 resume-card" >
                    <h4 className="resume-card_heading">
                        Experience
                    </h4>
                    <div className="resume-card_body">
                        <h5 className="resume-card_title">
                            Intern as a Campus Ambassador
                        </h5>
                        <p className="resume-card_name">
                            <i>● At International Model United Nation Online-mode (jun-july)</i>
                            
                        </p>
                        <p className="resume-card_details ">
                            <strong>I work as a campus Ambassador for 1-2 months in IMUN for learning new concepts and  to interact with diversity</strong>
                        </p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6 resume-languages">
                    <h5 className="resume-language_heading mt-3">
                        Languages 
                    </h5>
                    <div className="resume-language_body mt-3">
                        {
                            languages.map(language =>
                                <Bar value={language} />
                            )
                        }
                    </div>
                </div>
                <div className="col-lg-6 resume-languages">
                    <h5 className="resume-language_heading mt-3">
                        Tools and Softwares
                    </h5>
                    <div className="resume-language_body mt-3">
                        {
                            tools.map(tool => <Bar value={tool} />)
                        }
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Resume;