import { User } from 'lucide-react'
import { motion } from 'motion/react'

const HaundiJorney = () => {
  return (
    <>
      <div className="m-auto flex w-[52rem] items-center justify-between">
        <div className="left w-36">
          <div className="heading mb-4 text-sm">Our journey</div>

          <div className="para text-xl font-bold">
            Shaping the future, side by side
          </div>
        </div>

        <div className="right mt-20 w-md text-lg font-semibold">
          Cada paso que damos nos acerca a un futuro de crecimiento y
          transformación. Este evento es un punto de encuentro para alinear
          fuerzas, compartir ideas y avanzar juntos. Un espacio para
          inspirarnos, conectar y prepararnos para los desafíos y oportunidades
          que nos esperan.
        </div>
      </div>

      <div className="mx-auto mt-52 flex max-w-[52rem] items-center justify-center overflow-hidden rounded-xl bg-white p-12">
        <div className="flex items-center gap-4 text-4xl font-medium">
          <motion.div
            className="flex items-center gap-1"
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.span
              className="-ml-32 flex items-center text-neutral-800"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
            >
              <User className="h-60 w-60" />
            </motion.span>
            <motion.span
              className="-ml-14 text-8xl text-gray-900"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
            >
              +
            </motion.span>
            <motion.span
              className="-ml-14 flex items-center text-neutral-800"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
            >
              <User className="h-60 w-60" />
            </motion.span>
            <motion.span
              className="-ml-14 text-8xl text-gray-900"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              viewport={{ once: true }}
            >
              +
            </motion.span>
            <motion.span
              className="-ml-14 flex items-center text-neutral-800"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.0, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
            >
              <User className="h-60 w-60" />
            </motion.span>
          </motion.div>

          <motion.span
            className="mx-4 -ml-14 text-7xl font-extrabold text-gray-900"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            =
          </motion.span>

          <motion.span
            className="-ml-4 text-7xl font-bold text-neutral-800"
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
            Hyundai way.
          </motion.span>
        </div>
      </div>

      <div className="mt-52 h-2 bg-white"></div>
    </>
  )
}

export default HaundiJorney
