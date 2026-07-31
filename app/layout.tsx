import type { Metadata } from 'next'
import { Inter, Inter_Tight } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const interTight = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-inter-tight',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Fortaleza Sin Fronteras | Entrena Sin Presión',
  description:
    'Entrenamiento al aire libre en Parque Medalla de Honor. Sin presión, sin comparaciones y rodeado de personas que quieren mejorar igual que tú.',
  icons: {
    icon: '/logo_boxeo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${interTight.variable} scroll-smooth bg-[#050505] text-[#F5F5F5] antialiased`}
    >
      <body className="bg-[#050505] text-[#F5F5F5] overflow-x-hidden selection:bg-[#B31217] selection:text-white">
        {children}
      </body>
    </html>
  )
}
