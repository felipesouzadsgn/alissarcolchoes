"use client"
import Image from 'next/image'
import quote from "../../assets/svg/quote.svg"
import React, { useState } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
export function Feedbacks() {
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slides: {
      perView: 3,
    },
    breakpoints: {
      '(max-width: 500px)': {
        initial: 0,
        slides: {
          perView: 1,
        },
      },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })
  return (


    <div className="my-40">
      <div className="text-center">
        <span className="uppercase text-2xl">Depoimentos de clientes</span>
        <h2 className='text-3xl'>Feedback</h2>
      </div>
      <section className="w-full flex justify-center my-32 overflow-hidden">
        <div className="navigation-wrapper">
          <div
            ref={sliderRef}
            className="keen-slider w-full max-w-7xl max-md:max-w-[392px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-24 max-md:gap-6"
          >
            <div className="keen-slider__slide number-slider1 w-full max-w-[392px] max-md:w-[382px] h-auto border border-dust-storm-300 rounded-lg flex items-start gap-7 p-8">
              <Image src={quote} alt="" />
              <p className="text-2xl">
                Designer impecável! Acompanhamento desde do início do projeto
                até o fim da obra.
              </p>
            </div>

            <div className="keen-slider__slide number-slider2 w-full max-w-[392px] h-auto border border-dust-storm-300 rounded-lg flex items-start gap-7 p-8">
              <Image src={quote} alt="" />
              <p className="text-2xl">
                Designer impecável! Acompanhamento desde do início do projeto
                até o fim da obra.
              </p>
            </div>
            <div className="keen-slider__slide number-slider3 w-full max-w-[392px] h-auto border border-dust-storm-300 rounded-lg flex items-start gap-7 p-8">
              <Image src={quote} alt="" />
              <p className="text-2xl">
                Designer impecável! Acompanhamento desde do início do projeto
                até o fim da obra.
              </p>
            </div>
            <div className="keen-slider__slide number-slider4 w-full max-w-[392px] h-auto border border-dust-storm-300 rounded-lg flex items-start gap-7 p-8">
              <Image src={quote} alt="" />
              <p className="text-2xl">
                Designer impecável! Acompanhamento desde do início do projeto
                até o fim da obra.
              </p>
            </div>
            <div className="keen-slider__slide number-slider4 w-full max-w-[392px] h-auto border border-dust-storm-300 rounded-lg flex items-start gap-7 p-8">
              <Image src={quote} alt="" />
              <p className="text-2xl">
                Designer impecável! Acompanhamento desde do início do projeto
                até o fim da obra.
              </p>
            </div>
          </div>
        </div>
      </section>
      {loaded && instanceRef.current && (
        <div className="flex px-3 justify-center">
          {[1, 2, 3].map((_slide, idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx)
                }}
                className={'border-none w-3 h-3 bg-gray-400 focus:outline-none rounded-full mx-1 p-1 cursor-pointer' + (currentSlide === idx ? ' bg-black' : '')}
              ></button>
            )
          })}
        </div>
      )}
    </div>
  )
}