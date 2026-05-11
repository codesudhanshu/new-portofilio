export function StaffingIcon({ className = '' }: { className?: string }) {
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
      <line x1="12" y1="14" x2="36" y2="14" strokeOpacity="0.3" />
      <line x1="12" y1="14" x2="24" y2="28" />
      <line x1="36" y1="14" x2="24" y2="28" />
      <line x1="24" y1="28" x2="10" y2="40" />
      <line x1="24" y1="28" x2="38" y2="40" />
      <circle cx="12" cy="14" r="3" fill="currentColor" stroke="none" />
      <circle cx="36" cy="14" r="3" fill="currentColor" stroke="none" />
      <circle cx="24" cy="28" r="3.6" fill="currentColor" stroke="none" />
      <circle cx="10" cy="40" r="3" fill="currentColor" stroke="none" />
      <circle cx="38" cy="40" r="3" fill="currentColor" stroke="none" />
    </svg>
  )
}
