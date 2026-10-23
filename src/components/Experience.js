import React from 'react';
import experience from '../data/experience';
import '../styles/experience.css';

const Experience = () => (
  <section className="experience-section" aria-labelledby="experience-heading">
    <header className="experience-header">
      <h2 id="experience-heading" className="experience-title">
        Work Experience
      </h2>
      <span className="experience-title-line" aria-hidden="true" />
    </header>

    <div className="experience-panel">
      <ol className="experience-list">
        {experience.map((job, index) => (
          <li key={job.id} className="experience-item">
            <div className="experience-marker" aria-hidden="true">
              <span
                className={`experience-dot${job.current ? ' experience-dot-current' : ''}`}
              />
              {index < experience.length - 1 && <span className="experience-line" />}
            </div>

            <article
              className={`experience-card${job.current ? ' experience-card-current' : ''}`}
            >
              <div className="experience-card-head">
                <div className="experience-brand" aria-hidden="true">
                  {job.initial}
                </div>
                <div className="experience-head-text">
                  <div className="experience-title-row">
                    <h3 className="experience-role">{job.role}</h3>
                    {job.current && (
                      <span className="experience-live">Current</span>
                    )}
                  </div>
                  <p className="experience-company">{job.company}</p>
                </div>
              </div>

              <div className="experience-meta">
                <span className="experience-period">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M8 2v3M16 2v3M4 9h16M5 5h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                  {job.period}
                </span>
                <span className="experience-pill">{job.location}</span>
                {job.badge && (
                  <span className="experience-pill experience-pill-accent">{job.badge}</span>
                )}
              </div>

              <ul className="experience-highlights">
                {job.highlights.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default Experience;
