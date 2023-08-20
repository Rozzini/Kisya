import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'UI/UX DESIGNER',
  description: '^_^',
  image: '/home/SocialMedia.png',
}

export default function RootLayout({ children }) {
  return (
    <html class="scroll-smooth" lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
