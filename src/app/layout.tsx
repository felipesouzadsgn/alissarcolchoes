import Head from 'next/head'
import { Header } from './components/Header'
import './globals.css'
import { Inter } from 'next/font/google'

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
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=AW-773499482`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-773499482', {
              page_path: window.location.pathname,
            });
          `
          }}
        />
      </Head>
      <body className={inter.className}>
        <Header />
        {children}</body>
    </html>
  )
}
