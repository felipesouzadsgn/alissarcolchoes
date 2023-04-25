import { Inter } from 'next/font/google'
import { Hero } from './components/Hero'
import { Featured } from './components/Featured'
import { Logotypes } from './components/Logotypes'
import { Products } from './components/Products'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Featured />
      <Logotypes />
      <Products />
    </main>
  )
}
