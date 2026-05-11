export function SoftwareIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      aria-hidden
    >
      <rect x="6" y="9" width="36" height="6.5" rx="1.2" />
      <rect x="11" y="20.5" width="26" height="6.5" rx="1.2" />
      <rect x="16" y="32" width="16" height="6.5" rx="1.2" />
      <line x1="3" y1="44" x2="45" y2="44" strokeOpacity="0.4" />
    </svg>
  )
}
