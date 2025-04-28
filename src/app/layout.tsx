import type { Metadata } from 'next'
import './globals.css'
import { JetBrains_Mono, Poppins } from 'next/font/google'
import Header from '@/app/(pages)/components/header'
import { ToasterProvider } from '@/components/toast/toast-provider'

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-jetbrains',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
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
    <html lang="pt-br" className={`${jetbrains.variable} ${poppins.variable}`}>
      <body>
        <Header />
        {children}
        <ToasterProvider />
      </body>
    </html>
  )
}
