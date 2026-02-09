import React from "react"
import type { Metadata } from 'next'
import { Playfair_Display, Lora } from 'next/font/google'

import './globals.css'

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })
const lora = Lora({ subsets: ['latin'], variable: '--font-lora' })

export const metadata: Metadata = {
  title: 'Our Love Story',
  description: 'A romantic journey celebrating our love',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${lora.variable}`}>
      <body className="font-lora antialiased bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">{children}</body>
    </html>
  )
}
