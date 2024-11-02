import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import '@progress/kendo-theme-material/dist/all.css';
import './globals.css';

export const metadata: Metadata = {
  title: 'HazardWatchPH',
  description: 'Know if your location is prone to natural hazards.',
}

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

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
