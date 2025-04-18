import type { Metadata } from 'next'
import './globals.css'
import { JetBrains_Mono } from 'next/font/google'
import Header from '@/app/(pages)/components/header'
import { Navbar } from '@/app/(pages)/components/navbar'

const jetBrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'Caio Vellani',
  description: 'A modern portfolio of Caio Vellani',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br" className={jetBrains.className}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
