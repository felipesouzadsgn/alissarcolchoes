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
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-BLQZCCZSF8`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BLQZCCZSF8', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
      </Head>
      <body className={inter.className}>
        <Header />
        {children}</body>
    </html>
  )
}
