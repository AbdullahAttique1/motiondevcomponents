import { useState } from 'react'
import { motion } from 'motion/react'

const LayoumotionNavbar = () => {
  const navItrems = [
    {
      title: 'Home',
      link: '#',
    },
    {
      title: 'About',
      link: '#',
    },
    {
      title: 'Contact',
      link: '#',
    },
    {
      title: 'login',
      link: '#',
    },
  ]
  const [hovered, setHovered] = useState<Number | null>(null)
  return (
    <div>
      <div className="py-40">
        <nav className="mx-auto flex max-w-xl items-center justify-center rounded-full bg-gray-100 px-4 py-1">
          {navItrems.map((item, index) => {
            return (
              <a
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                key={index}
                href={item.link}
                className="group relative w-full py-2 text-center text-sm font-bold text-black"
              >
                {hovered === index && (
                  <motion.div
                    layoutId={`hover`}
                    className="absolute inset-0 h-full w-full rounded-full bg-black"
                  ></motion.div>
                )}
                <span className="relative group-hover:text-white">
                  {item.title}
                </span>
              </a>
            )
          })}
        </nav>
      </div>
    </div>
  )
}

export default LayoumotionNavbar
