import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { readNavScrollOffset } from '../utils/readNavScrollOffset';
import '../styles/footer.css';

const scrollProps = {
  smooth: true,
  duration: 600,
};

const Footer = () => (
  <footer className="site-footer">
    <div className="site-footer-inner">
      <p className="site-footer-copy">© 2026 Muhammad Hashir. All rights reserved.</p>
      <ScrollLink
        to="home"
        className="site-footer-top"
        offset={readNavScrollOffset()}
        {...scrollProps}
      >
        Back to top
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M12 19V5M5 12l7-7 7 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </ScrollLink>
    </div>
  </footer>
);

export default Footer;
