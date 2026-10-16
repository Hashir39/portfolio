import React, { useState } from 'react'
import { Element } from 'react-scroll';

const emptyFields = { name: '', email: '', message: '' };

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

function Contact() {
    const [values, setValues] = useState(emptyFields);
    const [errors, setErrors] = useState(emptyFields);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues((current) => ({ ...current, [name]: value }));
        setErrors((current) => ({ ...current, [name]: '' }));
    };

    const validate = () => {
        const nextErrors = { ...emptyFields };
        if (!values.name.trim()) {
            nextErrors.name = 'Please enter your name.';
        }
        if (!values.email.trim()) {
            nextErrors.email = 'Please enter your email.';
        } else if (!isValidEmail(values.email.trim())) {
            nextErrors.email = 'Please enter a valid email address.';
        }
        if (!values.message.trim()) {
            nextErrors.message = 'Please enter a message.';
        }
        return nextErrors;
    };

    const handleSubmit = (event) => {
        const nextErrors = validate();
        if (nextErrors.name || nextErrors.email || nextErrors.message) {
            event.preventDefault();
            setErrors(nextErrors);
        }
    };

    return (
        
        <Element name="contact">
            
            <section className="contact-section mt-24">
                <h1 className='cursor-pointer hover:text-blue-300 '>Contact Me</h1>
                <form action="https://formspree.io/f/mjvnvyvj" method="POST" className='contact-form' onSubmit={handleSubmit} noValidate>
                    <label htmlFor="name" className='hover:text-yellow-50'>Your Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your Name"
                        autoComplete="name"
                        value={values.name}
                        onChange={handleChange}
                        aria-invalid={Boolean(errors.name)}
                        className={errors.name ? 'invalid' : undefined}
                    />
                    {errors.name && <p className="field-error">{errors.name}</p>}
                    <label htmlFor="email" className='hover:text-yellow-50'>Your Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Your Email"
                        autoComplete="email"
                        value={values.email}
                        onChange={handleChange}
                        aria-invalid={Boolean(errors.email)}
                        className={errors.email ? 'invalid' : undefined}
                    />
                    {errors.email && <p className="field-error">{errors.email}</p>}
                    <label htmlFor="message" className='hover:text-yellow-50'>Message</label>
                    <textarea
                        id="message"
                        name="message"
                        rows="5"
                        placeholder="Your Message"
                        value={values.message}
                        onChange={handleChange}
                        aria-invalid={Boolean(errors.message)}
                        className={errors.message ? 'invalid' : undefined}
                    ></textarea>
                    {errors.message && <p className="field-error">{errors.message}</p>}
                    <button className="btn" type="submit">
                        Submit
                    </button>
                    <div className="imgggg cursor-pointer">
                        <a href="https://github.com/Hashir39" target="_blank" rel="noopener noreferrer">
                            <img src="/images/github.png" alt="Github" className='imgss' />
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=100012776148523" target="_blank" rel="noopener noreferrer">
                            <img src="/images/facebook.png" alt="Facebook" className='imgss' />
                        </a>
                
                        <a href="https://www.linkedin.com/in/muhammad-hashir-4b3959268/" target="_blank" rel="noopener noreferrer">
                            <img src="/images/linkedin.png" alt="Linkedin" className='imgss' />
                        </a>
                    </div>
                </form>

            </section>
        </Element>
    )
}


export default Contact
