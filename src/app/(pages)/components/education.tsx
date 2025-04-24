import { EducationCard } from '@/components/education-card'
import Image from 'next/image'

const educations = [
  {
    photo: '/estacio.png',
    name: 'Estácio de Sá University',
    education: 'System Analysis and Development',
    time: 'August 2022 - December 2025',
    description:
      "I am currently pursuing a degree in Systems Analysis and Development at Estácio de Sá University, expect to graduate in 2025. Throughout the program, I've been deepening my knowledge in technology, programming, and systems management. This education has provided me with a broad and pratical understanding of the system lifecycle and the development of innovative technological solutions, consolidating my career in the field of information technology.",
  },
  {
    photo: '/harvard.png',
    name: 'Harvard University',
    education: 'CS50x',
    time: '2023',
    description:
      'I completed the CS50x - Introduction to Computer Science course offered by Harvard University, which provided a comprehensive and practical foundation in computer science. Through this program, I deepened my understanding of programming logic, algorithms, data structures, and memory management using the C language. The course also covered essential topics such as web development with HTML, CSS, and JavaScript, backend development with Python and Flask, as well as database management using SQL. Additionally, it introduced key concepts in cybersecurity and computational thinking, further strengthening my technical skill set and problem-solving abilities.',
  },
  {
    photo: '/rocketseat.png',
    name: 'Rocketseat Education',
    education: 'React',
    time: '2024 - 2025',
    description:
      'I completed the React program by Rocketseat, a comprehensive and practical formation focused on modern frontend development using the React ecosystem. Throughout the program, I gained in-depth experience with React.js, learning how to build scalable user interfaces, manage state efficiently using hooks and context, consume APIs, and structure applications with clean architecture and reusable components. The program emphasized best practices in componentization, performance optimization, and UI development. As part of my learning journey, I developed several end-to-end projects, including: Ignite Feed – a social feed interface focused on component reuse and state management; Ignite Timer – a Pomodoro-style timer app using React and context API; Coffee Delivery – an e-commerce front-end project with cart and checkout flows; DT-Money – a financial transactions dashboard with filtering and local storage; Pizza Shop – a pizza ordering platform using React and styled-components; and DevShop – a full e-commerce experience integrating backend APIs and responsive UI components. These projects helped consolidate my skills in real-world scenarios, enhancing my ability to build robust and scalable web applications using modern frontend technologies.',
  },
]

export function Education() {
  return (
    <section
      id="education"
      className="min-h-screen w-full container mx-auto items-center p-4"
    >
      <div className="flex flex-col items-center justify-center p-4">
        <h1 className="text-[48px] font-bold xl:text-[80px]">Education</h1>
        <p className="text-zinc-50/60 text-center text-base font-medium leading-tight md:leading-relaxed">
          My educational journey has been one of self-discovery and personal
          growth. Here are the details of my academic background.
        </p>
      </div>

      {educations.map((education, index) => {
        return (
          <EducationCard
            key={index}
            photo={education.photo}
            name={education.name}
            description={education.description}
            education={education.education}
            time={education.time}
          />
        )
      })}
    </section>
  )
}
