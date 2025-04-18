'use client'

import CountUp from 'react-countup'

const stats = [
  {
    num: 12,
    text: 'Years of experience',
  },
  {
    num: 26,
    text: 'Projects completed',
  },
  {
    num: 8,
    text: 'Techonolgies mastered',
  },
  {
    num: 1354,
    text: 'Code commits',
  },
]

export function Stats() {
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none font-jetbrains">
          {stats.map((item, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                <p
                  className={`${
                    item.text.length < 15 ? 'max-w-[100px]' : 'max-w-[150px]'
                  } leading-tight text-zinc-50/80`}
                >
                  {item.text}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
