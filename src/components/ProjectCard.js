import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

const ProjectCard = ({
  image,
  title,
  description,
  git,
  technologies,
  category,
  index,
  featured = false,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewerOpen, setViewerOpen] = useState(false);
  const [canZoom, setCanZoom] = useState(
    () => typeof window.matchMedia === 'function'
      && window.matchMedia('(min-width: 720px)').matches,
  );
  const zoomRef = useRef(null);
  const closeRef = useRef(null);
  const slides = Array.isArray(image) ? image : [image];
  const hasCarousel = slides.length > 1;

  useEffect(() => {
    if (!hasCarousel || viewerOpen) {
      return undefined;
    }

    const intervalId = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4500);

    return () => clearInterval(intervalId);
  }, [hasCarousel, slides.length, viewerOpen]);

  useEffect(() => {
    if (typeof window.matchMedia !== 'function') {
      return undefined;
    }

    const query = window.matchMedia('(min-width: 720px)');
    const update = () => {
      setCanZoom(query.matches);
      if (!query.matches) {
        setViewerOpen(false);
      }
    };

    update();
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (!viewerOpen) {
      return undefined;
    }

    const onKey = (event) => {
      if (event.key === 'Escape') {
        setViewerOpen(false);
      } else if (event.key === 'ArrowRight' && slides.length > 1) {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
      } else if (event.key === 'ArrowLeft' && slides.length > 1) {
        setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
      }
    };

    const previousOverflow = document.body.style.overflow;
    const zoomButton = zoomRef.current;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKey);
    closeRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKey);
      zoomButton?.focus();
    };
  }, [viewerOpen, slides.length]);

  const showSlide = (step) => {
    setCurrentIndex((prev) => (prev + step + slides.length) % slides.length);
  };

  return (
    <article className={`project-card${featured ? ' project-card-featured' : ''}`}>
      <div className="project-media">
        <div className="project-slides">
          {slides.map((src, slideIndex) => (
            <img
              key={src}
              className={`project-image${slideIndex === currentIndex ? ' is-active' : ''}`}
              src={src}
              alt={`${title} screenshot ${slideIndex + 1}`}
            />
          ))}
        </div>
        <div className="project-media-overlay" aria-hidden="true" />
        {canZoom && (
          <button
            ref={zoomRef}
            type="button"
            className="project-zoom"
            aria-label={`View ${title} screenshot full size`}
            onClick={() => setViewerOpen(true)}
          />
        )}
        <div className="project-media-badges">
          {featured && <span className="project-badge project-badge-featured">Featured</span>}
          {category && <span className="project-badge">{category}</span>}
        </div>
        {hasCarousel && (
          <>
            <span className="project-slide-count" aria-live="polite">
              {currentIndex + 1}/{slides.length}
            </span>
            <div className="project-dots" role="tablist" aria-label={`${title} screenshots`}>
              {slides.map((_, slideIndex) => (
                <button
                  key={slideIndex}
                  type="button"
                  role="tab"
                  aria-selected={slideIndex === currentIndex}
                  aria-label={`Show screenshot ${slideIndex + 1}`}
                  className={`project-dot${slideIndex === currentIndex ? ' is-active' : ''}`}
                  onClick={() => setCurrentIndex(slideIndex)}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="project-body">
        <div className="project-index" aria-hidden="true">
          {String(index).padStart(2, '0')}
        </div>
        <h3 className="project-title">{title}</h3>
        <p className="project-desc">{description}</p>
        <ul className="project-tags">
          {technologies.filter((tag) => tag && tag.trim()).map((tag) => (
            <li key={tag} className="project-tag">
              {tag}
            </li>
          ))}
        </ul>
        <a
          href={git || '#'}
          target="_blank"
          rel="noopener noreferrer"
          className="project-github"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-1.005-.525-1.815-.18-2.295.075-.705.315-1.23.405-1.875.135-.645-.27-1.08-.99-1.005-1.965.075-.99.675-1.365 1.365-1.815a5.84 5.84 0 00-2.085-2.025c-.885-.375-1.8-.015-2.265.075-.015 0-.015 0-.03.015-1.635.765-2.25 2.25-2.04 3.99.405 3.045 2.355 4.155 4.365 4.725-.3.525-.555 1.08-.705 1.65-.165.645-.105 1.395-.03 1.95.045.315.255.675.825.57A8.203 8.203 0 0016.005 12c0-6.63-5.373-12-12.005-12z" />
          </svg>
          View on GitHub
        </a>
      </div>
      {canZoom && viewerOpen && createPortal(
        <div
          className="project-viewer"
          role="dialog"
          aria-modal="true"
          aria-label={`${title} screenshot ${currentIndex + 1} of ${slides.length}`}
        >
          <button
            type="button"
            className="project-viewer-backdrop"
            aria-label="Close full screenshot"
            onClick={() => setViewerOpen(false)}
          />
          <figure className="project-viewer-stage">
            <img
              className="project-viewer-image"
              src={slides[currentIndex]}
              alt={`${title} screenshot ${currentIndex + 1}`}
            />
            <figcaption className="project-viewer-caption">
              {title} · {currentIndex + 1}/{slides.length}
            </figcaption>
          </figure>
          {hasCarousel && (
            <button
              type="button"
              className="project-viewer-nav project-viewer-prev"
              aria-label="Previous screenshot"
              onClick={() => showSlide(-1)}
            >
              Prev
            </button>
          )}
          {hasCarousel && (
            <button
              type="button"
              className="project-viewer-nav project-viewer-next"
              aria-label="Next screenshot"
              onClick={() => showSlide(1)}
            >
              Next
            </button>
          )}
          <button
            ref={closeRef}
            type="button"
            className="project-viewer-close"
            onClick={() => setViewerOpen(false)}
          >
            Close
          </button>
        </div>,
        document.body,
      )}
    </article>
  );
};

export default ProjectCard;
