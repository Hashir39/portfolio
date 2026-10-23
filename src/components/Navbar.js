import React, { useEffect, useRef, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { readNavScrollOffset } from '../utils/readNavScrollOffset';
import '../styles/navbar.css';

const NAV_ITEMS = [
  { to: 'home', label: 'Home' },
  { to: 'about', label: 'Experience' },
  { to: 'skills', label: 'Skills' },
  { to: 'project', label: 'Projects' },
  { to: 'contact', label: 'Contact' },
];

const scrollProps = {
  smooth: true,
  duration: 600,
  spy: true,
  activeClass: 'is-active',
};

const Navbar = () => {
  const navLinksRef = useRef(null);
  const menuToggleRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollOffset, setScrollOffset] = useState(() => readNavScrollOffset());

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = '';
  };

  const toggleMenu = () => {
    setMenuOpen((open) => {
      const next = !open;
      document.body.style.overflow = next ? 'hidden' : '';
      return next;
    });
  };

  useEffect(() => {
    const syncScrollOffset = () => setScrollOffset(readNavScrollOffset());
    syncScrollOffset();
    window.addEventListener('resize', syncScrollOffset);
    return () => window.removeEventListener('resize', syncScrollOffset);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuOpen &&
        navLinksRef.current &&
        menuToggleRef.current &&
        !navLinksRef.current.contains(event.target) &&
        !menuToggleRef.current.contains(event.target)
      ) {
        closeMenu();
      }
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [menuOpen]);

  return (
    <header
      className={`site-header${scrolled ? ' site-header--scrolled' : ''}${menuOpen ? ' site-header--menu-open' : ''}`}
    >
      {menuOpen && (
        <button
          type="button"
          className="nav-backdrop"
          aria-label="Close menu"
          onClick={closeMenu}
        />
      )}

      <nav className="nav-shell" aria-label="Main">
        <ScrollLink
          to="home"
          className="nav-brand"
          {...scrollProps}
          offset={scrollOffset}
          onClick={closeMenu}
        >
          Hashir&apos;s Portfolio
        </ScrollLink>

        <div className="nav-desktop">
          <ul className="nav-list">
            {NAV_ITEMS.map(({ to, label }) => (
              <li key={to}>
                <ScrollLink
                  to={to}
                  className="nav-link"
                  offset={scrollOffset}
                  {...scrollProps}
                >
                  {label}
                </ScrollLink>
              </li>
            ))}
          </ul>
          <ScrollLink
            to="contact"
            className="nav-cta"
            offset={scrollOffset}
            {...scrollProps}
          >
            Let&apos;s talk
          </ScrollLink>
        </div>

        <button
          ref={menuToggleRef}
          type="button"
          className={`nav-toggle${menuOpen ? ' is-open' : ''}`}
          onClick={toggleMenu}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div
        id="mobile-nav"
        ref={navLinksRef}
        className={`nav-mobile${menuOpen ? ' is-open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <ul className="nav-mobile-list">
          {NAV_ITEMS.map(({ to, label }) => (
            <li key={to}>
              <ScrollLink
                to={to}
                className="nav-mobile-link"
                offset={scrollOffset}
                {...scrollProps}
                onClick={closeMenu}
              >
                {label}
              </ScrollLink>
            </li>
          ))}
        </ul>
        <ScrollLink
          to="contact"
          className="nav-mobile-cta"
          offset={scrollOffset}
          {...scrollProps}
          onClick={closeMenu}
        >
          Let&apos;s talk
        </ScrollLink>
      </div>
    </header>
  );
};

export default Navbar;
