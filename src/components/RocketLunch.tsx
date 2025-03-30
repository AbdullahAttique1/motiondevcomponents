import { Rocket } from 'lucide-react'
import React from 'react'
import { motion } from 'motion/react'

const RocketLunch = () => {
  return (
    <div className="text-white">
      <motion.div
        className="text-7xl"
        initial={{
          rotate: -40,
        }}
      >
        <Rocket className="h-96 text-7xl" />
      </motion.div>
    </div>
  )
}

export default RocketLunch
