import React from 'react';
import { Element } from 'react-scroll';
import ProjectCard from './ProjectCard';
import projects from '../data/projects';
import '../styles/project.css';

const Project = () => {
    return (
        <div className='my-work'>
            <Element name="project">
                <div className="ttitle text-center mt-8 cursor-pointer">
                    <h1 className="my-projects text-3xl hover:text-blue-300 transition-colors duration-300 mb-12">My Projects</h1>
                </div>
                <div className="flex flex-wrap justify-center items-center gap-10 main-div m-5 p-25">
                    {projects.map((item, index) => (
                        <ProjectCard
                            key={index}
                            image={item.image}
                            title={item.title}
                            description={item.description}
                            git={item.git}
                            technologies={item.technologies}
                        />
                    ))}
                </div>

            </Element>
        </div>

    );
};

export default Project;
