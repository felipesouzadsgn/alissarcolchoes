import { MapPin, WhatsappLogo } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import store from "../../assets/img/store.png"

export function Welcome() {
  return (
    <section className="w-full max-w-7xl flex flex-wrap items-center mx-auto gap-20 max-md:gap-8 mt-24 max-md:px-4">
      <Image className="h-[548px] max-md:w-full max-md:h-full flex-1 object-cover rounded-lg" src={store} alt="Loja Alissar Colchões" />
      <div className="flex-1">
        <h2 className="text-5xl bold text-blue-950">Bem-vindo à nossa Loja de Móveis e Colchões!</h2>
        <p className="text-2xl mt-6 text-gray-600">Seleções de móveis e acessórios para deixar a sua casa ainda mais confortável e acolhedora. Visite nossa Loja ou entre em contato agora mesmo!</p>
        <div className="w-full flex flex-wrap max-md:gap-4  gap-6 mt-8">
          <Link href="https://wa.me/5513981577284" target="_blank" className="max-md:w-full text-lg justify-center text-white bg-blue-950 py-3 px-6 rounded-full flex items-center gap-2 "><WhatsappLogo size={24} /> Atendimento</Link>
          <Link href="https://goo.gl/maps/jvnB2r3KGUXqqHjb6" target="_blank" className="max-md:w-full text-lg justify-center  text-blue-950 py-3 px-6 border border-blue-950 rounded-full flex items-center gap-2"><MapPin size={24} /> Como Chegar?</Link>
        </div>
      </div>
    </section>
  )
}