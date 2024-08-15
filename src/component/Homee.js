import React , { useEffect }  from 'react'
// import { Link } from 'react-router-dom';
import downloadimage from './download.png';
import pngegg from './pngegg.png';
import node from './node.png'
import { Link as ScrollLink } from 'react-scroll';
import Typed from 'typed.js';
import { Element } from 'react-scroll';
import Project from './Project'
import Contact from './Contact'



const TypedComponent = () => {
  useEffect(() => {
    const options = {
      strings: ["MERN Stack Developer", "Front-End Developer", "React JS Developer"],
      typeSpeed: 50,
      loop:true
    };

    const typed = new Typed("#element", options);

    return () => {
      typed.destroy();
    };
  }, []); 
  
};


const Home = () => {
  
  const handleDownloadResume = () => {
    const resumeUrl = '/resume.pdf';
    const anchor = document.createElement('a');
    anchor.href = resumeUrl;
    anchor.download = 'Hashir_Resume.pdf';
    anchor.click();
  };
  const toggleMenu = () => {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
  };
  
  return (
    <>
      <header>
        <nav>
          <div className="left">Hashir's Portfolio</div>
          <div className="right">
            <div className="menu-icon" onClick={toggleMenu}>&#9776;</div>
            <ul className='nav-links'>
              <li>
                <ScrollLink to="home"
                  smooth="true"
                  offset={500}
                  duration={500} style={{ cursor: 'pointer' }} >Home</ScrollLink>
              </li>
              <li>
                <ScrollLink to="about"
                  smooth="true"
                  offset={-100}
                  duration={500} style={{ cursor: 'pointer' }} >About</ScrollLink>
              </li>
              <li>
                <ScrollLink to="project"
                  smooth="true"
                  offset={-100}
                  duration={500} style={{ cursor: 'pointer' }} >Projects</ScrollLink>
              </li>
              <li>
                <ScrollLink to="contact"
                  smooth="true"
                  offset={-100}
                  duration={500} style={{ cursor: 'pointer' }} >Contact me</ScrollLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <main>

        <section className="firstsection">
          <div className="leftsection">
            <div>Hi, My Name is <span className="purple">Hashir</span></div>
            <div>and I'm a</div>
            <div>
      <TypedComponent />
       </div>
            <span id="element"></span>
            <div className="buttons">
              <button className="btn" onClick={handleDownloadResume} >Download Resume</button>
              <a href="https://github.com/Hashir39" target="_blank" rel="noopener noreferrer">
                <button className="btn">Visit Github</button>
              </a>
            </div>
          </div>
          <div className="rightsection">
            <img src={downloadimage} alt="" />
          </div>
        </section>
        <hr />

        <Element name="about">
          <section className="secondsection">
            <span className="textgray">What I have Done so far</span>
            <h1>Work Experience</h1>

            <div className="box">
              <div className="vertical">
                <img
                  className="img1"
                  src='./frontend.png'
                  alt=""
                />
                <div className="vertical-title">Front-End Web Developer</div>
                <div className="vertical-desc">
                Specializes in creating and structuring web pages with a focus on HTML, CSS, and JavaScript. Ensures that websites are accessible, responsive, and user-friendly, leveraging modern web standards and best practices.
                </div>
              </div>
              <div className="vertical">
                <img className="img2" src='./web-developer.png' alt="" />
                <div className="vertical-title">Full-Stack Developer</div>
                <div className="vertical-desc">
                Focuses on using JavaScript across the entire stack, from front-end interactivity with frameworks like React to back-end development with Node.js. Builds comprehensive web applications with a seamless integration of user interface and server-side logic.
                </div>
              </div>
              <div className="vertical">
                <img className="img1" src={pngegg} alt="" />
                <div className="vertical-title">ReactJS Developer</div>
                <div className="vertical-desc">
                A ReactJS developer builds user interfaces using the React library, creating reusable UI components for single-page applications. They efficiently manage and update the UI as data changes, leveraging components and the virtual DOM to create responsive web applications
                </div>
              </div>
              <div className="vertical">
                <img className="img1" src={node} alt="" />
                <div className="vertical-title">NodeJS Developer</div>
                <div className="vertical-desc">
                A Node.js developer builds server-side applications using JavaScript with the Node.js runtime. They handle server logic, data storage, and database interactions to create scalable, high-performance web applications.
                </div>
              </div>
            </div>
          </section> <hr />
        </Element>
      </main>
      <Project/>
      <Element name="contact">
            <div className="div" >
                <section className="contact-section">
                    <h1>Contact Me</h1>
                    <div className="contact-form">
                        <form action="https://formspree.io/f/mjvnvyvj" method="POST">
                            <label htmlFor="name">Your Name</label>
                            <input type="text" id="name" name="name" placeholder="Your Name" autoComplete="name" />
                            <label htmlFor="email">Your Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Your Email"
                                autoComplete="Your Email"
                            />
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Your Message"
                            ></textarea>
                            <button className="btn" type="submit">
                                Send Message
                            </button>
                        </form>
                    </div>
                </section>
            </div>
            
        </Element>

    </>
  );
}

export default Home
