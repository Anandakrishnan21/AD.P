import '../globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
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
    <html lang="en" className='bg-neutral-950 text-white'>
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
