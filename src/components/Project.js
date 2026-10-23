import React from 'react';
import { Element } from 'react-scroll';
import ProjectCard from './ProjectCard';
import projects from '../data/projects';
import '../styles/project.css';

const Project = () => (
  <section className="projects-section">
    <Element name="project" className="project-scroll-target">
      <header className="projects-header">
        <h2 className="projects-title">My Projects</h2>
        <span className="projects-title-line" aria-hidden="true" />
      </header>

      <div className="projects-panel">
        <ul className="projects-grid">
          {projects.map((item, index) => (
            <li
              key={item.title}
              className={
                index === 0
                  ? 'projects-grid-item projects-grid-item-featured'
                  : 'projects-grid-item'
              }
              style={{ '--project-delay': `${index * 70}ms` }}
            >
              <ProjectCard
                featured={index === 0}
                index={index + 1}
                category={item.category}
                image={item.image}
                title={item.title}
                description={item.description}
                git={item.git}
                technologies={item.technologies}
              />
            </li>
          ))}
        </ul>
      </div>
    </Element>
  </section>
);

export default Project;
