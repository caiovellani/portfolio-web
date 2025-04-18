'use client'

import clsx from 'clsx'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

const navItems = [
  { name: 'Sobre' },
  { name: 'Techs' },
  { name: 'Experiências' },
  { name: 'Projetos' },
  { name: 'Educação' },
  { name: 'Contato', type: 'button' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative md:justify-self-center font-poppins">
      <div className="bg-grid absolute top-0 left-0 right-0 bottom-0 z-[-1]" />

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 md:hidden h-10 grid place-items-center bg-zinc-50/10 rounded-xl ring-inset ring-zinc-50/[0.02] backdrop-blur-2xl hover:bg-zinc-50/15 transition-[transform,background-color] active:scale-95"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>
      <nav
        className={clsx(
          `absolute top-full mt-2 right-0 min-w-40 p-2 rounded-2xl ring-inset ring-1 ring-zinc-50/5 bg-zinc-900 isolate
           transition-all duration-300 scale-90 opacity-0 blur-0 invisible
           md:static md:flex md:items-center md:mt-0 md:opacity-100 md:scale-100 md:visible md:transition-none`,
          isOpen && 'opacity-100 scale-100 visible'
        )}
      >
        {navItems.map((nav) => {
          const isActive = nav.name === 'Sobre'

          return (
            <div key={nav.name} className="relative">
              {isActive && (
                <span className="absolute top-0 left-0 right-0 h-9 bg-accent rounded-lg -z-10 transition-all duration-300" />
              )}

              {nav.type === 'button' ? (
                <button
                  onClick={() => {}}
                  className={clsx(
                    'grid items-center cursor-pointer h-9 px-4 text-sm font-medium tracking-wide transition-colors md:hidden text-zinc-50/50 hover:text-hover',
                    isActive ? 'text-zinc-900' : 'text-zinc-50'
                  )}
                >
                  {nav.name}
                </button>
              ) : (
                <Link
                  href="#"
                  className={clsx(
                    'grid items-center h-9 px-4 text-sm font-medium tracking-wide transition-colors cursor-pointer active:text-hover',
                    isActive
                      ? 'text-zinc-900'
                      : 'text-zinc-50/50 hover:text-hover'
                  )}
                >
                  {nav.name}
                </Link>
              )}
            </div>
          )
        })}
      </nav>
    </div>
  )
}
