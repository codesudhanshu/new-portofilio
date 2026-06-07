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
    default: 'Biech Software Technologies Pvt. Ltd. | Software, Marketing & Staffing — Greater Noida',
    template: '%s | Biech Software Technologies',
  },
  description:
    'Biech Software Technologies Pvt. Ltd. is a Greater Noida based IT company delivering custom software development, digital marketing, and engineering staffing solutions since 2015. 50+ projects shipped for clients across India, US, UK & GCC.',
  keywords: [
    'software development company Greater Noida',
    'digital marketing agency Noida',
    'IT staffing solutions India',
    'web development company',
    'mobile app development',
    'cloud solutions',
    'UI UX design',
    'staff augmentation India',
    'Biech Software Technologies',
  ],
  authors: [{ name: 'Biech Software Technologies Pvt. Ltd.' }],
  creator: 'Biech Software Technologies Pvt. Ltd.',
  publisher: 'Biech Software Technologies Pvt. Ltd.',
  metadataBase: new URL('https://biech.in'),
  icons: {
    icon: [{ url: '/logo.png', type: 'image/png' }],
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'Biech Software Technologies Pvt. Ltd. | Software, Marketing & Staffing',
    description:
      'Enterprise digital transformation since 2015 — custom software, performance marketing & engineering talent. Serving ambitious companies across India, US, UK & GCC from Greater Noida.',
    url: 'https://biech.in',
    siteName: 'Biech Software Technologies',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Biech Software Technologies Pvt. Ltd.',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Biech Software Technologies Pvt. Ltd.',
    description:
      'Custom software, digital marketing & staffing solutions since 2015. Greater Noida, India.',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  verification: {
    google: '',
  },
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
