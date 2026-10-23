import React, { useState } from 'react';
import { Element } from 'react-scroll';
import '../styles/contact.css';

const emptyFields = { name: '', email: '', message: '' };

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const socialLinks = [
  {
    href: 'https://github.com/Hashir39',
    label: 'GitHub profile',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    href: 'https://www.linkedin.com/in/muhammad-hashir-4b3959268/',
    label: 'LinkedIn profile',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    href: 'https://www.facebook.com/profile.php?id=100012776148523',
    label: 'Facebook profile',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
];

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
    <Element name="contact" className="contact-scroll-target">
      <section className="contact-section" aria-labelledby="contact-heading">
        <header className="contact-header">
          <h2 id="contact-heading" className="contact-title">
            Contact Me
          </h2>
          <span className="contact-title-line" aria-hidden="true" />
        </header>

        <div className="contact-panel">
          <div className="contact-layout">
            <aside className="contact-info">
              <p className="contact-lead">
                Have a project in mind, a role to discuss, or freelance work? Send a
                message — I usually reply within a day.
              </p>

              <ul className="contact-meta">
                <li className="contact-meta-item">
                  <span className="contact-meta-icon" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </span>
                  <div>
                    <span className="contact-meta-label">Location</span>
                    <p className="contact-meta-value">Karachi, Pakistan · Remote-friendly</p>
                  </div>
                </li>
                <li className="contact-meta-item">
                  <span className="contact-meta-icon" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="7" width="20" height="14" rx="2" />
                      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                    </svg>
                  </span>
                  <div>
                    <span className="contact-meta-label">Focus</span>
                    <p className="contact-meta-value">
                      Full-stack web apps, APIs, DevOps &amp; product UI
                    </p>
                  </div>
                </li>
              </ul>

              <div className="contact-social-block">
                <p className="contact-social-label">Connect</p>
                <div className="contact-social">
                  {socialLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-social-link"
                      aria-label={link.label}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </aside>

            <div className="contact-form-card">
              <h3 className="contact-form-title">Send a message</h3>
              <form
                action="https://formspree.io/f/mjvnvyvj"
                method="POST"
                className="contact-form"
                onSubmit={handleSubmit}
                noValidate
              >
                <div className="contact-field">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    autoComplete="name"
                    value={values.name}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.name)}
                    className={errors.name ? 'invalid' : undefined}
                  />
                  {errors.name && (
                    <p className="contact-field-error" role="alert">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div className="contact-field">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    value={values.email}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.email)}
                    className={errors.email ? 'invalid' : undefined}
                  />
                  {errors.email && (
                    <p className="contact-field-error" role="alert">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div className="contact-field">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Tell me about your project or opportunity…"
                    value={values.message}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.message)}
                    className={errors.message ? 'invalid' : undefined}
                  />
                  {errors.message && (
                    <p className="contact-field-error" role="alert">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button className="contact-submit" type="submit">
                  Send message
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M22 2 11 13" />
                    <path d="M22 2 15 22 11 13 2 9 22 2z" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
}

export default Contact;
