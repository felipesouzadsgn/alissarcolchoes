import { Inter } from 'next/font/google'
import { Hero } from './components/Hero'
import { Featured } from './components/Featured'
import { Logotypes } from './components/Logotypes'
import { Products } from './components/Products'

const inter = Inter({ subsets: ['latin'] })

import P01 from "./assets/img/P01.png"
import P02 from "./assets/img/img-1.png"

export default function Home() {
  const imagesUrls = [P01, P02]
  return (
    <main className="">
      <Hero />
      <Featured />
      <Logotypes />
      <Products images={imagesUrls} />
    </main>
  )
}
