export function CanvasSkeleton() {
  return (
    <div
      aria-hidden
      className="absolute inset-0 h-full w-full animate-skeleton-pulse rounded-3xl bg-canvas"
    >
      <div className="absolute inset-0 scrim-radial opacity-40" />
    </div>
  )
}
