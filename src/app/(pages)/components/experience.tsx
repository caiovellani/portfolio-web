import { EducationCard } from '@/components/education-card'

export function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen w-full container mx-auto items-center"
    >
      <div className="flex flex-col items-center justify-center p-4">
        <h1 className="text-[48px] font-bold xl:text-[80px]">Experience</h1>
        <p className="text-zinc-50/60 text-center text-base font-medium leading-tight">
          My educational journey has been one of self-discovery and personal
          growth. Here are the details of my academic background.
        </p>
      </div>

      <EducationCard
        photo="PHOTO"
        name="Estácio de Sá University"
        education="System Analysis and Development"
        time="August 2022 - December 2025"
        description="I am currently pursuing a degree in Systems Analysis and Development
            at Estácio de Sá University, expected to graduate in 2025.
            Throughout the program, I’ve been deepening my knowledge in
            technology, programming, and systems management. This education has
            provided me with a broad and practical understanding of the system
            lifecycle and the development of innovative technological solutions,
            consolidating my career in the field of information technology."
      />
    </section>
  )
}
