import { Contact } from '@/app/(pages)/components/contact'
import { Footer } from '@/app/(pages)/components/footer'
import { Hero } from '@/app/(pages)/components/hero'
import { Techs } from '@/app/(pages)/components/techs'

export default function Home() {
  return (
    <main>
      <Hero />
      <Techs />
      <Contact />
      <Footer />
    </main>
  )
}
