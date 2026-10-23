import React from 'react';
import { Element } from 'react-scroll';
import skills from '../data/skills';
import '../styles/skills.css';

const Skills = () => (
  <Element name="skills" className="skills-scroll-target">
    <section className="skills-section" aria-labelledby="skills-heading">
      <header className="skills-header">
        <h2 id="skills-heading" className="skills-title">
          Tech I Work With
        </h2>
        <span className="skills-title-line" aria-hidden="true" />
      </header>

      <div className="skills-panel">
        <ul className="skills-list">
          {skills.map((skill) => (
            <li key={skill}>
              <span className="skills-pill">{skill}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  </Element>
);

export default Skills;
