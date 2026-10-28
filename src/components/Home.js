import React, { useEffect, useRef } from 'react'
import HeroVisual from './HeroVisual';
import Experience from './Experience';
import Skills from './Skills';
import resumePdf from './Hashir Resume.pdf';
import { Element } from 'react-scroll';
import Typed from 'typed.js';
import Navbar from './Navbar';

const TypedComponent = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    if (!typedRef.current) {
      return undefined;
    }

    const reducedMotion =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) {
      typedRef.current.textContent = 'Full Stack Developer';
      return undefined;
    }

    const typed = new Typed(typedRef.current, {
      strings: [
        'Full Stack Developer',
        'MERN Stack Developer',
        'DevOps Engineer',
        'React Developer',
      ],
      typeSpeed: 45,
      backSpeed: 35,
      backDelay: 1400,
      smartBackspace: false,
      loop: true,
      showCursor: true,
      cursorChar: '|',
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <span ref={typedRef} className="hero-typed-target" aria-live="polite">
      Full Stack Developer
    </span>
  );
};


const Home = () => {

  const handleDownloadResume = () => {
    const anchor = document.createElement('a');
    anchor.href = resumePdf;
    anchor.download = 'Hashir Resume.pdf';
    anchor.click();
  };
  return (
    <div>
      <Navbar />
      <main className="page-main">

        <Element name="home">
        <section className="firstsection" aria-labelledby="hero-heading">
          <div className="leftsection">
            <h1 id="hero-heading" className="hero-heading">
              Hi, My Name is <span className="hero-name purple">Muhammad Hashir</span>
            </h1>
            <p className="hero-role-line">
              <span className="hero-role-prefix">and I&apos;m a</span>{' '}
              <TypedComponent />
            </p>
            <p className="hero-tagline">
              MERN stack developer in Karachi, building web apps, REST APIs, and CI/CD pipelines.
            </p>
            <div className="buttons">
              <button className="btn" type="button" onClick={handleDownloadResume} >Download Resume</button>
              <a
                className="btn btn-github-link"
                href="https://github.com/Hashir39"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit GitHub
              </a>
            </div>
          </div>
          <div className="rightsection hero-visual-wrap">
            <HeroVisual />
          </div>
        </section>
        </Element>
        <div className="section-divider hero-divider" aria-hidden="true" />

        <Element name="about" className="about-scroll-target">
          <Experience />
        </Element>
        <div className="section-divider" aria-hidden="true" />
        <Skills />
      </main>


    </div>
  );
}

export default Home
