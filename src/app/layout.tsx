import Head from 'next/head'
import { Header } from './components/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from './components/Analytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Alissar Colchões',
  description: 'Loja de Móveis e Colchões',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <Analytics />
      </Head>
      <body className={inter.className}>
        <Header />
        {children}</body>
    </html>
  )
}
