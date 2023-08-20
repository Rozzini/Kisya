import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'UI/UX DESIGNER',
  description: '^_^',
  images: 'https://www.one8two8.com/logos/logo11.png',
}

export default function RootLayout({ children }) {
  return (
    <html class="scroll-smooth" lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
