export function Products() {
  return (
    <section className="w-full flex flex-col items-center justify-center">
      <h2 className="uppercase">Produtos em destaque</h2>
      <div className="w-full max-w-7xl grid grid-cols-5 gap-8">
        <div className="flex-1 h-[300px] border"></div>
        <div className="flex-1 h-[300px] border"></div>
        <div className="flex-1 h-[300px] border"></div>
        <div className="flex-1 h-[300px] border"></div>
        <div className="flex-1 h-[300px] border"></div>
      </div>
    </section>
  )
}