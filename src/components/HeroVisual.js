import React from 'react';
import '../styles/hero.css';

const TECH_BADGES = [
  { label: 'Next.js', x: 8, y: 62, w: 82, delay: 'hero-float-1' },
  { label: 'React', x: 390, y: 62, w: 78, delay: 'hero-float-2' },
  { label: 'Node.js', x: 6, y: 156, w: 86, delay: 'hero-float-3' },
  { label: 'AWS', x: 396, y: 156, w: 72, delay: 'hero-float-4' },
  { label: 'CI/CD', x: 204, y: 332, w: 72, delay: 'hero-float-5' },
];

const HeroVisual = () => (
  <div className="hero-visual">
    <div className="hero-visual-glow" aria-hidden="true" />
    <svg
      className="hero-visual-svg"
      viewBox="0 0 480 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Illustration: full-stack development, APIs, and cloud deployment"
    >
      <defs>
        <linearGradient id="hero-screen" x1="120" y1="80" x2="360" y2="280" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1e2534" />
          <stop offset="1" stopColor="#141a26" />
        </linearGradient>
        <linearGradient id="hero-accent" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#8b9cf6" />
          <stop offset="1" stopColor="#6366f1" />
        </linearGradient>
        <filter id="hero-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="12" stdDeviation="16" floodColor="#000" floodOpacity="0.45" />
        </filter>
      </defs>

      <g filter="url(#hero-shadow)">
        <rect x="104" y="52" width="272" height="236" rx="16" fill="url(#hero-screen)" stroke="rgba(139,156,246,0.35)" strokeWidth="2" />
        <rect x="120" y="84" width="240" height="180" rx="8" fill="#0f141f" />
        <rect x="104" y="288" width="272" height="12" rx="4" fill="#252d3e" />
        <rect x="210" y="300" width="60" height="8" rx="2" fill="#323a4d" />
      </g>

      <rect x="104" y="52" width="272" height="26" rx="16" fill="#171d2a" />
      <circle cx="122" cy="65" r="4.5" fill="#f87171" />
      <circle cx="136" cy="65" r="4.5" fill="#fbbf24" />
      <circle cx="150" cy="65" r="4.5" fill="#34d399" />
      <text x="132" y="106" fill="#6366f1" fontFamily="monospace" fontSize="10" opacity="0.9">
        # deploy.yml
      </text>
      <text x="132" y="124" fill="#a5b4fc" fontFamily="monospace" fontSize="10">
        - run: npm run build
      </text>
      <text x="132" y="142" fill="#a5b4fc" fontFamily="monospace" fontSize="10">
        - run: amplify publish
      </text>

      <rect x="132" y="154" width="216" height="1" fill="#2a3142" />

      <text x="132" y="172" fill="#34d399" fontFamily="monospace" fontSize="10">
        GET /api/users
      </text>
      <text x="132" y="190" fill="#8791a4" fontFamily="monospace" fontSize="10">
        Express · REST
      </text>
      <text x="132" y="210" fill="#c9d2e0" fontFamily="monospace" fontSize="10" opacity="0.85">
        {'// Hashir · Full Stack'}
      </text>
      <text x="132" y="228" fill="#8b9cf6" fontFamily="monospace" fontSize="10">
        Next · React · Node
      </text>

      <g className="hero-pipeline">
        <rect x="132" y="240" width="52" height="20" rx="6" fill="rgba(139,156,246,0.15)" stroke="rgba(139,156,246,0.35)" />
        <text x="142" y="254" fill="#b4c0ff" fontFamily="monospace" fontSize="9">build</text>
        <path d="M188 250h16" stroke="#4b5568" strokeWidth="2" strokeDasharray="4 3" />
        <rect x="208" y="240" width="46" height="20" rx="6" fill="rgba(139,156,246,0.15)" stroke="rgba(139,156,246,0.35)" />
        <text x="218" y="254" fill="#b4c0ff" fontFamily="monospace" fontSize="9">test</text>
        <path d="M258 250h16" stroke="#4b5568" strokeWidth="2" strokeDasharray="4 3" />
        <rect x="278" y="240" width="64" height="20" rx="6" fill="rgba(52,211,153,0.12)" stroke="rgba(52,211,153,0.4)" />
        <text x="288" y="254" fill="#6ee7b7" fontFamily="monospace" fontSize="9">deploy</text>
      </g>

      {TECH_BADGES.map(({ label, x, y, w, delay }) => (
        <g key={label} className={`hero-float ${delay}`}>
          <rect
            x={x}
            y={y}
            width={w}
            height={34}
            rx="10"
            fill="#1a2130"
            stroke="rgba(139,156,246,0.4)"
            strokeWidth="1.5"
          />
          <text
            x={x + 14}
            y={y + 22}
            fill="#b4c0ff"
            fontFamily="Poppins, sans-serif"
            fontSize="12"
            fontWeight="600"
          >
            {label}
          </text>
        </g>
      ))}

      <ellipse cx="240" cy="368" rx="130" ry="14" fill="#000" opacity="0.22" />
    </svg>
    <div className="hero-visual-meta">
      <p>Remote Full-Stack at Terapage</p>
      <p>Top Rated on Upwork</p>
    </div>
  </div>
);

export default HeroVisual;
