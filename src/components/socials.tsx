import Link from 'next/link'

import { Github, Linkedin, Twitter, Instagram } from 'lucide-react'
import { Icon } from '@iconify/react'

const socials = [
  {
    icon: <Icon icon="line-md:github-loop" width={26} height={26} />,
    path: 'https://github.com/caiovellani',
  },
  {
    icon: <Icon icon="line-md:linkedin" width={26} height={26} />,
    path: 'https://www.linkedin.com/in/caiovborges/',
  },
  {
    icon: <Icon icon="line-md:twitter-x" width={24} height={24} />,
    path: 'https://x.com/cvellani_',
  },
  {
    icon: <Icon icon="line-md:instagram" width={26} height={26} />,
    path: 'https://www.instagram.com/vellanicaio/',
  },
]

type SocialProps = {
  containerStyles: string
  iconStyles: string
}

export function Social({ containerStyles, iconStyles }: SocialProps) {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            target="_blank"
            key={index}
            href={item.path}
            className={iconStyles}
          >
            {item.icon}
          </Link>
        )
      })}
    </div>
  )
}
