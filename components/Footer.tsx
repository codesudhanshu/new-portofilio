import Link from 'next/link'
import { company, nav } from '@/lib/copy'

export function Footer() {
  return (
    <footer className="border-t border-cream/10 bg-[#080C0A] pt-16 pb-10 text-cream">
      <div className="container-x grid gap-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <Link
            href="/"
            className="text-display text-2xl tracking-[-0.02em] text-cream"
          >
            biech<span className="text-vermilion">.</span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream/65">
            A studio for work worth doing well. {company.tagline} ·{' '}
            {company.city}.
          </p>
          <a
            href={`mailto:${company.email}`}
            className="mt-6 inline-block text-display text-2xl leading-snug tracking-[-0.02em] text-cream transition-colors hover:text-vermilion"
          >
            {company.email}
          </a>
        </div>
        <div className="md:col-span-3">
          <p className="mb-4 font-sans text-xs uppercase tracking-[0.18em] text-cream/55">
            <span className="text-vermilion">▸</span> Studio
          </p>
          <ul className="space-y-2.5 text-sm">
            <li>
              <Link
                href="/about"
                className="text-cream/75 transition-colors hover:text-vermilion"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-cream/75 transition-colors hover:text-vermilion"
              >
                Contact
              </Link>
            </li>
            <li className="text-cream/45">
              {company.address.line1}
              <br />
              {company.address.line2}
            </li>
          </ul>
        </div>
        <div className="md:col-span-4">
          <p className="mb-4 font-sans text-xs uppercase tracking-[0.18em] text-cream/55">
            <span className="text-vermilion">▸</span> Services
          </p>
          <ul className="space-y-2.5 text-sm">
            {nav.serviceLinks.map((s) => (
              <li key={s.href}>
                <Link
                  href={s.href}
                  className="text-cream/75 transition-colors hover:text-vermilion"
                >
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container-x mt-14 flex flex-col-reverse items-start justify-between gap-3 border-t border-cream/10 pt-6 text-xs text-cream/45 md:flex-row md:items-center">
        <span>
          © {new Date().getFullYear()} {company.legal} · {company.city}
        </span>
        <span className="font-medium tracking-wide text-cream/45">
          Crafted in Noida
        </span>
      </div>
    </footer>
  )
}
