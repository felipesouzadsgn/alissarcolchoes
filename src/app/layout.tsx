import Head from 'next/head'
import { Header } from './components/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import Image from 'next/image'

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
        <meta name="google-site-verification" content="9F8tkJIC3kC0HwkXjkBLHmYXkamooSXhhxzokypWqiI" />
      </Head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-773499482"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'AW-773499482');
        `}
        </Script>

        <Script id='gtag-manager' strategy="afterInteractive">
          {`
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-P57J3BJ');
        `}
        </Script>

      <Script id='meta-pixel'>
        {`
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window,document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
 fbq('init', '1063061801337117'); 
fbq('track', 'PageView');
        `}
      </Script>
      <body className={inter.className}>
        <Header />
        {children}
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P57J3BJ"
          className='hidden invisible w-0 h-0'></iframe></noscript>
        <noscript><Image height="1" width="1" className='hidden'
          src="https://www.facebook.com/tr?id=2249326158581139&ev=PageView&noscript=1" alt=''
        /></noscript>
      </body>
    </html>
  )
}
