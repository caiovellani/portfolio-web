import Link from 'next/link'

import { Github, Linkedin, Twitter, Instagram } from 'lucide-react'

const socials = [
  { icon: <Github />, path: '' },
  { icon: <Linkedin />, path: '' },
  { icon: <Twitter />, path: '' },
  { icon: <Instagram />, path: '' },
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
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        )
      })}
    </div>
  )
}
