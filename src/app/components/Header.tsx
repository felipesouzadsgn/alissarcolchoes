import Image from "next/image";
import LogoAlissar from "../assets/svg/LogoAlissar.svg"

export function Header() {
  return (
    <header className="w-full absolute z-10 left-0 top-0 flex justify-center items-center text-white bg-blue-950/70">
      <nav className="w-full max-w-7xl h-20 flex items-center justify-between max-md:justify-center max-md:p-3">
        <a href="">
          <Image src={LogoAlissar} alt="Logo Alissar Colchões" />
        </a>
        <a href="https://wa.me/5513981577284" target="_blank" className="py-3 px-6 rounded-full bg-transparent border border-white text-white max-md:hidden uppercase">Falar com Vendedor</a>
      </nav>
    </header>
  )
}