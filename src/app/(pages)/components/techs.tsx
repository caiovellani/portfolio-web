'use client'

import { TechsStack } from '@/components/techs-stack'
import { Button } from '@/components/ui/button'
import { Icon } from '@iconify/react'
import { useEffect, useState } from 'react'

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
  const [expanded, setExpanded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const checkIsMobile = () => setIsMobile(window.innerWidth < 768)

      checkIsMobile()
      window.addEventListener('resize', checkIsMobile)
      setHasMounted(true)

      return () => window.removeEventListener('resize', checkIsMobile)
    }
  }, [])

  if (!hasMounted) return null // avoid rendering in SSR

  const visibleTechs = isMobile && !expanded ? techs.slice(0, 5) : techs

  return (
    <section
      id="techs"
      className="min-h-screen w-full flex items-center justify-center px-6 py-8 overflow-hidden font-poppins"
    >
      <div className="absolute inset-0 z-0 bg-grid pointer-events-none" />

      <div className="container max-w-6xl flex flex-col items-center justify-center mx-auto">
        <div className="pt-10 pb-24 text-center px-2">
          <h1 className="text-5xl sm:text-5xl xl:text-[80px] leading-tight font-semibold">
            Essential Tools I use
          </h1>
          <p className="text-zinc-50/60 font-medium leading-tight mt-4">
            Discover the powerful tools and technologies I use to build
            exceptional, high-performance websites and applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3 w-full">
          {visibleTechs.map((tech, index) => (
            <TechsStack
              key={index}
              name={tech.name}
              description={tech.description}
              icon={tech.icon}
            />
          ))}
        </div>

        {isMobile && techs.length > 5 && (
          <div className="w-full flex justify-end mt-4 md:hidden">
            <Button
              onClick={() => setExpanded(!expanded)}
              className="text-sm text-accent font-medium md:hidden rounded-2xl hover:text-hover transition-all duration-300"
            >
              {expanded ? 'Ver menos' : 'Ver mais'}
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
