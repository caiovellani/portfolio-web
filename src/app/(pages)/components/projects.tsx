import { ArrowRightIcon } from 'lucide-react'

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

      <div className="bg-[#18181B] border mt-20  border-accent rounded-2xl p-4 flex flex-col gap-4 w-full max-w-sm hover:scale-[1.01] transition-transform duration-300">
        <div className="bg-[#1C1C22] rounded-xl w-full h-48 flex items-center justify-center text-white font-bold text-lg">
          PROJECT PHOTO
        </div>

        <div className=" flex flex-wrap gap-2 justify-center">
          <span className="border border-accent text-zinc-300 px-4 py-1 bg-[#1c1c22] rounded-4xl text-sm">
            NextJS
          </span>
        </div>

        <div>
          <h1 className="text-zinc-100 text-xl font-bold">Project name</h1>
          <p className="text-zinc-400 font-medium">Descrição do projeto</p>
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
    </section>
  )
}
