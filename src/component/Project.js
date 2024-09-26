import React from 'react';
import project2 from './project 1.png';
import project3 from './project 3.png';
import project1 from './project 2.png';
import project4 from './project4.png'
import project42 from './project42.png'
import project43 from './project43.png'
import project44 from './project44.png'
import project45 from './project45.png'
import { Element } from 'react-scroll';
import { useState, useEffect } from 'react';
import '../project.css';

const ProjectCard = ({ image, title, description, git, technologies }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (image.length > 1) {
          const intervalId = setInterval(() => {
            setCurrentIndex((currentIndex) => (currentIndex + 1) % image.length);
          }, 2000); // change image every 2 seconds
      
          return () => clearInterval(intervalId);
        }
      }, [image]);
    
    return (

        <div className="max-w-sm sm:max-w-sm md:max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 project-card">
            {image && (
                <div className='image-container'>
                    <img className="p-1 w-full animate-changeImage rounded-t-lg h-auto object-cover mt-0.5 project-image" src={image[currentIndex]} alt={title} />
                </div>
            )}

            <div className="title-desc p-4 sm:p-6">
                <div>
                    <h5 className="pl-1 text-lg sm:text-base md:text-lg lg:text-xl -mt-4 mb-1 -ml-5 tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500 cursor-pointer hover:text-blue-300 project-title">
                        {title}
                    </h5>
                </div>
                <p className="pl-1 font-normal text-2xs sm:text-xs md:text-sm -ml-5 -mt-1 text-gray-300 dark:text-gray-400 hover:text-yellow-50 project-desc">
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
            title: 'StyleCove',
            description: 'StyleCove is a MERN stack e-commerce platform for Mes, Womens, and Kids fashion. It offers a user-friendly interface for easy browsing and an admin panel for efficient product management and browsing.',
            image: [project4,project42,project43,project44,project45],
            git: 'https://github.com/Hashir39/StyleCove',
            technologies: [''],
        },
        {
            title: 'DailyPress',
            description: 'DailyPress is a versatile news platform offering updates across various categories like science, entertainment, sports,  and politics. It features a user-friendly interface for easy navigation and access to diverse, timely news articles.',
            image: [project1],
            git: 'https://github.com/Hashir39/DailyPress',
            technologies: [''],
        },
        {
            title: 'WordCaseWizard',
            description: 'WordCaseWizard is a text manipulation tool that simplifies editing with features like uppercase lowercase transformations, copying, clearing, and reading time estimation. It also includes a dark mode for a better user experience.',
            image: [project2],
            git: 'https://github.com/Hashir39/WordCaseWizard',
            technologies: [''],
        },
        {
            title: 'Facebook Clone',
            description: "Facebook Clone is a web application built with React and Tailwind CSS. It features a sidebar, a story section for posts, and a feed for updates. The app includes intuitive tools for adding posts, contacting support and messaging",
            image: [project3],
            git: 'https://github.com/Hashir39/FbClone',
            technologies: [''],
        },

    ];

    return (
        <div className='my-work'>
            <Element name="project">
                <div className="ttitle text-center mt-8 cursor-pointer">
                    <h1 className="my-projects text-3xl hover:text-blue-300 transition-colors duration-300 mb-12">My Projects</h1>
                </div>
                <div className="flex flex-wrap justify-center items-center gap-10 main-div -m-5 p-12">
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

