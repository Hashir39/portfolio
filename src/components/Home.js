import React, { useEffect, useRef, useState } from 'react'
import downloadimage from '../assets/images/hero/download.png';
import pngegg from '../assets/images/skills/pngegg.png';
import node from '../assets/images/skills/node.png'
import resumePdf from './Hashir Resume.pdf';
import { Link as ScrollLink } from 'react-scroll';
import Typed from 'typed.js';
import { Element } from 'react-scroll';

const TypedComponent = () => {
  useEffect(() => {
    const options = {
      strings: ["MERN Stack Developer", "Full Stack Developer", "React JS Developer"],
      typeSpeed: 50,
      loop: true
    };

    const typed = new Typed("#element", options);

    return () => {
      typed.destroy();
    };
  }, []);

};


const Home = () => {

  const handleDownloadResume = () => {
    const anchor = document.createElement('a');
    anchor.href = resumePdf;
    anchor.download = 'Hashir Resume.pdf';
    anchor.click();
  };
  const navLinksRef = useRef(null);
  const menuIconRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  const toggleMenu = () => {
    setMenuOpen((open) => {
      const next = !open;
      document.body.style.overflow = next ? 'hidden' : 'auto';
      return next;
    });
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navLinksRef.current &&
        menuIconRef.current &&
        !navLinksRef.current.contains(event.target) &&
        !menuIconRef.current.contains(event.target)
      ) {
        closeMenu();
      }
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  return (
    <div>
      <header>
        {menuOpen && <div className="nav-backdrop" onClick={closeMenu} />}
        <nav>
          <div className="left">Hashir's Portfolio</div>
          <div className="right">
            <button
              ref={menuIconRef}
              className={menuOpen ? 'menu-icon open' : 'menu-icon'}
              onClick={toggleMenu}
              type="button"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              <span />
              <span />
              <span />
            </button>
            <ul ref={navLinksRef} className={menuOpen ? 'nav-links show' : 'nav-links'}>
              <li>
                <ScrollLink to="home" className="nav-link"
                  smooth="true"
                  offset={500}
                  duration={500} onClick={closeMenu} >Home</ScrollLink>
              </li>
              <li>
                <ScrollLink to="about" className="nav-link"
                  smooth="true"
                  offset={-100}
                  duration={500} onClick={closeMenu} >Skills</ScrollLink>
              </li>
              <li>
                <ScrollLink to="project" className="nav-link"
                  smooth="true"
                  offset={-100}
                  duration={500} onClick={closeMenu} >Projects</ScrollLink>
              </li>
              <li>
                <ScrollLink to="contact" className="nav-link"
                  smooth="true"
                  offset={-100}
                  duration={500} onClick={closeMenu} >Contact me</ScrollLink>
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
              <button className="btn hide-btn" onClick={handleDownloadResume} >Download Resume</button>
              <a href="https://github.com/Hashir39" target="_blank" rel="noopener noreferrer">
                <button className="btn hide-btn">Visit Github</button>
              </a>
            </div>
          </div>
          <div className="rightsection">
            <img src={downloadimage} alt="" />
          </div>
        </section>
        <hr className='fshr' />

        <Element name="about">
          <section className="secondsection" >
            <span className="textgray">What I have Done so far</span>
            <h1>Work Experience</h1>

            <div className="box">
              <div className="vertical">
                <img
                  className="img1"
                  src='/images/frontend.png'
                  alt=""
                />
                <div className="vertical-title hover:text-blue-300 cursor-pointer">Front-End Web Developer</div>
                <div className="vertical-desc hover:text-yellow-50">
                  Specializes in creating and structuring web pages with a focus on HTML, CSS, and JavaScript. Ensures that websites are accessible, responsive, and user-friendly, leveraging modern web standards and best practices.
                </div>
              </div>
              <div className="vertical">
                <img className="img1" src='/images/web-developer.png' alt="" />

                <div className="vertical-title hover:text-blue-300 cursor-pointer">Full-Stack Developer</div>
                <div className="vertical-desc hover:text-yellow-50">
                  Focuses on using JavaScript across the entire stack, from front-end interactivity with frameworks like React to back-end development with Node.js. Builds comprehensive web applications with a seamless integration of user interface and server-side logic.
                </div>
              </div>
              <div className="vertical">
                <img className="img1" src={pngegg} alt="" />
                <div className="vertical-title hover:text-blue-300 cursor-pointer">ReactJS Developer</div>
                <div className="vertical-desc hover:text-yellow-50">
                  A ReactJS developer builds user interfaces using the React library, creating reusable UI components for single-page applications. They efficiently manage and update the UI as data changes, leveraging components and the virtual DOM to create responsive web applications
                </div>
              </div>
              <div className="vertical">
                <img className="img1" src={node} alt="" />
                <div className="vertical-title hover:text-blue-300 cursor-pointer">NodeJS Developer</div>
                <div className="vertical-desc hover:text-yellow-50" >
                  A Node.js developer builds server-side applications using JavaScript with the Node.js runtime. They handle server logic, data storage, and database interactions to create scalable, high-performance web applications.
                </div>
              </div>
            </div>
          </section>  <hr /></Element>
      </main>


    </div>
  );
}

export default Home
