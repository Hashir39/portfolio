import React from 'react'
import project1 from './project 1.png'
import project2 from './project 2.png'
import { Element } from 'react-scroll';
function Project() {
  return (
    <div><Element name="project">
    <section className="project-section">
      <h1>My Projects</h1>
      
      <div className="row">
        <div className="column">
          <img src={project1} alt="" className="project-image" />
          <div className="title">WordCaseWizard</div>
          <div className="descc">
          WordCaseWizard is a text manipulation tool that simplifies editing with features like uppercase/lowercase transformations, copying, clearing, and reading time estimation. It also includes a dark mode for a better user experience.
          </div>
        </div>
        <div className="column">
          <img src={project2} alt="" className="project-image" />
          <div className="title">DailyPress</div>
          <div className="descc">
          DailyPress is a versatile news platform offering daily updates across various categories like science, entertainment, sports, technology, and politics. It features a user-friendly interface for easy navigation and access to diverse, timely news articles.
          </div>
        </div>
      </div>


    </section>
  </Element></div>
  )
}

export default Project
