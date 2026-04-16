import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { CmsClientBootstrap } from '@/components/CmsClientBootstrap'
import { siteOriginFromEnv } from '@/lib/cms/html'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const siteUrl = siteOriginFromEnv()
const metadataBase = new URL(siteUrl.endsWith('/') ? siteUrl : `${siteUrl}/`)

export const metadata: Metadata = {
  metadataBase,
  title: { default: 'AI Restro 360', template: '%s | AI Restro 360' },
  description: 'Restaurant and hospitality technology insights, blog, and updates.',
  applicationName: 'AI Restro 360',
  openGraph: {
    type: 'website',
    siteName: 'AI Restro 360',
    locale: 'en_US',
    alternateLocale: ['id_ID'],
    images: [
      {
        url: '/icon.svg',
        width: 32,
        height: 32,
        alt: 'AI Restro 360',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <CmsClientBootstrap />
        {children}
      </body>
    </html>
  )
}
