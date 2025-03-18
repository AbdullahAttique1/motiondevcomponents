import { motion } from "motion/react"

const Header = () => {
  return (
    <motion.div 


    
    className='bg-white/5 mt-4 text-white z-20 h-20 rounded-3xl w-[80vw]
     flex items-center justify-between m-auto
     sticky top-4  border-2 border-red-100 
     '>

<div className="home ml-4 font-bold">    <a className="hover:scale-105" href="/"> Home</a></div>

<ul className="flex font-bold gap-4">
    <a className="hover:scale-105" href="/"> <li>Carears</li></a>
    <a className="hover:scale-105" href="/"> <li>Testimonial</li></a>
    <a className="hover:scale-105" href="/"> <li>Privacy</li></a>
    <a className="hover:scale-105" href="/"> <li>Conact</li></a>
    <a className="hover:scale-105" href="/"> <li>About</li></a>
</ul>
        

        <div className="vdashboard">

            
     <motion.button
className="bg-orange-500  rounded-2xl p-4 mr-4 hover:scale-105"
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
  onHoverStart={() => console.log('hover started!')}
>Dashboard</motion.button>

        </div>
        </motion.div>
  )
}

export default Header