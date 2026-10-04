import type { Metadata, Viewport } from 'next'
import { Fraunces, Inter } from 'next/font/google'
import { company } from '@/lib/site'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  axes: ['opsz'],
  variable: '--font-fraunces',
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0a1b2b',
}

const title = 'Talcora Exim | International Import & Export Company'
const description = company.description

export const metadata: Metadata = {
  metadataBase: new URL(company.url),
  title: {
    default: title,
    template: '%s | Talcora Exim',
  },
  description,
  keywords: [
    'Talcora Exim',
    'import export company',
    'international trade company',
    'export company Nigeria',
    'import procurement services',
    'agricultural commodities export',
    'cocoa export',
    'cashew export',
    'sesame export',
    'ginger export',
    'freight and logistics',
    'trade documentation',
    'global sourcing',
  ],
  authors: [{ name: company.legalName }],
  alternates: { canonical: '/' },
  openGraph: {
    title,
    description,
    url: company.url,
    siteName: company.name,
    type: 'website',
    images: [{ url: '/img/og.jpg', width: 1200, height: 630, alt: 'Talcora Exim — international import and export' }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/img/og.jpg'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>{children}</body>
    </html>
  )
}
