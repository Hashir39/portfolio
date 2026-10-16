import wordcase from '../assets/images/projects/project-1.png';
import facebook from '../assets/images/projects/project-3.png';
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

const projects = [
    {
        title: 'AI CHATBOT',
        description: 'AI Chatbot is a real-time chat app built with the MERN stack and integrated with the OpenAI API to provide AI-driven replies. It includes Clerk-based authentication for login and sign-up, stores chat history for a seamless experience.',
        image: [aichatbot1, aichatbot2, aichatbot3],
        git: 'https://github.com/Hashir39/Aichatbot',
        technologies: [''],
    },
    {
        title: "Let's Chat",
        description: "Let's Chat is a real-time messaging app built with the MERN stack, featuring Socket.io for instant communication. Styled with Tailwind CSS and DaisyUI, it offers a clean, modern interface, multiple chat rooms, and smooth messaging.",
        image: [chat1, chat2],
        git: 'https://github.com/Hashir39/Chat-App',
        technologies: [''],
    },
    {
        title: 'StyleCove',
        description: 'StyleCove is a MERN Stack e-commerce platform for Men, Women, and Kids fashion. It offers a user-friendly interface for easy browsing and an admin panel for efficient product management and browsing.',
        image: [stylecove1, stylecove2, stylecove3, stylecove4, stylecove5],
        git: 'https://github.com/Hashir39/StyleCove',
        technologies: [''],
    },
    {
        title: 'DailyPress',
        description: 'DailyPress is a versatile news platform offering updates across various categories like science, entertainment, sports,  and politics. It features a user-friendly interface for easy navigation and access to diverse, timely news articles.',
        image: [dailypress],
        git: 'https://github.com/Hashir39/DailyPress',
        technologies: [''],
    },
    {
        title: 'WordCaseWizard',
        description: 'WordCaseWizard is a text manipulation tool that simplifies editing with features like uppercase lowercase transformations, copying, clearing, and reading time estimation. It also includes a dark mode for a better user experience.',
        image: [wordcase],
        git: 'https://github.com/Hashir39/WordCaseWizard',
        technologies: [''],
    },
    {
        title: 'Facebook Clone',
        description: "Facebook Clone is a web application built with React and Tailwind CSS. It features a sidebar, a story section for posts, and a feed for updates. The app includes intuitive tools for adding posts, contacting support and messaging",
        image: [facebook],
        git: 'https://github.com/Hashir39/FbClone',
        technologies: [''],
    },
];

export default projects;
