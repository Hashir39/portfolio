import React from 'react'
import { Element } from 'react-scroll';

function Contact() {
    return (
        <div className='container22' >
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
            
        </Element></div>
    )
}

export default Contact
