"use client"

import Image from "next/image";
import logoEcoflex from "../assets/svg/logo-ecoflex.svg"
import logoOrtobom from "../assets/svg/logo-ortobom.svg"
import logoSankonfot from "../assets/svg/logo-sankonfort.svg"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

const animation = { duration: 14000, easing: (t: number) => t }

export function Logotypes() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    renderMode: "performance",
    drag: false,
    slides: {
      perView: 5,
      spacing: 4
    },
    breakpoints: {
      '(max-width: 500px)': {
        slides: {
          perView: 2,
          spacing: 2,
        },
      },
    },
    created(s) {
      s.moveToIdx(5, true, animation)
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation)
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation)
    },
  })
  return (
    <section ref={sliderRef} className="keen-slider my-56 flex justify-center items-center gap-6">
      <div className="keen-slider__slide number-slide1 px-6 p-2 border">
        <Image src={logoEcoflex} alt="" />
      </div>
      <div className="keen-slider__slide number-slide2 px-6 p-2 border">
        <Image src={logoSankonfot} alt="" />
      </div>
      <div className="keen-slider__slide number-slide3 px-6 p-2 border">
        <Image src={logoOrtobom} alt="" />
      </div>
      <div className="keen-slider__slide number-slide4 px-6 p-2 border">
        <Image src={logoEcoflex} alt="" />
      </div>
      <div className="keen-slider__slide number-slide5 px-6 p-2 border">
        <Image src={logoSankonfot} alt="" />
      </div>

    </section>

  )
}