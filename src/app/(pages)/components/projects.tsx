import { ProjectCard } from '@/components/project-card'

export function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen justify-center items-center flex flex-col w-full container mx-auto font-poppins"
    >
      <div className="flex flex-col items-center justify-center p-4">
        <h1 className="text-[48px] font-bold xl:text-[80px]">Projects</h1>
        <p className="text-zinc-50/60 text-center text-base font-medium leading-tight">
          I have worked on a wide range of web application projects. Here are
          some of my projects.
        </p>
      </div>

      <ProjectCard
        projectPhoto="Project Photo"
        projectTechs="NextJS"
        projectName="Project Name"
        projectDescription="Project Description"
      />
    </section>
  )
}
