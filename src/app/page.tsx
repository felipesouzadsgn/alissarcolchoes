"use client"
import { Hero } from './components/Hero'
import { Products } from './components/Products'

import P01 from "./assets/img/P01.png"
import P02 from "./assets/img/img-1.png"
import P03 from "./assets/img/img-2.png"
import P04 from "./assets/img/img-3.png"
import P05 from "./assets/img/img-3.png"
import P06 from "./assets/img/img-3.png"
import { Contact } from './components/Contact'
import Link from 'next/link'
import { WhatsappLogo } from '@phosphor-icons/react'

export default function Home() {
  const imagesUrls = [P01, P02, P03, P04, P05, P06]
  return (
    <main className="relative">
      <Hero />
      <Products images={imagesUrls} />
      <Contact />
      <Link href="https://wa.me/5513981577284" target='_blank' className='flex justify-center items-center w-24 h-24 bg-green-500 fixed bottom-3 right-3 rounded-full'>
        <WhatsappLogo size={48} color='white' />
      </Link>
    </main>
  )
}
