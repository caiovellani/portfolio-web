import Image from 'next/image'
import logo from '@/../public/logo.png'
import { Navbar } from '@/components/navbar'
import { Button } from '@/components/ui/button'

export default function Header() {
  return (
    <header className="p-4 w-full h-20 z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
      <div className="max-w-6xl mx-auto px-4 h-full flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image src={logo} alt="Logo" width={55} height={55} />
        </div>
        <div>
          <Navbar />
        </div>
        <div className="hidden md:flex">
          <Button
            variant="ghost"
            className="rounded-xl cursor-pointer bg-white text-black p-4 text-sm font-medium h-9 items-center w-full ring-1 ring-zinc-50/5 ring-inset transition-[background-color] hover:bg-zinc-50/50"
          >
            Contato
          </Button>
        </div>
      </div>
    </header>
  )
}
