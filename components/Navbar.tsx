'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { nav } from '@/lib/copy'

export function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  // The home page has a dark matrix-rain hero behind the navbar at scrollTop.
  // Use cream text in that state so the nav remains legible. Once scrolled
  // past the hero, the cream backdrop kicks in and ink text returns.
  const overDarkHero = pathname === '/' && !scrolled

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'border-b border-ink/10 bg-cream/75 backdrop-blur-md text-ink'
          : overDarkHero
            ? 'border-b border-cream/10 bg-[#080C0A]/55 backdrop-blur-md text-cream'
            : 'border-b border-transparent text-ink'
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between">
        <Link
          href="/"
          aria-label="Biech home"
          className="text-display text-2xl tracking-tightest"
        >
          biech<span className="text-vermilion">.</span>
        </Link>

        <ul className="hidden items-center gap-9 md:flex">
          <li
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              className="text-sm transition-colors hover:text-vermilion"
              aria-haspopup="true"
              aria-expanded={servicesOpen}
            >
              Services
            </button>
            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18, ease: 'easeOut' }}
                  className="absolute left-1/2 top-full -translate-x-1/2 pt-3"
                >
                  <div className="w-72 rounded-2xl border border-ink/10 bg-cream p-2 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.18)]">
                    {nav.serviceLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block rounded-xl px-4 py-3 text-sm transition-colors hover:bg-muted hover:text-vermilion"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
          <li>
            <Link
              href="/about"
              className="text-sm transition-colors hover:text-vermilion"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-sm transition-colors hover:text-vermilion"
            >
              Contact
            </Link>
          </li>
        </ul>

        <div className="hidden md:block">
          <Link
            href="/contact"
            className="inline-flex h-9 items-center rounded-full bg-vermilion px-5 text-xs font-medium text-cream transition-colors hover:bg-ink"
          >
            Get a Quote
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          className="md:hidden"
          aria-label="Open menu"
        >
          <svg width="24" height="14" viewBox="0 0 24 14" fill="none" aria-hidden>
            <line x1="0" y1="1" x2="24" y2="1" stroke="currentColor" strokeWidth="1.4" />
            <line x1="0" y1="7" x2="24" y2="7" stroke="currentColor" strokeWidth="1.4" />
            <line x1="0" y1="13" x2="14" y2="13" stroke="currentColor" strokeWidth="1.4" />
          </svg>
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-50 bg-cream md:hidden"
          >
            <div className="container-x flex h-16 items-center justify-between">
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className="text-display text-2xl tracking-tightest"
              >
                biech<span className="text-vermilion">.</span>
              </Link>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden>
                  <path
                    d="M2 2 L20 20 M20 2 L2 20"
                    stroke="currentColor"
                    strokeWidth="1.4"
                  />
                </svg>
              </button>
            </div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.06 } },
              }}
              className="container-x mt-8 flex flex-col gap-5"
            >
              {[
                { href: '/services/software-development', label: 'Software Development' },
                { href: '/services/digital-marketing', label: 'Digital Marketing' },
                { href: '/services/staffing-solutions', label: 'Staffing Solutions' },
              ].map((item) => (
                <motion.div
                  key={item.href}
                  variants={{
                    hidden: { opacity: 0, y: 16 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-display text-3xl leading-tight"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <div className="my-4 h-px w-full bg-ink/10" />
              {[
                { href: '/about', label: 'About' },
                { href: '/contact', label: 'Contact' },
              ].map((item) => (
                <motion.div
                  key={item.href}
                  variants={{
                    hidden: { opacity: 0, y: 16 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-2xl"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-4 inline-flex h-12 w-full items-center justify-center rounded-full bg-vermilion text-sm font-medium text-cream"
              >
                Get a Quote
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
