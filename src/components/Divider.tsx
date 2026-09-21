export function PetalDivider() {
  return (
    <div className="relative flex justify-center py-16" aria-hidden>
      <svg width="180" height="40" viewBox="0 0 180 40" fill="none">
        <defs>
          <linearGradient id="lineGrad" x1="0" x2="1">
            <stop offset="0%" stopColor="var(--pink-primary)" stopOpacity="0" />
            <stop offset="50%" stopColor="var(--pink-primary)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="var(--pink-primary)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <line x1="0" y1="20" x2="70" y2="20" stroke="url(#lineGrad)" />
        <line x1="110" y1="20" x2="180" y2="20" stroke="url(#lineGrad)" />
        <g transform="translate(90 20)">
          {[0, 90, 180, 270].map((r) => (
            <path
              key={r}
              d="M0 0 Q 6 -2 8 -10 Q 2 -6 0 0 Z"
              fill="var(--pink-primary)"
              opacity="0.7"
              transform={`rotate(${r})`}
            />
          ))}
          <circle r="2" fill="var(--pink-secondary)" />
        </g>
      </svg>
    </div>
  );
}
