import React from 'react'
import { Element } from 'react-scroll';


function Contact() {
    return (
        
        <Element name="contact">
            
            <section className="contact-section mt-24">
                <h1 className='cursor-pointer hover:text-blue-300 '>Contact Me</h1>
                <form action="https://formspree.io/f/mjvnvyvj" method="POST" className='contact-form'>
                    <label htmlFor="name" className='hover:text-yellow-50'>Your Name</label>
                    <input type="text" id="name" name="name" placeholder="Your Name" autoComplete="name" />
                    <label htmlFor="email" className='hover:text-yellow-50'>Your Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Your Email"
                        autoComplete="Your Email"
                    />
                    <label htmlFor="message" className='hover:text-yellow-50'>Message</label>
                    <textarea
                        id="message"
                        name="message"
                        rows="5"
                        placeholder="Your Message"
                    ></textarea>
                    <button className="btn" type="submit">
                        Submit
                    </button>
                    <div className="imgggg cursor-pointer">
                        <a href="https://github.com/Hashir39" target="_blank" rel="noopener noreferrer">
                            <img src="./github.png" alt="Github" className='imgss' />
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=100012776148523" target="_blank" rel="noopener noreferrer">
                            <img src="./fb.png" alt="Facebook" className='imgss' />
                        </a>
                
                        <a href="https://www.linkedin.com/in/muhammad-hashir-4b3959268/" target="_blank" rel="noopener noreferrer">
                            <img src="./linkedin (2).png" alt="Linkedin" className='imgss' />
                        </a>
                    </div>
                </form>

            </section>
        </Element>
    )
}


export default Contact

