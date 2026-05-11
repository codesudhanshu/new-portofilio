import type { Metadata } from 'next'
import { Fraunces, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import { SmoothScroll } from './providers/SmoothScroll'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

const display = Fraunces({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  axes: ['SOFT', 'WONK', 'opsz'],
  variable: '--font-display',
  display: 'swap',
})

const sans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Biech — Software, Marketing, Staffing · Noida, India',
    template: '%s · Biech',
  },
  description:
    'Biech Software Solutions builds digital products, growth engines, and engineering teams for ambitious companies. A small Noida studio, working globally.',
  metadataBase: new URL('https://biech.in'),
  openGraph: {
    title: 'Biech Software Solutions',
    description:
      'Software · Marketing · Staffing. A studio for work worth doing well. Noida, India.',
    type: 'website',
    locale: 'en_IN',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="bg-cream text-ink antialiased">
        <div aria-hidden className="grain-overlay" />
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  )
}
