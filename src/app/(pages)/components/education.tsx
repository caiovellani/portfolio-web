import { EducationCard } from '@/components/education-card'

const educations = [
  {
    photo: '',
    name: 'Estácio de Sá University',
    education: 'System Analysis and Development',
    time: 'August 2022 - December 2025',
    description:
      "I am currently pursuing a degree in Systems Analysis and Development at Estácio de Sá University, expect to graduate in 2025. Throughout the program, I've been deepening my knowledge in technology, programming, and systems management. This education has provided me with a broad and pratical understanding of the system lifecycle and the development of innovative technological solutions, consolidating my career in the field of information technology.",
  },
  {
    photo: '',
    name: 'Harvard University',
    education: 'CS50x',
    time: '2023',
    description:
      'I completed the CS50x - Introduction to Computer Science course offered by Harvard University, which provided a comprehensive and practical foundation in computer science. Through this program, I deepened my understanding of programming logic, algorithms, data structures, and memory management using the C language. The course also covered essential topics such as web development with HTML, CSS, and JavaScript, backend development with Python and Flask, as well as database management using SQL. Additionally, it introduced key concepts in cybersecurity and computational thinking, further strengthening my technical skill set and problem-solving abilities.',
  },
]

export function Education() {
  return (
    <section
      id="education"
      className="min-h-screen w-full container mx-auto items-center"
    >
      <div className="flex flex-col items-center justify-center p-4">
        <h1 className="text-[48px] font-bold xl:text-[80px]">Education</h1>
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
