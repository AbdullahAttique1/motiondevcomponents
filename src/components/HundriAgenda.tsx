import { ArrowUpRight } from 'lucide-react'
import { useScroll, motion, useMotionValueEvent } from 'motion/react'
import { useRef, useState } from 'react'

const HundriAgenda = () => {
  const [width, setWidth] = useState<number>(100)
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const newWidth = 100 - latest * 200
    setWidth(Math.max(50, newWidth))
  })

  return (
    <>
      <div className="relative flex flex-col" ref={ref}>
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <motion.div
            style={{ width: `${width}vw` }}
            className="relative h-full w-full bg-blue-500"
          >
            <div className="absolute inset-0 z-10 flex items-center justify-center">
              <h1 className="text-3xl text-white">El espacio</h1>
            </div>

            <div className="h-full w-full">
              <img
                className="h-full w-full object-cover"
                src="https://convencion-hyundai.plastic.design/_ipx/_/images/venue.jpg"
                alt="Venue"
              />
            </div>
          </motion.div>
        </div>

        <div className="top-screen relative flex w-[48vw] flex-col self-end p-8 text-xl text-black">
          <h1 className="mb-4 text-2xl font-bold">Finca el Olivar.</h1>
          <p>
            Ubicado en un entorno privilegiado, El Olivar no es solo un lugar,
            es el escenario perfecto donde nuestra visión de futuro tomará
            forma. Este espacio, con sus amplias instalaciones y su diseño
            pensado para la creatividad y la colaboración, será el punto de
            encuentro donde el equipo de Hyundai Motor España dará los primeros
            pasos hacia el liderazgo. <br />{' '}
            <div className="mt-4">
              Con zonas interiores equipadas con tecnología de vanguardia y más
              de 20.000 m² de jardines, El Olivar ofrece el equilibrio perfecto
              entre funcionalidad e inspiración. Aquí, cada detalle está
              diseñado para facilitar la conexión, el aprendizaje y el
              intercambio de ideas.
            </div>
            <div className="my-8 flex gap-4 font-bold">
              <ArrowUpRight /> Ver más
            </div>
          </p>
          <div className="images flex flex-col gap-10">
            <img
              src="https://convencion-hyundai.plastic.design/images/venue1.jpg"
              alt=""
            />
            <img
              src="https://convencion-hyundai.plastic.design/images/venue2.jpg"
              alt=""
            />
            <img
              src="https://convencion-hyundai.plastic.design/images/venue3.jpg"
              alt=""
            />
          </div>
          <div>
            El acceso en vehículo particular es sencillo desde la A-2.
            Contaremos con un parking privado, cerrado y vigilado las 24 horas,
            donde podrás estacionar tu vehículo con total seguridad. Camino del
            Olivar, 9 28806 Alcalá de Henares, Madrid.{' '}
            <div className="my-8 flex gap-4 font-bold">
              <ArrowUpRight /> Ver más
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HundriAgenda
