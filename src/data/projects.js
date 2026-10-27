import dailypress from '../assets/images/projects/project-2.png';
import stylecove1 from '../assets/images/projects/project4.png';
import aichatbot1 from '../assets/images/projects/project7.jpg';
import aichatbot2 from '../assets/images/projects/project71.jpg';
import aichatbot3 from '../assets/images/projects/project72.jpg';
import stylecove2 from '../assets/images/projects/project42.png';
import stylecove3 from '../assets/images/projects/project43.png';
import stylecove4 from '../assets/images/projects/project44.png';
import stylecove5 from '../assets/images/projects/project45.png';
import chat1 from '../assets/images/projects/project6.jpeg';
import chat2 from '../assets/images/projects/project61.jpeg';
import dwm1 from '../assets/images/projects/WhatsApp Image 2026-10-27 at 4.26.12 PM.jpeg';
import dwm2 from '../assets/images/projects/WhatsApp Image 2026-10-27 at 4.26.18 PM.jpeg';
import dwm3 from '../assets/images/projects/WhatsApp Image 2026-10-27 at 4.32.19 PM.jpeg';
import dotms1 from '../assets/images/projects/dotms-1-signin.png';
import dotms2 from '../assets/images/projects/dotms-3-sales.png';
import dotms3 from '../assets/images/projects/dotms-4-stores.png';
import docmind1 from '../assets/images/projects/WhatsApp Image 2026-10-27 at 4.07.33 PM.jpeg';
import docmind2 from '../assets/images/projects/WhatsApp Image 2026-10-26 at 7.04.41 PM.jpeg';
import docmind3 from '../assets/images/projects/WhatsApp Image 2026-10-26 at 7.04.29 PM.jpeg';

const projects = [
    {
        title: 'DevMind',
        category: 'NLP · LLM',
        description: 'DevMind is an NLP document Q&A app built with React and Node.js. An LLM with RAG answers from uploaded PDFs, retrieves matching passages, cites sources, and saves chat history for follow-ups.',
        image: [docmind1, docmind2, docmind3],
        git: 'https://github.com/Hashir39/DevMind',
        technologies: ['React', 'Node.js', 'LLM', 'NLP', 'RAG'],
    },
    {
        title: 'Dark Web Monitor',
        category: 'Full Stack · Security',
        description: 'Dark Web Monitor is a signed-in monitoring app for email addresses and URLs, built with ASP.NET MVC and PostgreSQL. Every scan is stored and scored here with weighted rules. A high or rising score opens an alert, and a critical result also opens an investigation case.',
        image: [dwm1, dwm2, dwm3],
        git: 'https://github.com/Hashir39/FYP',
        technologies: ['ASP.NET MVC', 'C#', 'PostgreSQL', 'Entity Framework'],
    },
    {
        title: 'DOTMS',
        category: 'Full Stack · Database',
        description: 'DOTMS is a distributed point-of-sale system for grocery branches in Karachi and Lahore, built with React, Node.js, and PostgreSQL. A sale is written once in the central schema and copied to the city that owns the store, and head office reads both cities from a single sales report.',
        image: [dotms1, dotms2, dotms3],
        git: 'https://github.com/Hashir39/DOTPS',
        technologies: ['React', 'Node.js', 'PostgreSQL', 'Express'],
    },
    {
        title: 'AI Chatbot',
        category: 'AI · Full Stack',
        description: 'AI Chatbot is a real-time chat app built with the MERN stack and integrated with the OpenAI API to provide AI-driven replies. It includes Clerk-based authentication for login and sign-up, stores chat history for a seamless experience.',
        image: [aichatbot1, aichatbot2, aichatbot3],
        git: 'https://github.com/Hashir39/Aichatbot',
        technologies: ['React', 'Node.js', 'MongoDB', 'OpenAI', 'Clerk'],
    },
    {
        title: "Let's Chat",
        category: 'Real-time Messaging',
        description: "Let's Chat is a real-time messaging app built with the MERN stack, featuring Socket.io for instant communication. Styled with Tailwind CSS and DaisyUI, it offers a clean, modern interface, multiple chat rooms, and smooth messaging.",
        image: [chat1, chat2],
        git: 'https://github.com/Hashir39/Chat-App',
        technologies: ['React', 'Node.js', 'Socket.io', 'Tailwind CSS'],
    },
    {
        title: 'StyleCove',
        category: 'E-commerce',
        description: 'StyleCove is a MERN Stack e-commerce platform for Men, Women, and Kids fashion. It offers a user-friendly interface for easy browsing and an admin panel for efficient product management and browsing.',
        image: [stylecove1, stylecove2, stylecove3, stylecove4, stylecove5],
        git: 'https://github.com/Hashir39/StyleCove',
        technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    },
    {
        title: 'DailyPress',
        category: 'News Platform',
        description: 'DailyPress is a versatile news platform offering updates across various categories like science, entertainment, sports, and politics. It features a user-friendly interface for easy navigation and access to diverse, timely news articles.',
        image: [dailypress],
        git: 'https://github.com/Hashir39/DailyPress',
        technologies: ['React', 'News API', 'CSS'],
    },
];

export default projects;
