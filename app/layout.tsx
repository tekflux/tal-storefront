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

const title = 'Talcora | Agro Export, Energy, Construction & Industrial Supply'
const description = company.description

export const metadata: Metadata = {
  metadataBase: new URL(company.url),
  title: {
    default: title,
    template: '%s | Talcora',
  },
  description,
  keywords: [
    'Talcora',
    'agro commodity exporter Nigeria',
    'cocoa cashew sesame exporter',
    'solar equipment supplier',
    'construction procurement',
    'building materials supplier',
    'machinery supplier',
    'African food wholesale',
  ],
  authors: [{ name: company.legalName }],
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title,
    description,
    url: company.url,
    siteName: company.name,
    type: 'website',
    images: [{ url: '/img/og.jpg', width: 1200, height: 630, alt: 'Talcora — agro export, energy, construction and industrial supply' }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/img/og.jpg'],
  },
}

// Tells search engines who Talcora is (name, logo, offices, contact).
const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${company.url}/#organization`,
      name: company.name,
      alternateName: 'Talcora Exim',
      url: company.url,
      logo: `${company.url}/icon-512.png`,
      email: company.email,
      description: company.description,
      address: company.offices.map(o => ({
        '@type': 'PostalAddress',
        streetAddress: o.address,
        addressLocality: o.city.split(',')[0],
        addressCountry: o.city.split(',')[1]?.trim(),
      })),
      contactPoint: company.offices.map(o => ({
        '@type': 'ContactPoint',
        telephone: o.phone.replace(/\s/g, ''),
        contactType: 'sales',
        areaServed: o.id === 'uk' ? 'GB' : 'NG',
        email: company.email,
      })),
      ...(company.socials.length ? { sameAs: company.socials.map(s => s.href) } : {}),
    },
    {
      '@type': 'WebSite',
      '@id': `${company.url}/#website`,
      url: company.url,
      name: company.name,
      publisher: { '@id': `${company.url}/#organization` },
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
        {children}
      </body>
    </html>
  )
}
