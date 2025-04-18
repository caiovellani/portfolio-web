import Link from 'next/link'

import { Github, Linkedin, Twitter, Instagram } from 'lucide-react'

const socials = [
  { icon: <Github />, path: 'https://github.com/caiovellani' },
  { icon: <Linkedin />, path: 'https://www.linkedin.com/in/caiovborges/' },
  { icon: <Twitter />, path: 'https://x.com/cvellani_' },
  { icon: <Instagram />, path: 'https://www.instagram.com/vellanicaio/' },
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
