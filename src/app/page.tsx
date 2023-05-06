import { Hero } from './components/Hero'
import { Featured } from './components/Featured'
import { Logotypes } from './components/Logotypes'
import { Products } from './components/Products'

import P01 from "./assets/img/P01.png"
import P02 from "./assets/img/img-1.png"
import P03 from "./assets/img/img-2.png"
import P04 from "./assets/img/img-3.png"

export default function Home() {
  const imagesUrls = [P01, P02, P03, P04]
  return (
    <main className="">
      <Hero />
      <Featured />
      <Logotypes />
      <Products images={imagesUrls} />
    </main>
  )
}
