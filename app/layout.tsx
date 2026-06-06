import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { SmoothScroll } from './providers/SmoothScroll'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { WhatsAppButton } from '@/components/WhatsAppButton'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Biech Software Technologies — Software, Marketing, Staffing · Greater Noida',
    template: '%s · Biech',
  },
  description:
    'Biech Software Technologies Pvt. Ltd. — 10 years of shipping software, running growth campaigns, and placing engineering talent. Greater Noida studio, working globally since 2015.',
  metadataBase: new URL('https://biech.in'),
  openGraph: {
    title: 'Biech Software Technologies Pvt. Ltd.',
    description:
      'Software · Marketing · Staffing. 10 years of delivery. Greater Noida, India.',
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
    <html lang="en" className={inter.variable}>
      <body className="bg-[#0A0A0A] text-white antialiased">
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </SmoothScroll>
      </body>
    </html>
  )
}
