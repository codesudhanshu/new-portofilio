import Link from 'next/link'
import Image from 'next/image'
import { company, nav } from '@/lib/copy'

export function Footer() {
  return (
    <footer className="border-t border-cream/10 bg-[#080C0A] pt-16 pb-10 text-cream">
      <div className="container-x grid gap-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <Link href="/" className="inline-flex items-center">
            <Image
              src="/logo.png"
              alt="Biech Software Technologies"
              width={160}
              height={64}
              className="h-12 w-auto object-contain"
            />
          </Link>

          <p className="mt-5 text-xs uppercase tracking-[0.18em] text-cream/45">
            {company.tagline}
          </p>

          {/* Contact details with icons */}
          <ul className="mt-5 space-y-3.5 text-sm">
            <li>
              <a
                href={`mailto:${company.email}`}
                className="flex items-start gap-3 text-cream/75 transition-colors hover:text-vermilion"
              >
                {/* Email icon */}
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-vermilion" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                  <rect x="2" y="4" width="16" height="12" rx="2" />
                  <path d="M2 7l8 5 8-5" />
                </svg>
                <span className="break-all">{company.email}</span>
              </a>
            </li>
            <li>
              <a
                href={`tel:${company.phone}`}
                className="flex items-center gap-3 text-cream/75 transition-colors hover:text-vermilion"
              >
                {/* Phone icon */}
                <svg className="h-4 w-4 shrink-0 text-vermilion" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                  <path d="M3 4a1 1 0 011-1h2.5a1 1 0 011 .75l.75 3a1 1 0 01-.29.97l-1.1 1.1a11 11 0 004.28 4.28l1.1-1.1a1 1 0 01.97-.29l3 .75A1 1 0 0117 13.5V16a1 1 0 01-1 1C7.16 17 3 12.84 3 8V4z" />
                </svg>
                {company.phone}
              </a>
            </li>
            <li className="flex items-start gap-3 text-cream/65">
              {/* Location icon */}
              <svg className="mt-0.5 h-4 w-4 shrink-0 text-vermilion" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                <path d="M10 2a6 6 0 016 6c0 4.5-6 10-6 10S4 12.5 4 8a6 6 0 016-6z" />
                <circle cx="10" cy="8" r="2" />
              </svg>
              <span>
                {company.address.line1}<br />
                {company.address.line2}
              </span>
            </li>
            <li className="flex items-center gap-3 text-cream/55">
              {/* GST / receipt icon */}
              <svg className="h-4 w-4 shrink-0 text-vermilion" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                <rect x="4" y="2" width="12" height="16" rx="1.5" />
                <path d="M7 7h6M7 10h6M7 13h4" />
              </svg>
              <span>GST: {company.gst}</span>
            </li>
          </ul>
        </div>
        <div className="md:col-span-3">
          <p className="mb-4 font-sans text-xs uppercase tracking-[0.18em] text-cream/55">
            <span className="text-vermilion">▸</span> Studio
          </p>
          <ul className="space-y-2.5 text-sm">
            <li>
              <Link
                href="/work"
                className="text-cream/75 transition-colors hover:text-vermilion"
              >
                Our Work
              </Link>
            </li>
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
        <div className="flex items-center gap-5">
          <Link
            href="/privacy-policy"
            className="transition-colors hover:text-cream"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="transition-colors hover:text-cream"
          >
            Terms & Conditions
          </Link>
          <span className="font-medium tracking-wide text-cream/45">
            Crafted in Noida
          </span>
        </div>
      </div>
    </footer>
  )
}
