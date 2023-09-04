import '../globals.css'
import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'

const roboto = JetBrains_Mono({
  weight: '400',
  style: 'normal' ,
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Personal portfolio',
  description: 'Portfolio Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
