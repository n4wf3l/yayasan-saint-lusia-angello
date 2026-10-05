export function Logo({ className = 'h-10 w-10' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      aria-hidden="true"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="logo-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ff9a38" />
          <stop offset="1" stopColor="#f06108" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="16" fill="url(#logo-grad)" />
      <path
        d="M32 46s-13-8.2-13-18.1C19 22 23.4 18 28.6 18c2.1 0 4.1 1 5.4 2.6C35.3 19 37.3 18 39.4 18 44.6 18 49 22 49 27.9 49 37.8 36 46 32 46z"
        fill="#fff"
        transform="translate(-4 0)"
      />
    </svg>
  )
}
