import { Photo } from '@/components/photo'
import { Social } from '@/components/socials'
import { Stats } from '@/components/stats'
import { Button } from '@/components/ui/button'
import { Icon } from '@iconify/react'

import Link from 'next/link'

export function Hero() {
  return (
    <section
      id="hero"
      className="h-full relative overflow-hidden font-poppins px-6"
    >
      <div className="container h-full pt-8 mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br /> <span className="text-accent">Caio Vellani</span>
            </h1>
            <p className="max-w-[500px] text-zinc-50/60 font-medium leading-tight mb-10 md:leading-relaxed">
              I excel at crafting elegant digital experiences and I am
              proficient in various programming languages and technologies
            </p>
            <div className="flex items-center gap-2 -mt-6 mb-4 justify-center xl:justify-start">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-white/80 text-sm">Available to work</span>
            </div>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Link href="/caiovellani.pdf" download>
                <div className="animate-border-rgb rounded-3xl">
                  <Button
                    variant="outline"
                    size="lg"
                    className="p-2 rounded-3xl gap-2 border-transparent bg-transparent hover:bg-accent/20 cursor-pointer z-10"
                  >
                    <span className="text-accent">Download CV</span>
                    <Icon
                      icon="line-md:download-loop"
                      className="text-accent size-6"
                    />
                  </Button>
                </div>
              </Link>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-hover/80 rounded-full flex justify-center items-center text-hover/80 hover:text-accent hover:transition-all duration-500 hover:bg-accent/20"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  )
}
