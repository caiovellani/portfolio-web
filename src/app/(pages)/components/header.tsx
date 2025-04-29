import Image from 'next/image'
import logo from '@/../public/logo.png'

import { Button } from '@/components/ui/button'
import { Navbar } from '@/app/(pages)/components/navbar'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="relative z-40 h-20 w-full font-poppins">
      <div className="relative z-10 p-4 h-full w-full bg-gradient-to-b from-zinc-900 to-zinc-900/0">
        <div className="max-w-6xl mx-auto px-4 h-full flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src={logo} alt="Logo" width={55} height={55} />
          </div>
          <div>
            <Navbar />
          </div>
          <div className="hidden md:flex">
            <Link href="#contact">
              <Button
                variant="ghost"
                className="rounded-xl cursor-pointer bg-accent text-zinc-900 p-4 text-sm font-medium h-9 items-center w-full ring-1 ring-zinc-50/5 ring-inset transition-[background-color] hover:bg-zinc-50/50"
              >
                Contact
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
