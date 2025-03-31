import { useRef } from 'react'
import HandiaHeader from './HandiaHeader'
import HyndriHero from './HyndriHero'
import { motion, useScroll, useTransform } from 'motion/react'
import HaundiJorney from './HaundiJorney'
import { ScrollTextEffect } from './Carbgtextreval'
import CarmovesHaundai from './CarmovesHaundai'
import CarsLinks from './CarsLinks'
import CalltoAction from './CalltoAction'
import HundriAgenda from './HundriAgenda'
import Transporate from './Transporate'
import HandriFooter from './HandriFooter'

const Websiteproject = () => {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollY } = useScroll({
    target: ref,
    offset: ['start end', 'end center'],
  })

  const opacity = useTransform(scrollY, [1, 280], [1, 0])
  const sampleText = `Cuando
  unimos
  fuerzas, los
  resultados
  superan la
  suma de las
  partes.`
  return (
    <div className="relative flex flex-col">
      <div className="image w-full overflow-hidden">
        <motion.div
          ref={ref}
          transition={{
            duration: 0.4,
            ease: 'easeInOut',
          }}
          className="bg-background fixed top-0 right-0 left-0 -z-10 h-screen w-[98.8vw] overflow-hidden bg-cover bg-center bg-no-repeat"
          style={{
            height: '100vh',
            backgroundImage:
              "url('https://convencion-hyundai.plastic.design/images/hero.jpg')",
          }}
        ></motion.div>
      </div>

      <div className="w-[97vw] overflow-hidden md:w-[99vw]">
        <HandiaHeader />
      </div>

      <motion.div
        ref={ref}
        style={{
          opacity,
        }}
        className="hero"
      >
        <HyndriHero />
      </motion.div>
      <div className="lay relative w-[97vw] overflow-hidden bg-white md:w-[97vw] lg:w-[99vw]">
        <HaundiJorney />
      </div>

      <div
        className="sticky left-0 w-full overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://convencion-hyundai.plastic.design/_ipx/_/images/sentence.webp')",
        }}
      >
        <ScrollTextEffect
          words={sampleText}
          className="mx-auto w-[23rem] text-center text-6xl text-white md:w-[32rem] md:text-8xl"
        />
      </div>
      <div className="w-full bg-white">
        <CarmovesHaundai />
      </div>
      <div className="h-[5rem] w-full bg-white"></div>
      <div className="bg-white">
        <CarsLinks />
      </div>
      <div className="w-[97vw] overflow-hidden bg-white md:w-[98.8vw]">
        <CalltoAction />
      </div>
      <div className="agenda bg-white">
        <HundriAgenda />
      </div>
      <div className="transporate bg-white">
        <Transporate />
      </div>
      <HandriFooter />
    </div>
  )
}

export default Websiteproject
