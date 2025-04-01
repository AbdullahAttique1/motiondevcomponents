import { User } from 'lucide-react'
import { motion } from 'motion/react'

const HaundiJorney = () => {
  return (
    <>
      <div className="wraper w-[99.8vw] overflow-hidden md:w-[99.8vw]">
        <div className="m-auto flex w-full flex-col items-center justify-between lg:w-[52rem] lg:flex-row">
          <div className="left w-96 px-4 md:px-0 lg:w-44">
            <div className="heading mt-6 mb-4 text-xl lg:mt-1 lg:text-sm">
              Our journey
            </div>

            <div className="para text-4xl font-bold lg:text-2xl">
              Shaping the future, side by side
            </div>
          </div>

          <div className="right mt-20 w-full px-4 font-semibold md:w-[28rem] lg:px-4 lg:text-xl">
            Cada paso que damos nos acerca a un futuro de crecimiento y
            transformación. Este evento es un punto de encuentro para alinear
            fuerzas, compartir ideas y avanzar juntos. Un espacio para
            inspirarnos, conectar y prepararnos para los desafíos y
            oportunidades que nos esperan.
          </div>
        </div>

        <div className="mx-auto mt-52 flex w-full items-center justify-center overflow-hidden rounded-xl bg-white p-0 lg:max-w-[64rem] lg:p-12">
          <div className="mx-auto flex w-[24rem] items-center gap-4 overflow-hidden text-4xl font-medium lg:mx-0 lg:w-full">
            <motion.div
              className="flex items-center gap-1"
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.span
                className="-ml-1 flex items-center text-neutral-800 lg:-ml-32"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
              >
                <User className="-ml-8 h-20 w-20 lg:-ml-0 lg:h-60 lg:w-60" />
              </motion.span>
              <motion.span
                className="-ml-1 text-xl text-gray-900 lg:-ml-14 lg:text-8xl"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                viewport={{ once: true }}
              >
                +
              </motion.span>
              <motion.span
                className="-ml-1 flex items-center text-neutral-800 lg:-ml-14"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
              >
                <User className="h-20 w-20 lg:h-60 lg:w-60" />
              </motion.span>
              <motion.span
                className="-ml-1 text-xl text-gray-900 lg:-ml-14 lg:text-8xl"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                viewport={{ once: true }}
              >
                +
              </motion.span>
              <motion.span
                className="-ml-1 flex items-center text-neutral-800 lg:-ml-14"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.0, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
              >
                <User className="h-20 w-20 lg:h-60 lg:w-60" />
              </motion.span>
            </motion.div>

            <motion.span
              className="mx-4 -ml-1 text-2xl font-extrabold text-gray-900 lg:-ml-14 lg:text-7xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              =
            </motion.span>

            <motion.span
              className="-ml-4 flex flex-col text-2xl font-bold text-neutral-800 lg:text-7xl"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                color: '#003c7e', // Hyundai blue
                transition: { duration: 0.2 },
              }}
            >
              <div> Hyundai</div>
              <div>way.</div>
            </motion.span>
          </div>
        </div>

        <div className="mt-52 h-2 w-[96vw] overflow-hidden bg-white"></div>
      </div>
    </>
  )
}

export default HaundiJorney
