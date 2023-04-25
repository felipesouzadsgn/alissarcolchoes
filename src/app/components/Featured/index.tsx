import Image from "next/image";
import P01 from "../../assets/img/P01.png"

export function Featured() {
  return (
    <section className="w-full h-auto  flex justify-center">
      <div className="w-full flex max-w-7xl mt-56 gap-8 max-tablet:flex-col">
        <div className="flex-1 h-[560px] bg-blue-700 rounded-lg">
          <Image src={P01} alt="" className="-mt-40" />
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