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

export const gtagReportConversion = (url: any) => {
  const callback = () => {
    if (typeof url !== 'undefined') {
      window.location = url;
    }
  };

  window.gtag('event', 'conversion', {
    send_to: 'AW-773499482/gU1vCInImKEYENrU6vAC',
    event_callback: callback,
  });

  return false;
};


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
        <li><Link onClick={() => gtagReportConversion('')} href="https://wa.me/5513981577284" target="_blank"><Image src={WhatsAppLogo} alt="Icone do Instagram" className="w-8 h-8 max-md:w-6 max-md:h-5" /></Link></li>
      </ul>
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide number-slide1 flex flex-wrap justify-center items-center gap-3 max-tablet:flex-col w-full h-screen max-tablet:h-full bg-blue-700 p-12">
          <Image src={IMG1} alt="Image de Colchão & Box" className="w-[624px]" />
          <div className="max-w-md max-tablet:text-center">
            <span className="uppercase text-white">Category</span>
            <h2 className="text-7xl mt-2 max-md:text-5xl bold max-tablet:text-center text-yellow-400">Baú Casal</h2>
            <p className="text-white max-md:text-sm my-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores natus a at suscipit nemo eveniet fugiat itaque possimus tempora.</p>
            <Link onClick={() => gtagReportConversion('')} href="https://wa.me/5513981577284" target="_blank" className="py-3 px-6 rounded bg-slate-50 text-blue-500">Solicitar Orçamento</Link>
          </div>
        </div>
        <div className="keen-slider__slide number-slide2 flex flex-wrap justify-center items-center gap-3 max-tablet:flex-col w-full h-screen max-tablet:h-full bg-blue-700 p-12">
          <Image src={IMG2} alt="Image de Colchão & Box" className="w-[624px]" />
          <div className="max-w-md max-tablet:text-center">
            <span className="uppercase text-white">Category</span>
            <h2 className="text-7xl mt-2 max-md:text-5xl bold max-tablet:text-center text-yellow-400">Baú Casal</h2>
            <p className="text-white max-md:text-sm my-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores natus a at suscipit nemo eveniet fugiat itaque possimus tempora.</p>
            <Link href="https://wa.me/5513981577284" target="_blank" className="py-3 px-6 rounded bg-slate-50 text-blue-500">Solicitar Orçamento</Link>
          </div>
        </div>
        <div className="keen-slider__slide number-slide3 flex flex-wrap justify-center items-center gap-3 max-tablet:flex-col w-full h-screen max-tablet:h-full bg-blue-700 p-12">
          <Image src={IMG3} alt="Image de Colchão & Box" className="w-[624px]" />
          <div className="max-w-md max-tablet:text-center">
            <span className="uppercase text-white">Category</span>
            <h2 className="text-7xl mt-2 max-md:text-5xl bold max-tablet:text-center text-yellow-400">Baú Casal</h2>
            <p className="text-white max-md:text-sm my-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores natus a at suscipit nemo eveniet fugiat itaque possimus tempora.</p>
            <Link href="https://wa.me/5513981577284" target="_blank" className="py-3 px-6 rounded bg-slate-50 text-blue-500">Solicitar Orçamento</Link>
          </div>
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