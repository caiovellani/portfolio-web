import { Social } from '@/components/socials'
import { Separator } from '@/components/ui/separator'

export function Footer() {
  return (
    <section className="container mx-auto">
      <div className="flex flex-col p-8 items-center justify-center gap-6">
        <Separator className="bg-zinc-700" />
        <h1 className="text-accent font-semibold text-xl xl:text-2xl">
          Caio Vellani
        </h1>
        <div className="flex">
          <Social
            iconStyles="hover:text-hover text-white/70"
            containerStyles="flex gap-6"
          />
        </div>
        <span className="text-zinc-50/50 text-sm">
          Todos os direitos reservados. © 2025.
        </span>
      </div>
    </section>
  )
}
