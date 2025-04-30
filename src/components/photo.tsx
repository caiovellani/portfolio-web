'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import imgCaio from '@/../public/caio.png'

export function Photo() {
  return (
    <div className="relative w-[300px] h-[300px] xl:w-[380px] xl:h-[380px] flex items-center justify-center pointer-events-none overflow-hidden p-2">
      <motion.svg
        className="absolute w-full h-full xl:flex xl:transform xl:translate-x-[-20px]"
        fill="transparent"
        viewBox="0 0 506 506"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.circle
          cx="255"
          cy="255"
          r="220"
          stroke="#00FF99"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ strokeDasharray: '24 10 0 0 ' }}
          animate={{
            strokeDasharray: ['15 120 25 25', '16 25 92 72', '4 250 22 22'],
            rotate: [120, 360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      </motion.svg>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: 'easeInOut' },
        }}
        className="relative w-[260px] h-[260px] xl:w-[330px] xl:h-[330px] mix-blend-lighten pointer-events-none xl:flex xl:transform xl:translate-x-[-20px] xl:translate-y-[-25px]"
      >
        <Image
          src={imgCaio}
          alt="Foto ilustrativa sobre mim"
          priority
          height={400}
          width={400}
          quality={100}
          className="object-contain mx-5 my-6"
        />
      </motion.div>
    </div>
  )
}
