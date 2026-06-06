'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { nav } from '@/lib/copy'

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'border-b border-white/8 bg-[#0A0A0A]/90 backdrop-blur-xl shadow-[0_1px_30px_rgba(0,0,0,0.4)]'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <nav className="container-x flex h-16 items-center justify-between">
          <Link href="/" aria-label="Biech home">
            <Image src="/logo.png" alt="Biech Software Technologies" width={160} height={64} className="h-12 w-auto object-contain" priority />
          </Link>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-1 md:flex">
            <li className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
              <button type="button"
                className="rounded-lg px-4 py-2 text-sm font-medium text-white/70 transition-colors hover:bg-white/6 hover:text-white"
                aria-haspopup="true" aria-expanded={servicesOpen}>
                Services ▾
              </button>
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }} transition={{ duration: 0.15 }}
                    className="absolute left-1/2 top-full -translate-x-1/2 pt-2"
                  >
                    <div className="glass w-64 rounded-2xl p-2 shadow-[0_24px_60px_rgba(0,0,0,0.6)]">
                      {nav.serviceLinks.map((link) => (
                        <Link key={link.href} href={link.href}
                          className="block rounded-xl px-4 py-2.5 text-sm font-medium text-white/65 transition-colors hover:bg-white/8 hover:text-white">
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
            {[{ href: '/work', label: 'Work' }, { href: '/blog', label: 'Blog' }, { href: '/about', label: 'About' }, { href: '/contact', label: 'Contact' }].map(l => (
              <li key={l.href}>
                <Link href={l.href} className="rounded-lg px-4 py-2 text-sm font-medium text-white/70 transition-colors hover:bg-white/6 hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <Link href="/contact" className="btn-primary h-10 px-5 text-xs">
              Get a Quote
            </Link>
          </div>

          {/* Hamburger */}
          <button type="button" onClick={() => setMobileOpen(true)} className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 md:hidden" aria-label="Open menu">
            <svg width="18" height="12" viewBox="0 0 18 12" fill="none" aria-hidden>
              <line x1="0" y1="1" x2="18" y2="1" stroke="white" strokeWidth="1.5" />
              <line x1="0" y1="6" x2="18" y2="6" stroke="white" strokeWidth="1.5" />
              <line x1="0" y1="11" x2="12" y2="11" stroke="white" strokeWidth="1.5" />
            </svg>
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
            transition={{ duration: 0.28, ease: [0.65, 0, 0.35, 1] }}
            className="fixed inset-0 z-50 bg-[#0A0A0A] text-white"
          >
            <div className="container-x flex h-16 items-center justify-between border-b border-white/8">
              <Link href="/" onClick={() => setMobileOpen(false)}>
                <Image src="/logo.png" alt="Biech" width={140} height={56} className="h-10 w-auto object-contain" />
              </Link>
              <button type="button" onClick={() => setMobileOpen(false)} aria-label="Close"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                  <path d="M1 1L13 13M13 1L1 13" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            </div>
            <motion.div
              initial="hidden" animate="visible"
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.05 } } }}
              className="container-x mt-8 flex flex-col gap-4"
            >
              {[
                { href: '/services/software-development', label: 'Software Development' },
                { href: '/services/digital-marketing', label: 'Digital Marketing' },
                { href: '/services/staffing-solutions', label: 'Staffing Solutions' },
              ].map(item => (
                <motion.div key={item.href} variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}>
                  <Link href={item.href} onClick={() => setMobileOpen(false)}
                    className="block text-2xl font-bold text-white/80 transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <div className="my-2 h-px w-full bg-white/8" />
              {[{ href: '/work', label: 'Our Work' }, { href: '/blog', label: 'Blog' }, { href: '/about', label: 'About' }, { href: '/contact', label: 'Contact' }].map(item => (
                <motion.div key={item.href} variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}>
                  <Link href={item.href} onClick={() => setMobileOpen(false)}
                    className="block text-xl font-semibold text-white/70 transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}>
                <Link href="/contact" onClick={() => setMobileOpen(false)} className="btn-primary mt-4 w-full justify-center">
                  Get a Quote →
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
