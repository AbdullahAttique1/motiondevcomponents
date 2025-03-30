import { motion } from 'motion/react'

const Header = () => {
  return (
    <motion.div className="sticky top-4 z-20 m-auto mt-4 flex h-20 w-[80vw] items-center justify-between rounded-3xl border-2 border-red-100 bg-white/5 text-white">
      <div className="home ml-4 font-bold">
        {' '}
        <a className="hover:scale-105" href="/">
          {' '}
          Home
        </a>
      </div>

      <ul className="flex gap-4 font-bold">
        <a className="hover:scale-105" href="/">
          {' '}
          <li>Carears</li>
        </a>
        <a className="hover:scale-105" href="/">
          {' '}
          <li>Testimonial</li>
        </a>
        <a className="hover:scale-105" href="/">
          {' '}
          <li>Privacy</li>
        </a>
        <a className="hover:scale-105" href="/">
          {' '}
          <li>Conact</li>
        </a>
        <a className="hover:scale-105" href="/">
          {' '}
          <li>About</li>
        </a>
      </ul>

      <div className="vdashboard">
        <motion.button
          className="mr-4 rounded-2xl bg-orange-500 p-4 hover:scale-105"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onHoverStart={() => console.log('hover started!')}
        >
          Dashboard
        </motion.button>
      </div>
    </motion.div>
  )
}

export default Header
