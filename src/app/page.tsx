import { Inter } from 'next/font/google'
import { Hero } from './components/Hero'
import { Featured } from './components/Featured'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Featured />
    </main>
  )
}
