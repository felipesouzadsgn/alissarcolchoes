import Image from "next/image";
import IMG01 from "../../assets/img/img-1.png"
import P01 from "../../assets/img/P01.png"
import WhatsApp from "../../assets/svg/WhatsappLogo.svg"
import WhatsAppBlue from "../../assets/svg/WhatsappLogoBlue.svg"
import Link from "next/link";

export function Featured() {
  return (
    <section className="w-full h-auto  flex justify-center">
      <div className="w-full flex max-w-7xl mt-56 gap-8 max-tablet:flex-col">
        <div className="relative flex-1 h-[560px] bg-blue-700 rounded-lg">
          <Image src={P01} alt="" className="-mt-40" />
          <Link href="https://wa.me/5513981577284" target="_blank" className="absolute flex justify-center items-center rounded-tl-2xl right-0 bottom-0 w-16 h-16 bg-blue-700">
            <Image src={WhatsApp} className="w-12 h-12" alt="" />
          </Link>
        </div>
        <div className="flex-1 grid grid-cols-2 gap-6">
          <div className="relative flex-1 border bg-white rounded-lg">
            <Image src={IMG01} alt="" className="" />
            <Link href="https://wa.me/5513981577284" target="_blank" className="absolute flex justify-center items-center rounded-tl-2xl right-0 bottom-0 w-16 h-16 bg-blue-700">
              <Image src={WhatsApp} className="w-12 h-12" alt="" />
            </Link>
          </div>
          <div className="relative flex-1 border bg-white rounded-lg">
            <Image src={IMG01} alt="" className="" />
            <Link href="https://wa.me/5513981577284" target="_blank" className="absolute flex justify-center items-center rounded-tl-2xl right-0 bottom-0 w-16 h-16 bg-blue-700">
              <Image src={WhatsApp} className="w-12 h-12" alt="" />
            </Link>
          </div>
          <div className="relative flex-1 border bg-white rounded-lg">
            <Image src={IMG01} alt="" className="" />
            <Link href="https://wa.me/5513981577284" target="_blank" className="absolute flex justify-center items-center rounded-tl-2xl right-0 bottom-0 w-16 h-16 bg-blue-700">
              <Image src={WhatsApp} className="w-12 h-12" alt="" />
            </Link>
          </div>
          <div className="relative flex-1 border bg-white rounded-lg">
            <Image src={IMG01} alt="" className="" />
            <Link href="https://wa.me/5513981577284" target="_blank" className="absolute flex justify-center items-center rounded-tl-2xl right-0 bottom-0 w-16 h-16 bg-blue-700">
              <Image src={WhatsApp} className="w-12 h-12" alt="" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}