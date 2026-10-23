import React from 'react';
import '../styles/hero.css';

const TECH_BADGES = [
  { label: 'Next.js', x: 24, y: 128, w: 82, delay: 'hero-float-1' },
  { label: 'React', x: 368, y: 118, w: 72, delay: 'hero-float-2' },
  { label: 'Node.js', x: 20, y: 262, w: 88, delay: 'hero-float-3' },
  { label: 'AWS', x: 372, y: 252, w: 72, delay: 'hero-float-4' },
  { label: 'CI/CD', x: 196, y: 318, w: 72, delay: 'hero-float-5' },
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
        <rect x="72" y="88" width="336" height="232" rx="16" fill="url(#hero-screen)" stroke="rgba(139,156,246,0.35)" strokeWidth="2" />
        <rect x="92" y="108" width="296" height="176" rx="8" fill="#0f141f" />
        <rect x="72" y="320" width="336" height="14" rx="4" fill="#252d3e" />
        <rect x="208" y="334" width="64" height="8" rx="2" fill="#323a4d" />
      </g>

      <rect x="92" y="88" width="336" height="28" rx="16" fill="#171d2a" />
      <circle cx="112" cy="102" r="5" fill="#f87171" />
      <circle cx="128" cy="102" r="5" fill="#fbbf24" />
      <circle cx="144" cy="102" r="5" fill="#34d399" />
      <text x="108" y="138" fill="#6366f1" fontFamily="monospace" fontSize="10" opacity="0.9">
        # .github/workflows/deploy.yml
      </text>
      <text x="108" y="154" fill="#a5b4fc" fontFamily="monospace" fontSize="10">
        - run: npm run build
      </text>
      <text x="108" y="170" fill="#a5b4fc" fontFamily="monospace" fontSize="10">
        - run: aws amplify publish
      </text>

      <rect x="108" y="182" width="276" height="1" fill="#2a3142" />

      <text x="108" y="198" fill="#34d399" fontFamily="monospace" fontSize="10">
        GET /api/users
      </text>
      <text x="108" y="214" fill="#8791a4" fontFamily="monospace" fontSize="10">
        Express · REST · secure session
      </text>
      <text x="108" y="234" fill="#c9d2e0" fontFamily="monospace" fontSize="10" opacity="0.85">
        {'// Muhammad Hashir — Full Stack + DevOps'}
      </text>
      <text x="108" y="252" fill="#8b9cf6" fontFamily="monospace" fontSize="10">
        stack: Next.js | React | Node | Tailwind
      </text>

      <g className="hero-pipeline">
        <rect x="108" y="264" width="52" height="22" rx="6" fill="rgba(139,156,246,0.15)" stroke="rgba(139,156,246,0.35)" />
        <text x="118" y="279" fill="#b4c0ff" fontFamily="monospace" fontSize="9">build</text>
        <path d="M168 275h24" stroke="#4b5568" strokeWidth="2" strokeDasharray="4 3" />
        <rect x="196" y="264" width="52" height="22" rx="6" fill="rgba(139,156,246,0.15)" stroke="rgba(139,156,246,0.35)" />
        <text x="204" y="279" fill="#b4c0ff" fontFamily="monospace" fontSize="9">test</text>
        <path d="M256 275h24" stroke="#4b5568" strokeWidth="2" strokeDasharray="4 3" />
        <rect x="284" y="264" width="64" height="22" rx="6" fill="rgba(52,211,153,0.12)" stroke="rgba(52,211,153,0.4)" />
        <text x="292" y="279" fill="#6ee7b7" fontFamily="monospace" fontSize="9">deploy</text>
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
