"use client"

import Image from "next/image"

import "./styles.css"

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

import WhatsAppLogo from "../../assets/svg/WhatsappLogo.svg"
import InstagramLogo from "../../assets/svg/InstagramLogo.svg"
import FacebookLogo from "../../assets/svg/FacebookLogo.svg"
import IMG1 from "../../assets/img/img-1.png"
import IMG2 from "../../assets/img/img-2.png"
import IMG3 from "../../assets/img/Img001.png"

import { useState } from "react"
import Link from "next/link"


export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 2000)
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
      },
    ]
  )

  return (
    <section className="relative navigation-wrapper">
      <ul className="absolute left-6 top-1/2 -translate-y-1/2 flex flex-col gap-6 max-md:gap-3 z-10">
        <li><Link href="https://instagram.com/alissarcolchoes" target="_blank"><Image src={InstagramLogo} alt="Icone do Instagram" className="w-8 h-8 max-md:w-6 max-md:h-5" /></Link></li>
        <li><Link href="https://facebook.com/alissarcolchoes" target="_blank"><Image src={FacebookLogo} alt="Icone do Instagram" className="w-8 h-8 max-md:w-6 max-md:h-5" /></Link></li>
      </ul>
      <div ref={sliderRef} className="keen-slider relative w-full h-screen">
        <div className="keen-slider__slide number-slide1 absolute top-0 left-0 w-full h-full object-cover">
          <Image src="https://www.ecoflex.ind.br/img/products/original/604.jpg" width={1920} height={1080} alt="Image de Colchão & Box" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full" />
        </div>
        <div className="keen-slider__slide number-slide1 relative">
          <Image src="https://www.ecoflex.ind.br/img/products/original/590.jpg" width={1920} height={1080} alt="Image de Colchão & Box" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full" />
        </div>
        <div className="keen-slider__slide number-slide1 relative">
          <Image src="https://www.martinsestofados.com.br/assets/img/produtos/61eb01e4b5ea3.jpg" width={1920} height={1080} alt="Image de Colchão & Box" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full" />
        </div>
        <div className="keen-slider__slide number-slide1 relative">
          <Image src="https://www.martinsestofados.com.br/assets/img/produtos/62c430e48eab7.jpg" width={1920} height={1080} alt="Image de Colchão & Box" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full" />
        </div>
      </div>
      <ul className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-10">
        {loaded && instanceRef.current && (
          <div className="flex flex-col py-3 gap-3">
            {[
              0, 1, 2,
            ].map((idx) => {
              return (
                <li
                  key={idx}
                  onClick={() => {
                    instanceRef.current?.moveToIdx(idx)
                  }}
                  className={"border-white border rounded-full mx-1 p-[5px] cursor-pointer focus:outline-none " + (currentSlide === idx ? "bg-white" : "")}
                ></li>
              )
            })}
          </div>
        )}
      </ul>
    </section>
  )
}