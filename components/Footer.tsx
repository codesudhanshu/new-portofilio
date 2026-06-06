'use client'

import Link from 'next/link'
import Image from 'next/image'
import { company, nav } from '@/lib/copy'

export function Footer() {
  return (
    <footer className="border-t border-white/8 bg-[#0A0A0A] pt-16 pb-8">
      <div className="container-x">
        {/* Main grid */}
        <div className="grid gap-10 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-4">
            <Link href="/" className="inline-flex items-center">
              <Image src="/logo.png" alt="Biech Software Technologies" width={180} height={72} className="h-12 w-auto object-contain" />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/45">
              AI-powered software, marketing, and talent solutions for ambitious companies. Greater Noida · Est. 2015.
            </p>
            {/* Social links */}
            <div className="mt-6 flex items-center gap-3">
              {[
                { label: 'LinkedIn', icon: <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />, extra: <circle cx="4" cy="4" r="2" /> },
                { label: 'Twitter', icon: <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" /> },
                { label: 'GitHub', icon: <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" /> },
              ].map((s) => (
                <a key={s.label} href="#" aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/50 transition-all hover:border-[#1163fb]/40 hover:bg-[#1163fb]/10 hover:text-[#4d8ffc]">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden>
                    {s.icon}
                    {s.extra}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="md:col-span-2">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-white/35">Services</p>
            <ul className="mt-4 space-y-2.5">
              {nav.serviceLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/55 transition-colors hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-2">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-white/35">Company</p>
            <ul className="mt-4 space-y-2.5">
              {[
                { href: '/work', label: 'Our Work' },
                { href: '/blog', label: 'Blog' },
                { href: '/about', label: 'About' },
                { href: '/contact', label: 'Contact' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/55 transition-colors hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-white/35">Stay updated</p>
            <p className="mt-4 text-sm text-white/45">Get our latest insights on software, marketing, and tech delivered to your inbox.</p>
            <form className="mt-4 flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-[#1163fb]/50 focus:bg-white/8"
              />
              <button type="submit"
                className="rounded-lg px-4 py-2.5 text-sm font-semibold text-white transition-all"
                style={{ background: 'linear-gradient(135deg, #1163fb, #0c4fcb)' }}>
                →
              </button>
            </form>
            <div className="mt-6 space-y-2">
              <a href={`mailto:${company.email}`} className="flex items-center gap-2 text-sm text-white/45 transition-colors hover:text-white">
                <svg className="h-3.5 w-3.5 text-[#4d8ffc]" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                  <rect x="2" y="4" width="16" height="12" rx="2" /><path d="M2 7l8 5 8-5" />
                </svg>
                {company.email}
              </a>
              <a href={`tel:${company.phone}`} className="flex items-center gap-2 text-sm text-white/45 transition-colors hover:text-white">
                <svg className="h-3.5 w-3.5 text-[#4d8ffc]" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                  <path d="M3 4a1 1 0 011-1h2.5a1 1 0 011 .75l.75 3a1 1 0 01-.29.97l-1.1 1.1a11 11 0 004.28 4.28l1.1-1.1a1 1 0 01.97-.29l3 .75A1 1 0 0117 13.5V16a1 1 0 01-1 1C7.16 17 3 12.84 3 8V4z" />
                </svg>
                {company.phone}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col-reverse items-start justify-between gap-3 border-t border-white/8 pt-6 text-xs text-white/25 md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} {company.legal} · Est. {company.founded} · {company.city}</span>
          <div className="flex items-center gap-5">
            <Link href="/privacy-policy" className="transition-colors hover:text-white/60">Privacy Policy</Link>
            <Link href="/terms" className="transition-colors hover:text-white/60">Terms & Conditions</Link>
            <span className="text-white/20">GST: {company.gst}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
