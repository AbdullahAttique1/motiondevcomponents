import { ArrowUpRight } from 'lucide-react'
import { motion } from 'motion/react'

const CalltoAction = () => {
  return (
    <>
      <div className="relative mb-5">
        <div className="relative flex flex-col items-center justify-center md:h-[45rem] md:flex-row">
          <div className="right ml-1 flex w-full flex-col items-start justify-center px-1 md:ml-14 md:w-[50%]">
            <div className="h1">
              <h1 className="mt-16 ml-8 text-center text-3xl font-semibold md:ml-1 md:text-6xl">
                Únete a nosotros.
              </h1>
            </div>
            <div className="p mb-2 flex w-md items-center justify-center px-6 pt-[2rem] text-xl font-semibold md:mt-[16rem] md:px-1">
              <p>
                Únete a nosotros en este momento clave y se parte de la
                transformación que llevará a Hyundai Motor España a nuevas
                alturas. Inscríbete ahora y sé protagonista de un evento que
                marcará la diferencia. Únete a nosotros en este momento clave y
                se parte de la transformación que llevará a Hyundai Motor España
                a nuevas alturas. Inscríbete ahora y sé protagonista de un
                evento que marcará la diferencia.
              </p>
            </div>
          </div>

          <motion.div
            initial={{ backgroundColor: 'rgb(245, 245, 245)' }}
            whileHover={{
              backgroundColor: 'rgb(38, 38, 38)',
              transition: { duration: 0.3 },
            }}
            className="left group relative h-full w-[50%] overflow-hidden"
          >
            <motion.div
              initial={{ opacity: 1, right: '-4rem', bottom: '-4rem' }}
              whileHover={{
                opacity: 1,
                color: 'white',
                transition: { duration: 0.3 },
              }}
              className="absolute"
            >
              <ArrowUpRight className="h-[30rem] w-[30rem] text-neutral-800 group-hover:text-white" />
            </motion.div>
          </motion.div>
        </div>
        <div className="sticky top-0 left-0 z-0 h-screen w-full">
          <img
            src="https://convencion-hyundai.plastic.design/_ipx/_/images/register.jpg"
            alt="Hyundai convention background"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </>
  )
}

export default CalltoAction
