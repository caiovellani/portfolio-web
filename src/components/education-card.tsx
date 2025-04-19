type EducationCardProps = {
  photo: string
  name: string
  education: string
  time: string
  description: string
}

export function EducationCard({
  photo,
  name,
  education,
  time,
  description,
}: EducationCardProps) {
  return (
    <div className="flex items-center justify-center p-4">
      <div className="group flex flex-col gap-4 mt-20 w-full max-w-3xl border border-accent rounded-2xl p-4 bg-[#18181B] transition-all duration-500 hover:scale-[1.01]">
        <div className="flex gap-4 items-start">
          <div className="w-14 h-14 rounded-xl bg-[#242938] flex items-center justify-center text-white font-bold text-xs">
            {photo}
          </div>

          <div className="flex flex-col">
            <h2 className="font-bold text-lg text-white">{name}</h2>
            <p className="text-sm text-zinc-300">{education}</p>
            <span className="text-sm text-zinc-500">{time}</span>
          </div>
        </div>

        <div>
          <p className="text-zinc-100/60 font-medium">Resume:</p>
          <p
            className={`mt-2 text-base leading-relaxed text-zinc-200 line-clamp-3 group-hover:line-clamp-none transition-all duration-300`}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}
