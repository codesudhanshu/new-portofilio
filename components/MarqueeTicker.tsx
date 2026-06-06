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
          ? 'overflow-hidden border-y border-white/8 bg-[#0F1624] py-7'
          : 'overflow-hidden border-y border-white/8 bg-[#0F1624] py-7'
      }
    >
      <div className="flex w-max animate-marquee items-center gap-12 whitespace-nowrap">
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-12">
            <span
              className={
                isDark
                  ? 'text-sm font-semibold uppercase tracking-widest text-white/50'
                  : 'text-sm font-semibold uppercase tracking-widest text-white/30'
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
