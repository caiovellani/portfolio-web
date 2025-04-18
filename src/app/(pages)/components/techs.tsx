import { TechsStack } from '@/components/techs-stack'
import { Icon } from '@iconify/react'

const techs = [
  {
    name: 'Figma',
    description: 'Design tool',
    icon: <Icon icon="devicon:figma" width={32} height={32} />,
  },
  {
    name: 'CSS',
    description: 'User interface',
    icon: <Icon icon="devicon:css3" width={32} height={32} />,
  },
  {
    name: 'JavaScript',
    description: 'Interaction',
    icon: <Icon icon="skill-icons:javascript" width={32} height={32} />,
  },
  {
    name: 'TypeScript',
    description: 'Interaction',
    icon: <Icon icon="skill-icons:typescript" width={32} height={32} />,
  },
  {
    name: 'HTML',
    description: 'Structure Web',
    icon: <Icon icon="vscode-icons:file-type-html" width={36} height={36} />,
  },
  {
    name: 'React',
    description: 'Framework',
    icon: <Icon icon="logos:react" width={32} height={32} />,
  },
  {
    name: 'NextJS',
    description: 'Framework',
    icon: <Icon icon="tabler:brand-nextjs" width={32} height={32} />,
  },
  {
    name: 'TailwindCSS',
    description: 'User interface',
    icon: <Icon icon="logos:tailwindcss-icon" width={32} height={32} />,
  },
  {
    name: 'ExpressJS',
    description: 'Node Framework',
    icon: <Icon icon="lineicons:expressjs" width={32} height={32} />,
  },
  {
    name: 'Flutter',
    description: 'Dart Framework',
    icon: <Icon icon="logos:flutter" width={32} height={32} />,
  },
  {
    name: 'NodeJS',
    description: 'Web Server',
    icon: <Icon icon="logos:nodejs-icon" width={32} height={32} />,
  },
  {
    name: 'PostgreSQL',
    description: 'Database',
    icon: <Icon icon="devicon:postgresql" width={32} height={32} />,
  },
  {
    name: 'Firebase',
    description: 'Database',
    icon: <Icon icon="devicon:firebase" width={32} height={32} />,
  },
  {
    name: 'Dart',
    description: 'Interaction',
    icon: <Icon icon="material-icon-theme:dart" width={32} height={32} />,
  },
  {
    name: 'Git',
    description: 'Code Version',
    icon: <Icon icon="material-icon-theme:git" width={32} height={32} />,
  },
  {
    name: 'GitHub',
    description: 'Code Version',
    icon: <Icon icon="line-md:github" width={32} height={32} />,
  },
]

export function Techs() {
  return (
    <section className="min-h-screen w-full flex items-center justify-center px-4 py-12">
      <div className="absolute inset-0 z-0 bg-grid pointer-events-none" />

      <div className="container max-w-6xl flex flex-col items-center justify-center mx-auto gap-6">
        <div className="pt-10 pb-24 text-center px-2">
          <h1 className="text-5xl sm:text-5xl xl:text-[80px] leading-tight font-semibold">
            Essential Tools I use
          </h1>
          <p className="text-white/80 text-base sm:text-base mt-2">
            Discover the powerful tools and technologies I use to build
            exceptional, high-performance websites and applications.
          </p>
        </div>

        <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 w-full mt-4">
          {techs.map((tech, index) => (
            <TechsStack
              key={index}
              name={tech.name}
              description={tech.description}
              icon={tech.icon}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
