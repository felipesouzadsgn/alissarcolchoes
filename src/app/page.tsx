import { Hero } from './components/Hero'
import { Featured } from './components/Featured'
import { Logotypes } from './components/Logotypes'
import { Products } from './components/Products'

import P01 from "./assets/img/P01.png"
import P02 from "./assets/img/img-1.png"
import P03 from "./assets/img/img-2.png"
import P04 from "./assets/img/img-3.png"
import P05 from "./assets/img/img-3.png"
import P06 from "./assets/img/img-3.png"
import { Banner } from './components/Banner'
import { Feedbacks } from './components/Feedbacks'

export default function Home() {
  const imagesUrls = [P01, P02, P03, P04, P05, P06]
  return (
    <main className="">
      <Hero />
      <Featured />
      <Logotypes />
      <Products images={imagesUrls} />
      <Banner />
      <Feedbacks />
    </main>
  )
}
