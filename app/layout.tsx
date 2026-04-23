import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Giorgio Cangemi | Full Stack Developer',
  description: 'Full-Stack Web Developer from Palermo. Building responsive, modern web applications with React, Next.js, and more. Check out my projects and get in touch!',
  keywords: ['Full Stack Developer', 'Web Developer', 'React', 'Next.js', 'JavaScript', 'TypeScript', 'Palermo', 'Portfolio'],
  authors: [{ name: 'Giorgio Cangemi' }],
  creator: 'Giorgio Cangemi',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://gcangemi1997-coder.github.io/',
    title: 'Giorgio Cangemi | Full Stack Developer',
    description: 'Full-Stack Web Developer from Palermo. Building responsive, modern web applications.',
    siteName: 'Giorgio Cangemi Portfolio',
    images: [
      {
        url: '/portfolio-preview.png',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Giorgio Cangemi | Full Stack Developer',
    description: 'Full-Stack Web Developer from Palermo. Building responsive, modern web applications.',
    images: [
      {
        url: '/portfolio-preview.png',
        width: 1200,
        height: 630,
      },
    ],
  },
  icons: {
    icon: '/favicon.ico',
  },
};
  

export const viewport: Viewport = {
  themeColor: '#15fdc0',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
