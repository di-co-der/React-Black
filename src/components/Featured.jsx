import { motion } from 'framer-motion'
import React from 'react'

function Featured() {
  return (
    <div className='w-full py-10'>
        <div className='px-13 text-[7vh] tracking-tighter font-serif font-semibold border-b-[1px] pb-[7vw] border-zinc-600'>
            <h1>Featured Projects</h1>
        </div>

        <div className='px-20'>
        <div className="cards w-full flex gap-10 pt-[10vw] mt-10">
            <div className="cardcontainer relative w-1/2 h-[60vh]">
                <div className="card w-full rounded-xl h-full bg-green-100 overflow-hidden  ">
                    <h1 className='absolute flex z-[999] font-serif font-bold text-[7vw] leading-none tracking-tighter left-full -translate-x-1/2 top-1/2 -translate-y-1/2 text-[#838675]'>FYDE <br /> VISE
                   </h1>
                    <img className=" w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                </div>
            </div>
            <div className="cardcontainer relative w-1/2 h-[60vh]">
                <div className="card w-full rounded-xl h-full bg-green-100 overflow-hidden  ">
                    <img className=" w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
                </div>
            </div>


        </div>

        </div>







    </div>
  )
}

export default Featured