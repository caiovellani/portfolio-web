import { Icon } from '@iconify/react'
import Image from 'next/image'
import Link from 'next/link'

type ProjectCardProps = {
  photo: string

  name: string
  description: string
  code: string
}

export function ProjectCard({
  photo,

  name,
  description,
  code,
}: ProjectCardProps) {
  return (
    <div className="bg-[#18181B] border mt-20  border-transparent animated-border-project rounded-2xl p-4 flex flex-col gap-4 h-[550px] w-full max-w-sm hover:scale-110 transition-transform duration-300">
      <div className="bg-[#1C1C22] rounded-xl w-full h-48 flex items-center justify-center text-white font-bold text-lg">
        <div className="relative bg-[#1C1C22] rounded-xl w-full h-48 overflow-hidden">
          <Image
            src={photo}
            fill
            alt={`${name}`}
            className="rounded-xl object-cover"
          />
        </div>
      </div>

      <div>
        <h1 className="text-zinc-100 text-xl font-bold">{name}</h1>
        <p className="text-zinc-400 font-medium">{description}</p>
      </div>
      <div className="flex justify-end mt-auto">
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={code}
          className="text-accent font-semibold flex items-center justify-center gap-2"
        >
          Code
          <Icon icon="line-md:arrow-right" width={24} height={24} />
        </Link>
      </div>
    </div>
  )
}
