import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (
    <div className='w-full py-20  bg-[#004D43] rounded-3xl'>
        <div className=' py-3 text-[10vw] leading-none border-t-2 border-b-2 border-zinc-400 flex whitespace-nowrap uppercase gap-10 overflow-hidden -mb-10 font-sans font-extrabold pr-20'>
            <motion.h1 initial={{x:0}} animate={{x: "-100%"}} transition = {{ease:"linear", repeat:Infinity, duration:5 }}  >We are the Best</motion.h1>           
            <motion.h1 initial={{x:0}} animate={{x: "-100%"}} transition = {{ease:"linear", repeat:Infinity, duration:5 }}  >We are the Best</motion.h1>           
        </div>

    </div>
  )
}

export default Marquee