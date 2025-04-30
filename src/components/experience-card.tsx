'use client'

type ExperienceCardProps = {
  name: string
  type: string
  time: string
  description: string
  skills: string
}

export function ExperienceCard({
  name,
  type,
  time,
  description,
  skills,
}: ExperienceCardProps) {
  return (
    <div className="flex items-center justify-center">
      <div className="group flex flex-col gap-4 mt-9 w-full max-w-3xl border border-transparent animate-border-flow rounded-2xl p-4 bg-[#18181B] transition-transform duration-300 hover:scale-[1.01]">
        <div className="flex gap-4 items-start">
          <div className="flex flex-col">
            <h2 className="font-bold text-lg text-white">{name}</h2>
            <p className="text-sm text-zinc-300 font-medium">{type}</p>
            <span className="text-sm text-zinc-500">{time}</span>
          </div>
        </div>

        <div>
          <p className="text-zinc-100/60 font-medium">Resume:</p>
          <p className="text-base leading-relaxed text-zinc-200 mb-2">
            {description}
          </p>

          <p className="text-zinc-100/60 font-medium">
            Skills: <span className="text-zinc-200">{skills}</span>
          </p>
        </div>
      </div>
    </div>
  )
}
