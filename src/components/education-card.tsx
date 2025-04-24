'use client'
import Image from 'next/image'
import { useState } from 'react'

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
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="flex items-center justify-center">
      <div className="group flex flex-col gap-4 mt-9 w-full max-w-3xl border border-accent rounded-2xl p-4 bg-[#18181B] transition-all duration-500 hover:scale-[1.01]">
        <div className="flex gap-4 items-start">
          <div className="w-14 h-14 rounded-xl bg-[#242938] flex items-center justify-center text-white font-bold text-xs">
            <Image
              src={photo}
              width={54}
              height={54}
              alt={`${name}`}
              className="rounded-xl"
            />
          </div>

          <div className="flex flex-col">
            <h2 className="font-bold text-lg text-white">{name}</h2>
            <p className="text-sm text-zinc-300 font-medium">{education}</p>
            <span className="text-sm text-zinc-500">{time}</span>
          </div>
        </div>

        <div>
          <p className="text-zinc-100/60 font-medium">Resume:</p>
          <p
            className={`mt-2 text-base leading-relaxed text-zinc-200 ${
              expanded ? '' : 'line-clamp-3'
            } group-hover:line-clamp-none transition-all duration-300`}
          >
            {description}
          </p>
          <button
            className="mt-2 text-sm text-accent font-medium md:hidden"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? 'Ver menos' : 'Ver mais'}
          </button>
        </div>
      </div>
    </div>
  )
}
