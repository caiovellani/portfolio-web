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

      <div className="flex items-center justify-center p-4">
        <div className="group flex flex-col gap-4 mt-20 w-full max-w-3xl border border-accent rounded-2xl p-4 bg-[#18181B] transition-all duration-500 hover:scale-[1.01]">
          <div className="flex gap-4 items-start">
            <div className="w-14 h-14 rounded-xl bg-[#242938] flex items-center justify-center text-white font-bold text-xs">
              PHOTO
            </div>

            <div className="flex flex-col">
              <h2 className="font-bold text-lg text-white">
                Estácio de Sá University
              </h2>
              <p className="text-sm text-zinc-300">
                System Analysis and Development
              </p>
              <span className="text-sm text-zinc-500">
                August 2022 - December 2025
              </span>
            </div>
          </div>

          <div>
            <p className="text-zinc-100/60 font-medium">Resume:</p>
            <p
              className={`mt-2 text-base leading-relaxed text-zinc-200 line-clamp-3 group-hover:line-clamp-none transition-all duration-300`}
            >
              I am currently pursuing a degree in Systems Analysis and
              Development at Estácio de Sá University, expected to graduate in
              2025. Throughout the program, I’ve been deepening my knowledge in
              technology, programming, and systems management. This education
              has provided me with a broad and practical understanding of the
              system lifecycle and the development of innovative technological
              solutions, consolidating my career in the field of information
              technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
