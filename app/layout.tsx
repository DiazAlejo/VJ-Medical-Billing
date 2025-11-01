import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/contexts/LanguageContext'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'VJ Medical Billing LLC | Professional Medical Billing Services',
  description: 'Reliable medical billing services with fewer denials and higher revenue. Fully compliant with all federal protocols. Serving Puerto Rico and the U.S. 99% acceptance rate.',
  keywords: 'medical billing, revenue cycle management, Puerto Rico, medical coding, CPT ICD coding, medical billing services, healthcare billing',
  authors: [{ name: 'VJ Medical Billing LLC' }],
  openGraph: {
    title: 'VJ Medical Billing LLC | Professional Medical Billing Services',
    description: 'Professional medical billing services with 99% acceptance rate. Reliable, compliant, and transparent.',
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['es_PR', 'es_US'],
  },
  alternates: {
    languages: {
      'en-US': '/',
      'es-PR': '/',
      'es-US': '/',
    },
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className={inter.className}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}

