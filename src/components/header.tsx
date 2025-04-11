import Image from 'next/image'
import logo from '@/../public/logo.png'
import { Navbar } from '@/components/navbar'

export default function Header() {
  return (
    <header className="fixed p-4 top-0 left-0 w-full h-20 z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
      <div className="max-w-6xl mx-auto px-4 h-full flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image src={logo} alt="Logo" width={55} height={55} />
        </div>
        <div>
          <Navbar />
        </div>
        <div className="hidden md:flex">
          <button className="rounded-xl cursor-pointer bg-white text-black p-2 text-sm font-medium h-9 items-center ring-1 ring-zinc-50/5 ring-inset transition-[background-color]">
            Contact Me
          </button>
        </div>
      </div>
    </header>
  )
}
