export function MarketingIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <line x1="6" y1="40" x2="6" y2="32" />
      <line x1="14" y1="40" x2="14" y2="26" />
      <line x1="22" y1="40" x2="22" y2="18" />
      <line x1="30" y1="40" x2="30" y2="22" />
      <line x1="38" y1="40" x2="38" y2="10" />
      <path d="M6 28 L14 22 L22 14 L30 18 L38 8" />
      <circle cx="38" cy="8" r="2.5" fill="currentColor" stroke="none" />
      <line x1="3" y1="44" x2="45" y2="44" strokeOpacity="0.4" />
    </svg>
  )
}
