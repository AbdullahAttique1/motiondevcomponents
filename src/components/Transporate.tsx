import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from 'motion/react'
import { useRef } from 'react'

const Transporate = () => {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    console.log(latest, 'latestdsfsdf')
  })
  const scale = useTransform(scrollYProgress, [0, 0.6], [1, 2])

  return (
    <div ref={ref} className="flex min-h-[150vh] flex-col bg-neutral-100">
      <div className="h-16 bg-white"></div>
      <div className="m-auto mt-[10rem] w-2xl text-center text-4xl font-bold">
        “Bienvenidos a la I Convención de Hyundai Motor España, dónde tú eres el
        protagonista. Nunca dejes de avanzar. Nunca dejes de desafiar lo
        convencional y de marcar el camino. Da lo mejor de ti mismo. Piensa sin
        límites mientras trabajas, porque juntos, hacemos Hyundai”
        <div className="m-auto mt-10 w-xl text-center text-xl text-gray-700">
          Leopoldo Satrustegui, CEO Hyundai España
        </div>
        <motion.div
          style={{
            scale,
          }}
          className="mx-auto mt-[15rem] aspect-video w-[40vw] overflow-hidden"
        >
          <video
            poster="https://convencion-hyundai.plastic.design/_ipx/_/images/accordion4.jpg"
            className="w-full object-cover"
            src="https://convencion-hyundai.plastic.design/images/video.mp4"
            autoPlay
            loop
            muted
          ></video>
        </motion.div>
      </div>
      <div className="h-[50vh] bg-neutral-100"></div>
    </div>
  )
}

export default Transporate
