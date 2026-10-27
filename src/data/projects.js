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
import dwm3 from '../assets/images/projects/WhatsApp Image 2026-10-27 at 4.26.34 PM.jpeg';
import dwm4 from '../assets/images/projects/WhatsApp Image 2026-10-27 at 4.32.19 PM.jpeg';
import dwm5 from '../assets/images/projects/WhatsApp Image 2026-10-27 at 4.32.31 PM.jpeg';
import dotms1 from '../assets/images/projects/dotms-1-signin.png';
import dotms2 from '../assets/images/projects/dotms-2-register.png';
import dotms3 from '../assets/images/projects/dotms-3-sales.png';
import dotms4 from '../assets/images/projects/dotms-4-stores.png';
import dotms5 from '../assets/images/projects/dotms-5-products.png';
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
        description: 'Dark Web Monitor scans emails and URLs after sign-in, built with ASP.NET MVC and PostgreSQL. Each scan is stored and scored with rules, and a high score opens an alert or a case.',
        image: [dwm1, dwm2, dwm3, dwm4, dwm5],
        git: 'https://github.com/Hashir39/FYP',
        technologies: ['ASP.NET MVC', 'C#', 'PostgreSQL', 'Entity Framework'],
    },
    {
        title: 'DOTMS',
        category: 'Full Stack · Database',
        description: 'DOTMS is a point-of-sale system for grocery stores in Karachi and Lahore, built with React, Node.js, and PostgreSQL. A sale is saved once, copied to that city, and head office reads both in one report.',
        image: [dotms1, dotms2, dotms3, dotms4, dotms5],
        git: 'https://github.com/Hashir39/DOTPS',
        technologies: ['React', 'Node.js', 'PostgreSQL', 'Express'],
    },
    {
        title: 'AI Chatbot',
        category: 'AI · Full Stack',
        description: 'AI Chatbot is a real-time chat app built with the MERN stack and the OpenAI API. Clerk handles login and sign-up, the model writes replies, and each chat keeps its history.',
        image: [aichatbot1, aichatbot2, aichatbot3],
        git: 'https://github.com/Hashir39/Aichatbot',
        technologies: ['React', 'Node.js', 'MongoDB', 'OpenAI', 'Clerk'],
    },
    {
        title: "Let's Chat",
        category: 'Real-time Messaging',
        description: "Let's Chat is a real-time messaging app built with the MERN stack and Socket.io. Tailwind CSS and DaisyUI style the rooms, and people send instant messages in multiple chats.",
        image: [chat1, chat2],
        git: 'https://github.com/Hashir39/Chat-App',
        technologies: ['React', 'Node.js', 'Socket.io', 'Tailwind CSS'],
    },
    {
        title: 'StyleCove',
        category: 'E-commerce',
        description: 'StyleCove is a MERN shop for men, women, and kids fashion. Shoppers browse the catalog, and an admin panel adds products, updates stock, and manages what is listed for sale.',
        image: [stylecove1, stylecove2, stylecove3, stylecove4, stylecove5],
        git: 'https://github.com/Hashir39/StyleCove',
        technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    },
    {
        title: 'DailyPress',
        category: 'News Platform',
        description: 'DailyPress is a news app built with React and the News API. It gathers science, entertainment, sports, and politics stories in one feed for quick reading.',
        image: [dailypress],
        git: 'https://github.com/Hashir39/DailyPress',
        technologies: ['React', 'News API', 'CSS'],
    },
];

export default projects;
