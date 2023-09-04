import '../globals.css'
import { JetBrains_Mono } from 'next/font/google'

const roboto = JetBrains_Mono({
  weight: '400',
  style: 'normal' ,
  subsets: ['latin'],
})

export default function Layout({
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
