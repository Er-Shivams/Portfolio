import React, { useState } from 'react';
import data_projects from './data/projects_data'
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion'


const Projects = () => {
    const [projects, setProjects] = useState(data_projects)
    const [active, setActive] = useState('All')


    const handleFilterCategory = (name) => {
        const new_array = data_projects.filter(project => project.category.includes(name))
        setProjects(new_array)
        setActive(name)
    }

    const project_variants = {
        hidden: {
            y: '-30vh',
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
        <motion.div className="container projects" 
                     variants={project_variants}
                     initial='hidden'
                     animate='visible'
                     exit="exit"
            >
            <div className="projects_navbar">
            <div className={active === 'All' && 'projects_navbar-active'} onClick={ () => {    
                                                                                               setProjects(data_projects) 
                                                                                               setActive("All")
                                                                                            }
                                                                                    }>All</div>

                <div className={active === 'react.js' && 'projects_navbar-active'} onClick={() => handleFilterCategory('react.js')}>React</div>
                <div className={active === 'flutter' && 'projects_navbar-active'} onClick={() => handleFilterCategory('flutter')}>Flutter</div>
                <div className={active === 'python' && 'projects_navbar-active'} onClick={() => handleFilterCategory('python')}>Python</div>
            </div>
            <div className="row">

                {
                    projects.map(project =>
                        <ProjectCard key={project.name} project={project} />)
                }
            </div>
        </motion.div>
    );
};

export default Projects;