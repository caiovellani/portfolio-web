import { ArrowRightIcon } from 'lucide-react'

type ProjectCardProps = {
  projectPhoto: string
  projectTechs: string
  projectName: string
  projectDescription: string
}

export function ProjectCard({
  projectPhoto,
  projectTechs,
  projectName,
  projectDescription,
}: ProjectCardProps) {
  return (
    <div className="bg-[#18181B] border mt-20  border-accent rounded-2xl p-4 flex flex-col gap-4 w-full max-w-sm hover:scale-[1.01] transition-transform duration-300">
      <div className="bg-[#1C1C22] rounded-xl w-full h-48 flex items-center justify-center text-white font-bold text-lg">
        {projectPhoto}
      </div>

      <div className=" flex flex-wrap gap-2 justify-center">
        <span className="border border-accent text-zinc-300 px-4 py-1 bg-[#1c1c22] rounded-4xl text-sm">
          {projectTechs}
        </span>
      </div>

      <div>
        <h1 className="text-zinc-100 text-xl font-bold">{projectName}</h1>
        <p className="text-zinc-400 font-medium">{projectDescription}</p>
      </div>
      <div className="flex justify-end mt-auto">
        <a
          target="_blank"
          href="#"
          className="text-accent font-semibold flex items-center justify-center gap-2"
        >
          Code
          <ArrowRightIcon className="w-5 h-5" />
        </a>
      </div>
    </div>
  )
}
