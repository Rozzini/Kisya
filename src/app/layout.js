import './globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    openGraph: {
    title: 'UI/UX DESIGNER',
    description: '^_^',
    url: 'https://www.one8two8.com',
    siteName: 'one8two8',
    images: [
      {
        url: 'https://www.one8two8.com/logos/logo13.png',
        width: 800,
        height: 600,
      },
      {
        url: 'https://www.one8two8.com/logos/logo11.png',
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html class="scroll-smooth" lang="en">
      <body className={inter.className}>{children}</body>
      <Analytics />
    </html>
  )
}
