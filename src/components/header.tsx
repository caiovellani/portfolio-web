'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
      <div className="max-w-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]">
        <h1>logo</h1>

        <div className="relative md:justify-self-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 grid place-items-center bg-zinc-50/10 rounded-xl ring-inset ring-1 ring-zinc-50/[0.02] backdrop-blur-2xl hover:bg-zinc-50/15 transition-[transform,background-color] active:scale-95"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          <nav
            className={`
              md:static md:flex md:items-center md:mt-0 md:opacity-100 md:scale-100 md:visible md:blur-0
              absolute top-full mt-2 right-0 min-w-40 p-2 bg-zinc-50/10 rounded-2xl ring-inset ring-1 ring-zinc-50/5 backdrop-blur-2xl isolate transition-all duration-300
              ${
                isOpen
                  ? 'opacity-100 scale-100 blur-0 visible'
                  : 'opacity-0 scale-90 blur-sm invisible'
              }
              md:transition-none
            `}
          >
            {['Home', 'About', 'Work', 'Reviews', 'Contact'].map((item) => (
              <a
                key={item}
                className="grid items-center h-9 px-4 text-sm font-medium tracking-wide text-zinc-50/50 hover:text-zinc-50 transition-colors active:text-zinc-900  active:absolute active:top-2 active:left-2 active:right-2 active:h-9 active:bg-zinc-50 active:rounded-lg active:-z-10 active:transition-[top,left] active:duration-500"
                href=""
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        <a href="#contact" className="">
          Contact Me
        </a>
      </div>
    </header>
  )
}
