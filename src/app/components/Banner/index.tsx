import Image from "next/image";
import IMG01 from "../../assets/img/img-1.png"
import Link from "next/link";

export function Banner() {
  return (
    <section className="keen-slider__slide number-slide2 flex flex-wrap justify-center items-center gap-3 max-tablet:flex-col w-full h-[400px] max-tablet:h-full bg-blue-700 p-12">
      <div className="max-w-md max-tablet:text-center">
        <span className="uppercase text-white">Category</span>
        <h2 className="text-7xl mt-2 max-md:text-5xl bold max-tablet:text-center text-yellow-400">Baú Casal</h2>
        <p className="text-white max-md:text-sm my-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores natus a at suscipit nemo eveniet fugiat itaque possimus tempora.</p>
        <Link href="https://wa.me/5513981577284" target="_blank" className="py-3 px-6 rounded bg-slate-50 text-blue-500">Solicitar Orçamento</Link>
      </div>
      <div className="relative w-[700px] ">
        <Image src={IMG01} alt="Image de Colchão & Box" className="absolute top-1/2 -translate-y-1/2 left-0 w-full" />
      </div>
    </section>

  )
}