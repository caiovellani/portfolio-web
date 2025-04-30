import { ProjectCard } from '@/components/project-card'
import { Button } from '@/components/ui/button'

import { Icon } from '@iconify/react'
import Link from 'next/link'

const projects = [
  {
    photo: '/pizza.png',
    techs: ['Vite', 'ShadcnUI', 'Zod', 'React Hook Form', 'Sonner'],
    name: 'Pizza Shop',
    description:
      'Development of a modern web platform for pizzerias, featuring online ordering, menu management, and delivery control. Includes a responsive interface for customers and an administrative dashboard. Implementation of an authentication system for both customers and administrators, ensuring security and access control',
    code: 'https://github.com/caiovellani/pizza.shop',
  },
  {
    photo: '/coffee.png',
    techs: [
      'Vite',
      'Styled-Components',
      'React Hook Form',
      'Zod',
      'Context API',
    ],
    name: 'Coffee Delivery',
    description:
      'Development of a web platform for coffee orders, with product listing, cart management, and an intuitive checkout process. Features include displaying item names, descriptions, and prices, quantity adjustments, and data collection for delivery',
    code: 'https://github.com/caiovellani/coffee-delivery-challenge',
  },
  {
    photo: '/odonto.png',
    techs: [
      'NextJS',
      'TailwindCSS',
      'Prisma',
      'OAuth',
      'PostgreSQL',
      'ReactHookForm',
      'Zod',
    ],
    name: 'Medical SaaS',
    description:
      'A Medical SaaS (Software as a Service for the healthcare sector) is a web application designed to provide digital solutions tailored to clinics, medical offices, or hospitals, operating entirely in the cloud',
    code: 'https://github.com/caiovellani/medical-saas',
  },
]

export function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen justify-center items-center flex flex-col p-4 w-full container mx-auto font-poppins"
    >
      <div className="flex flex-col items-center justify-center p-4">
        <h1 className="text-[48px] font-bold xl:text-[80px]">Projects</h1>
        <p className="text-zinc-50/60 text-center text-base font-medium leading-tight md:leading-relaxed">
          I have worked on a wide range of web application projects. Here are
          some of my projects.
        </p>
      </div>
      <div className="pt-4">
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/caiovellani?tab=repositories"
          className="text-accent font-semibold flex items-center justify-center gap-2"
        >
          <div className="animate-border-rgb rounded-3xl">
            <Button
              variant="outline"
              size="lg"
              className="p-2 rounded-3xl gap-2 border-transparent w-fit  bg-transparent hover:bg-accent/10 cursor-pointer z-10"
            >
              <span className="text-white font-semibold text-xl">
                All Projects
              </span>
              <Icon
                icon="line-md:arrow-right"
                width={24}
                height={24}
                className="text-white font-semibold"
              />
            </Button>
          </div>
        </Link>
      </div>

      <div className="flex flex-col xl:flex-row flex-wrap justify-center items-start gap-6 w-full mt-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            photo={project.photo}
            code={project.code}
            name={project.name}
            description={project.description}
          />
        ))}
      </div>
    </section>
  )
}
