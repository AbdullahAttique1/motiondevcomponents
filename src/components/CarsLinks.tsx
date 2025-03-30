'use client'

import { useState } from 'react'
import { motion } from 'motion/react'

type carimagest = {
  title: string
  img: string
  description: string
}

const carimages: carimagest[] = [
  {
    title: 'Activar',
    img: 'https://convencion-hyundai.plastic.design/_ipx/_/images/accordion1.jpg',
    description:
      'Activar Información y comunicación sobreresultados, planes ynovedades.',
  },
  {
    title: 'Inspirar',
    img: 'https://convencion-hyundai.plastic.design/_ipx/_/images/accordion2.jpg',
    description:
      'Activar Información y comunicación sobreresultados, planes ynovedades.',
  },
  {
    title: 'Colaborar',
    img: 'https://convencion-hyundai.plastic.design/_ipx/_/images/accordion3.jpg',
    description:
      'Activar Información y comunicación sobreresultados, planes ynovedades.',
  },
  {
    title: 'Motivar',
    img: 'https://convencion-hyundai.plastic.design/_ipx/_/images/accordion4.jpg',
    description:
      'Activar Información y comunicación sobreresultados, planes ynovedades.',
  },
]

export default function CarsLinks() {
  const [hover, setHover] = useState<Number | null>(null)

  return (
    <div className="h-[40rem] overflow-hidden">
      <div className="flex h-full">
        {carimages.map((carimage, index) => (
          <motion.div
            className="relative cursor-pointer"
            key={index}
            initial={{ flex: 1 }}
            animate={{
              flex: hover === index ? 1.2 : hover === null ? 1 : 0.5,
            }}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(null)}
          >
            <motion.div className="title absolute top-3 left-3 text-4xl font-semibold text-white">
              {carimage.title}
            </motion.div>

            <div className="image h-full">
              <img
                className="h-full object-cover"
                src={carimage.img}
                alt="sad"
              />
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: hover === index ? 1 : 0,
              }}
              className="absolute bottom-5 left-5 max-w-[15rem] text-xl font-medium text-white"
            >
              {carimage.description}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
