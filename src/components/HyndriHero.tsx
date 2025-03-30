import { motion } from 'motion/react'

const HyndriHero = () => {
  return (
    <motion.div className="relative h-screen w-full overflow-hidden">
      <div className="items- absolute inset-0 flex flex-col items-center justify-center px-4 text-white md:px-40">
        <motion.div
          className="pointer-events-none fixed mx-auto flex w-4xl flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <p className="mx-auto -mb-6 w-3xl text-2xl font-light md:text-2xl">
            1RA
          </p>
          <div className="mx-auto flex w-full max-w-4xl flex-col">
            <h1 className="-mb-9 text-5xl leading-tight font-bold tracking-wide md:text-[4.5rem] lg:text-[5rem]">
              CONVENCIÓN
            </h1>
            <h1 className="text-center text-5xl leading-tight font-bold tracking-wide md:text-[4.5rem] lg:text-[5rem]">
              HYUNDAI ESPAÑA
            </h1>
            <div className="-mt-3 flex">
              <div className="flex w-full max-w-xl">
                <p className="text-xl font-light md:text-2xl">13 — 14 ENERO</p>
              </div>

              <div className="flex w-[9rem] justify-end">
                <p className="text-xl font-light md:text-2xl">2025</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default HyndriHero
