import { Photo } from '@/app/(pages)/components/photo'
import { Social } from '@/app/(pages)/components/socials'
import { Stats } from '@/app/(pages)/components/stats'
import { Button } from '@/components/ui/button'

import { Download } from 'lucide-react'

export function Hero() {
  return (
    <section className="h-full px-4">
      <div className="container h-full pt-8 mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br /> <span className="text-accent">Caio Vellani</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I excel at crafting elegant digital experiences and I am
              proficient in various programming languages and technologies
            </p>
            <div className="flex items-center gap-2 -mt-6 mb-4 justify-center xl:justify-start">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-white/80 text-sm">Available to work</span>
            </div>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="p-2 rounded-3xl gap-2 border-accent hover:bg-accent/20 cursor-pointer"
              >
                <span className="text-accent">Download CV</span>
                <Download className="w-6 h-6 text-accent" />
              </Button>
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
