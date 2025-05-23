import { Contact } from '@/app/(pages)/components/contact'
import { Education } from '@/app/(pages)/components/education'
import { Experience } from '@/app/(pages)/components/experience'
import { Footer } from '@/app/(pages)/components/footer'
import { Hero } from '@/app/(pages)/components/hero'
import { Projects } from '@/app/(pages)/components/projects'
import { Techs } from '@/app/(pages)/components/techs'

export default function Home() {
  return (
    <main>
      <Hero />
      <Techs />
      <Education />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
