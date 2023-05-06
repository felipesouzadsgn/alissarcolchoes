"use client"

import { useKeenSlider } from "keen-slider/react"
import Image, { StaticImageData } from "next/image"
import { useState } from "react"
import { CaretLeft, CaretRight } from "@phosphor-icons/react";


interface ProductsImagesProps {
  images: StaticImageData[]
}

export function Products({ images }: ProductsImagesProps) {
  const [loaded, setLoaded] = useState(false)
  const [slideRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 4,
      spacing: 2,
    },
    breakpoints: {
      '(max-width: 500px)': {
        slides: {
          perView: 1.3,
          spacing: 1,
        },
      },
    },
    initial: 0,
    created() {
      setLoaded(true)
    },
  })
  return (
    <section className="w-full h-screen my-20 flex justify-center items-center p-6">
      <div className="relative w-full max-w-7xl">
        <h2>
          Conecte-se ao <br /> nosso instagram
        </h2>
        <div className="navigation-wrapper relative mt-8 w-full h-96 my-10">
          <div
            ref={slideRef}
            className="keen-slider absolute flex gap-4 w-full "
          >
            {images.map((imageUrl, index: number) => (
              <div
                key={index}
                className={`w-80 h-96 object-cover keen-slider__slide number-slide${index}`}
              >
                <Image
                  src={imageUrl}
                  width={320}
                  height={384}
                  alt={`Image ${index}`}
                  className="w-full"
                />
              </div>
            ))}
          </div>
        </div>
        { }
        <div className="flex justify-between items-center">
          <a href="/">Siga-nos no Instagram</a>
          {loaded && instanceRef.current && (
            <div className="space-x-4">
              <button
                className="p-3 border border-black rounded-full"
                onClick={(e: any) =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
              >
                <CaretLeft size={24} />
              </button>
              <button
                className="p-3 border border-black rounded-full"
                onClick={(e: any) =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
              >
                <CaretRight size={24} />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>)
}