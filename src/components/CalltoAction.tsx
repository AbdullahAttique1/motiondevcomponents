import { ArrowUpRight } from 'lucide-react'
import { motion } from 'motion/react'

const CalltoAction = () => {
  return (
    <>
      <div className="relative">
        <div className="relative flex h-[45rem] items-center justify-center">
          <div className="right ml-14 flex w-[50%] flex-col items-start justify-center">
            <div className="h1">
              <h1 className="mt-16 text-6xl font-semibold">
                Únete a nosotros.
              </h1>
            </div>
            <div className="p mt-[20rem] flex w-md items-center justify-center text-xl font-semibold">
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
