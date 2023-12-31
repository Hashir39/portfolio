import React , { useEffect }  from 'react'
// import { Link } from 'react-router-dom';
import downloadimage from './download.png';
import project1 from './project 1.png'
import project2 from './project 2.png'
import kss from './kisspng-web-development-html-software-development-software-modern-pattern-5b2e9b17ed9447.4097307615297810159731.png';
import pngeg from './pngegg (1).png';
import pngegg from './pngegg.png';
import node from './node.png'
import { Link as ScrollLink } from 'react-scroll';
import Typed from 'typed.js';
import { Element } from 'react-scroll';



const TypedComponent = () => {
  useEffect(() => {
    const options = {
      strings: ["Web Developer", "Web Designer", "Video Editor"],
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
  return (
    <>
      <header>
        <nav>
          <div className="left">Hashir's Portfolio</div>
          <div className="right">
            <ul>
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
                  src={kss}
                  alt=""
                />
                <div className="vertical-title">HTML5 Specialist</div>
                <div className="vertical-desc">
                  An HTML developer specializes in creating and structuring web pages using Hypertext Markup Language (HTML). HTML is the foundational language for web development, responsible for defining the structure and content of web pages. HTML developers ensure proper markup, semantics, and accessibility, contributing to the overall layout and presentation of a website
                </div>
              </div>
              <div className="vertical">
                <img className="img1" src={pngeg} alt="" />
                <div className="vertical-title">JavaScript Expert</div>
                <div className="vertical-desc">
                  A JavaScript developer focuses on using JavaScript, a dynamic scripting language, to add interactivity and functionality to web pages. JavaScript is widely employed for client-side scripting, enabling developers to create dynamic user interfaces, handle events, and perform asynchronous operations. JavaScript developers often work closely with HTML and CSS to build responsive and interactive web applications.
                </div>
              </div>
              <div className="vertical">
                <img className="img1" src={pngegg} alt="" />
                <div className="vertical-title">ReactJS Developer</div>
                <div className="vertical-desc">
                  A ReactJS developer specializes in building user interfaces using the React library, which is a JavaScript library for creating reusable UI components. React is commonly used to develop single-page applications, allowing developers to efficiently manage and update the UI as data changes. ReactJS developers leverage components and a virtual DOM to create responsive and efficient web applications.
                </div>
              </div>
              <div className="vertical">
                <img className="img1" src={node} alt="" />
                <div className="vertical-title">NodeJS Developer</div>
                <div className="vertical-desc">
                  A Node.js developer works with the Node.js runtime environment to build server-side applications using JavaScript. Node.js enables JavaScript to be executed on the server, facilitating the development of scalable and high-performance web applications. Node.js developers often work on the server side of web applications, handling tasks such as server logic, data storage, and interaction with databases.
                </div>
              </div>
            </div>
          </section> <hr />
        </Element>
      </main>
      <Element name="project">
        <section className="project-section">
          <h1>My Projects</h1>
          
          <div className="row">
            <div className="column">
              <img src={project1} alt="" className="project-image" />
              <div className="title">WordCaseWizard</div>
              <div className="descc">
              WordCaseWizard is a versatile text manipulation tool designed to enhance your text editing experience. This web application allows users to input text, offering features such as copying, clearing, and previewing the text in various cases, including uppercase and lowercase transformations. Additionally, the application provides an insightful reading time estimate, giving users an idea of how long it will take to read the provided text
              </div>
            </div>
            <div className="column">
              <img src={project2} alt="" className="project-image" />
              <div className="title">DailyPress</div>
              <div className="descc">
              DailyPress is a dynamic and comprehensive news platform that delivers daily updates across a wide spectrum of categories. From science and entertainment to sports, technology, games, and politics, DailyPress ensures users stay informed on the latest developments in their areas of interest. This news page offers a user-friendly interface for easy navigation and access to diverse news articles. With a commitment to providing timely and relevant information, DailyPress serves as a go-to source for those seeking a well-rounded daily news experience.
              </div>
            </div>
          </div>


        </section>
      </Element>
      <Element name="contact">
        <div className="div">
          <section className="contact-section">
            <h1>Contact Me</h1>
            <div className="contact-form">
              <form action="https://formspree.io/f/mjvnvyvj" method="POST">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" name="name" placeholder="Your Name" />
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
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