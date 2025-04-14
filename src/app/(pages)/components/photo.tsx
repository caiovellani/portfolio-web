'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import imgCaio from '@/../public/caio.png'

export function Photo() {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: 'easeIn' },
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: 'easeInOut' },
          }}
        >
          <div className="w-[312px] h-[312px] xl:w-[512px] xl:h-[512px] mix-blend-lighten">
            <Image
              src={imgCaio}
              alt="Foto ilustrativa sobre mim"
              priority
              quality={100}
              fill
              className="object-contain rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
