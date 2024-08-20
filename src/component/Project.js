import React from 'react';
import project1 from './project 1.png'; 
import project2 from './project 2.png';
import { Element } from 'react-scroll';
import '../project.css';

const ProjectCard = ({ image, title, description, git, technologies }) => {
    return (
        <div className="max-w-sm sm:max-w-sm md:max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 project-card">
            {image && (
                <div className='image-container'>
                    <img className="w-full rounded-t-lg h-auto object-cover mt-0.5 project-image" src={image} alt={title} />
                </div>
            )}
            <div className="p-4 sm:p-6">
                <div>
                    <h5 className="text-lg sm:text-base md:text-lg lg:text-xl -mt-4 mb-1 -ml-5 tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500 cursor-pointer hover:text-blue-300 project-title">
                        {title}
                    </h5>
                </div>
                <p className="font-normal text-2xs sm:text-xs md:text-sm -ml-5 -mt-1 text-gray-300 dark:text-gray-400 hover:text-yellow-50 project-desc">
                    {description}
                </p>
            </div>
            <div className='m-2 sm:m-4 lg:m-6 flex justify-between'>
                <div className='flex flex-wrap gap-2 pl-2'>
                    {technologies.map((tag, index) => (
                        <p
                            key={`${index}-${tag}`}
                            className='text-[14px] text-blue-500'
                        >

                        </p>
                    ))}
                </div >
                <div className='-mt-4 -mr-6 pr-5 pt-2'>
                <a href={git || "#"} target="_blank" rel="noreferrer" className="text-red-300 border border-gray-200 rounded-lg shadow p-1 sm:p-2 lg:p-3 hover:text-green-500 duration-300 github">GitHub</a></div>
            </div>
        </div>
    );
};

const Project = () => {
    const projectData = [
        {
            title: 'WordCaseWizard',
            description: 'WordCaseWizard is a text manipulation tool that simplifies editing with features like uppercase lowercase transformations, copying, clearing, and reading time estimation. It also includes a dark mode for a better user experience.',
            image: project1,
            git: 'https://github.com/Hashir39/WordCaseWizard',
            technologies: [''],
        },
        {
            title: 'DailyPress',
            description: 'DailyPress is a versatile news platform offering daily updates across various categories like science, entertainment,sports,technology and politics. It features a user-friendly interface for easy navigation and access news articles.',
            image: project2,
            git: 'https://github.com/Hashir39/DailyPress',
            technologies: [''],
        },
    ];

    return (
        <div className='my-work'>
            <Element name="project">
                <div className="ttitle text-center mt-8 cursor-pointer">
                    <h1 className="text-3xl hover:text-blue-300 transition-colors duration-300 -mb-2">My Projects</h1>
                </div>
                <div className="flex flex-wrap gap-40 justify-center items-center -m-5 p-12">
                    {projectData.map((item, index) => (
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


