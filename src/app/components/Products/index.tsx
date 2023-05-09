"use client"
import { useKeenSlider } from "keen-slider/react"
import Image, { StaticImageData } from "next/image"
import { useState } from "react"
import { CaretLeft, CaretRight } from "@phosphor-icons/react";

import IM01 from "../../assets/img/img-1.png"
import WhatsApp from "../../assets/svg/WhatsappLogo.svg"
import Link from "next/link";

interface ProductsImagesProps {
  images: StaticImageData[]
}

export function Products({ images }: ProductsImagesProps) {
  const [loaded, setLoaded] = useState(false)
  const [slideRef, instanceRef] = useKeenSlider<HTMLDivElement>({
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
        <h2 className="text-3xl">
          Produtos em Destaque
        </h2>
        <div className="navigation-wrapper relative mt-8 w-full h-96 my-10">
          <div
            ref={slideRef}
            className="keen-slider absolute flex gap-4 w-full"
          >
            {images.map((imageUrl, index: number) => (
              <div
                key={index}
                className={`w-80 h-96 object-cover keen-slider__slide number-slide${index}`}
              >
                <div className="relative border flex flex-col justify-between rounded-xl w-full h-full overflow-hidden">
                  <div className="w-full h-80">
                    <Image src={IM01} alt="" />
                  </div>
                  <a href="" className="mb-5 px-5 text-2xl">Saiba mais</a>
                  <Link href="https://wa.me/5513981577284" target="_blank" className="absolute flex justify-center items-center rounded-tl-2xl right-0 bottom-0 w-16 h-16 bg-blue-700">
                    <Image src={WhatsApp} className="w-12 h-12" alt="" />
                  </Link>
                </div> 
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-end items-center">
          {loaded && instanceRef.current && (
            <div className="space-x-4">
              <button
                className="p-3 border bg-blue-600 text-white rounded-xl"
                onClick={(e: any) =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
              >
                <CaretLeft size={24} />
              </button>
              <button
                className="p-3 border bg-blue-600 text-white rounded-xl"
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