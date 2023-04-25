import Image from "next/image";
import LogoAlissar from "../assets/svg/LogoAlissar.svg"

export function Header() {
  return (
    <header className="w-full fixed left-0 top-0 flex justify-center items-center text-white">
      <nav className="w-full max-w-7xl h-20 flex items-center justify-between">
        <a href="">
          <Image src={LogoAlissar} alt="Logo Alissar Colchões" />
        </a>
        <ul className="flex gap-8 ">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Sobre</a>
          </li>
          <li>
            <a href="">Produtos</a>
          </li>
          <li>
            <a href="">Contato</a>
          </li>
        </ul>
        <a href="" className="py-3 px-6 rounded bg-slate-50 text-blue-500">Solicitar Orçamento</a>
      </nav>
    </header>
  )
}