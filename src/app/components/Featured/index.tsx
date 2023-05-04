import Image from "next/image";
import P01 from "../../assets/img/P01.png"
import WhatsAppBlue from "../../assets/svg/WhatsappLogoBlue.svg"

export function Featured() {
  return (
    <section className="w-full h-auto  flex justify-center">
      <div className="w-full flex max-w-7xl mt-56 gap-8 max-tablet:flex-col">
        <div className="relative flex-1 h-[560px] bg-blue-700 rounded-lg">
          <Image src={P01} alt="" className="-mt-40" />
          <a href="" className="absolute flex justify-center items-center rounded-tl-2xl right-0 bottom-0 w-24 h-24 bg-white">
            <Image src={WhatsAppBlue} alt="" />
          </a>
        </div>
        <div className="flex-1 grid grid-cols-2 gap-6">
          <div className="flex-1 h-64 border rounded-lg "></div>
          <div className="flex-1 h-64 border rounded-lg"></div>
          <div className="flex-1 h-64 border rounded-lg"></div> <div className="flex-1 h-64 border"></div>
        </div>
      </div>
    </section>
  )
}