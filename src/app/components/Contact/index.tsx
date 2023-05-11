"use client"

import { FacebookLogo, InstagramLogo, Phone, WhatsappLogo } from "@phosphor-icons/react";
import Link from "next/link";

export function Contact() {
  return (
    <section className="w-full flex justify-center items-center h-screen max-md:h-auto bg-blue-700 p-6">
      <div className="w-full max-w-7xl grid grid-cols-2 max-md:grid-cols-1 gap-8">
        <div className="flex-1 grid grid-cols-2 max-md:grid-cols-1 gap-8">
          <Link href="tel:13981577284" target="_blank" className="flex-1 flex-col gap-2 h-64 rounded-xl bg-white flex items-center justify-center">
            <Phone size={70} className="text-blue-700" />
            <span className="text-xl mt-2 text-gray-400">(13) 9 815-7784</span>
          </Link>
          <Link href="https://wa.me/5513981577284" target="_blank" className="flex-1 flex-col gap-2 h-64 rounded-xl bg-white flex items-center justify-center">
            <WhatsappLogo size={70} className="text-blue-700" />
            <span className="text-xl mt-2 text-gray-400">we.me/551398157784</span>
          </Link>
          <Link href="https://instagram.com/alissarcolchoes" target="_blank" className="flex-1 flex-col gap-2 h-64 rounded-xl bg-white flex items-center justify-center">
            <InstagramLogo size={70} className="text-blue-700" />
            <span className="text-xl mt-2 text-gray-400">@alissarcolchoes</span>
          </Link>
          <Link href="https://fb.me/alissarcolchoes" target="_blank" className="flex-1 flex-col gap-2 h-64 rounded-xl bg-white flex items-center justify-center">
            <FacebookLogo size={70} className="text-blue-700" />
            <span className="text-xl mt-2 text-gray-400">@alissarcolchoes</span>
          </Link>
        </div>
        <div className="flex-1 border rounded-xl overflow-hidden">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3645.1034436487475!2d-46.27286368501387!3d-23.99212398447071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d1fe1e11bd19af%3A0x46d42e206ea9527b!2sAlissar%20Colch%C3%B5es!5e0!3m2!1spt-BR!2sbr!4v1683832400628!5m2!1spt-BR!2sbr" className="border-0 w-full h-full max-md:h-[70vh]" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </section>
  )
}