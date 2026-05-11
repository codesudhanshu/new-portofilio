export function MarqueeTicker({
  items,
  tone = 'light',
}: {
  items: readonly string[]
  tone?: 'light' | 'dark'
}) {
  // Two copies for seamless loop — animation translates -50% which is exactly
  // the width of one set of items.
  const doubled = [...items, ...items]
  const isDark = tone === 'dark'
  return (
    <div
      className={
        isDark
          ? 'overflow-hidden border-y border-cream/10 bg-[#0A0E0D] py-7'
          : 'overflow-hidden border-y border-ink/10 bg-cream py-7'
      }
    >
      <div className="flex w-max animate-marquee items-center gap-12 whitespace-nowrap">
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-12">
            <span
              className={
                isDark
                  ? 'text-display text-2xl text-cream/60'
                  : 'text-display text-2xl text-ink/60'
              }
            >
              {item}
            </span>
            <span
              className="h-1.5 w-1.5 shrink-0 rounded-full bg-vermilion/70"
              aria-hidden
            />
          </div>
        ))}
      </div>
    </div>
  )
}
