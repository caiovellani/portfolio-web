import { ExperienceCard } from '@/components/experience-card'

const experiences = [
  {
    name: 'Desenvolvedor Front-End',
    type: 'Freelancer',
    time: 'January 2025 - Until now',
    description:
      'Led the end-to-end development of a corporate website, from UI/UX design conception to front-end implementation. Focused on responsive design, high performance, and accessibility across all devices. Applied development best practices and version control using GitHub.',
    skills: 'ReactJS, NextJS, TypeScript, TailwindCSS, ShadcnUI, Figma, GitHub',
  },
]

export function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen w-full container mx-auto items-center p-4"
    >
      <div className="flex flex-col items-center justify-center p-4">
        <h1 className="text-[48px] font-bold xl:text-[80px]">Experience</h1>
        <p className="text-zinc-50/60 text-center text-base font-medium leading-tight md:leading-relaxed">
          My professional journey as a front-end developer has allowed me to
          work with diverse companies and projects, gaining valuable experience
          across different technologies and industries.
        </p>
      </div>

      {experiences.map((experience, index) => {
        return (
          <ExperienceCard
            key={index}
            name={experience.name}
            type={experience.type}
            time={experience.time}
            description={experience.description}
            skills={experience.skills}
          />
        )
      })}
    </section>
  )
}
