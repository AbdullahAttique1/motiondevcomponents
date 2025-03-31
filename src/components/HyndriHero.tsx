import { motion } from 'motion/react'

const HyndriHero = () => {
  return (
    <motion.div className="relative h-[88vh] w-full overflow-hidden md:h-screen">
      <div className="items- absolute inset-0 flex flex-col items-center justify-center px-4 text-white md:px-40">
        <motion.div
          className="pointer-events-none fixed mx-auto flex w-4xl flex-col items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <p className="mx-auto -mb-1 w-[7xl] text-start text-2xl font-light md:-mb-6 md:w-3xl md:text-center lg:text-start">
            1RA
          </p>
          <div className="max-w-8xl mx-auto flex w-full flex-col">
            <h1 className="mx-auto -mb-1 text-[2.8rem] leading-tight font-bold tracking-wide md:-mb-9 md:text-[4.5rem] lg:mx-0 lg:text-[5rem]">
              CONVENCIÓN
            </h1>
            <h1 className="mx-auto text-center text-[2.6rem] leading-tight font-bold tracking-wide md:text-[4.5rem] lg:mx-0 lg:text-[5rem]">
              HYUNDAI ESPAÑA
            </h1>
            <div className="-mt-3 flex">
              <div className="flex w-full md:max-w-xl">
                <p className="mx-auto text-xl font-light md:text-2xl lg:mx-0">
                  13 — 14 ENERO
                </p>
              </div>

              <div className="mx-auto flex justify-end md:w-[9rem] lg:mx-0">
                <p className="mx-auto text-xl font-light md:text-2xl">2025</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default HyndriHero
