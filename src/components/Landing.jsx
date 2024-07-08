import { motion } from 'framer-motion';
import React from 'react'
import { GoArrowRight } from "react-icons/go";

function landing() {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-1'>
        <div className='textstructure mt-40 px-20'>
            {["We Create", "eye opening", "presentations"].map((item, index)=>{
                return<div className='masker'>
                <div className='w-fit flex items-end overflow-hidden'>
                    {index === 1 && (
                        <motion.div 
                        initial = {{width:0}} 
                        animate= {{width:"9vw"}} className='mr-5 w-[8vw] rounded-md h-[6vw] relative -top-1 relative-top-[1vw] bg-red-600'></motion.div>)}
                    <h1 className='uppercase text-[7.5vw] font-extrabold font-sans leading-[7.5vw]'>{item}</h1>
                </div>
            </div>
            })}

        </div>
        <div className='border-t-[1px] border-zinc-700 mt-20 flex justify-between items-center py-[2vw] px-[8vw] '>
            {["For public and private companies","From the first pitch to IPO"].map((item,index)=><p className='text-md font-light tracking-tight leading-none font-["FOUNDERSGROTESK-SEMIBOLD"] capitalize'>{item}</p>)}
            <div className='start  flex items-center gap-5'>
            <div className='px-5 py-2 border-2 border-zinc-300 rounded-full font-light text-sm  '>Start the project
            </div>
            <div className='w-10 h-10 rounded-full border-2 border-zinc-300 justify-center flex item items-center'>
               <span className='rotate-[-25deg]'><GoArrowRight/></span> 
            </div>
        
        </div>
        </div>

    </div>
  )
}

export default landing