import Image from "next/image"

import WhatsAppLogo from "../../assets/svg/WhatsappLogo.svg"
import InstagramLogo from "../../assets/svg/InstagramLogo.svg"
import FacebookLogo from "../../assets/svg/FacebookLogo.svg"
import Point from "../../assets/svg/Point.svg"
import PointFill from "../../assets/svg/PointFill.svg"
import CB01 from "../../assets/img/CB01.png"

export function Hero() {
  return (
    <section className="w-full h-screen max-tablet:h-full bg-blue-700 flex justify-between items-center p-12">
      <ul className="flex flex-col gap-6">
        <li><Image src={InstagramLogo} alt="Icone do Instagram" /></li>
        <li><Image src={FacebookLogo} alt="Icone do Facebook" /></li>
        <li><Image src={WhatsAppLogo} alt="Icone do WhatsApp" /></li>
      </ul>
      <div className="flex flex-wrap justify-center items-center gap-2 max-tablet:flex-col">
        <Image src={CB01} alt="Image de Colchão & Box" />
        <div className="max-w-md max-tablet:text-center">
          <span className="uppercase text-white">Category</span>
          <h2 className="text-8xl bold max-tablet:text-center text-yellow-400 max-tablet:text-7xl">Colchão & Box</h2>
          <p className="text-white my-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores natus a at suscipit nemo eveniet fugiat itaque possimus tempora.</p>
          <a href="" className="py-3 px-6 rounded bg-slate-50 text-blue-500">Solicitar Orçamento</a>
        </div>
      </div>
      <ul className="flex flex-col gap-6">
        <li><Image src={PointFill} alt="" /></li>
        <li><Image src={Point} alt="" /></li>
        <li><Image src={Point} alt="" /></li>
        <li><Image src={Point} alt="" /></li>
      </ul>
    </section>
  )
}