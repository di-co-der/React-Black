import React from 'react'
import img1 from '../assets/images/img1.jpg'

function About() {
  return (
    <div className='w-full py-20 bg-[#cdea68] rounded-3xl text-black text-[6vw] font-serif leading-[6.5vw] px-[3.5vw]'>
        <h1>Black is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>
        <div className='w-full border-t-[1px] mt-[10vw] border-[#c2d386] flex items-center'>
            <div className='w-1/2 pt-10'>
                <h1 className='text-[3vw]'>Our Approach :</h1>
                <button className='px-5 py-3 bg-zinc-900 rounded-full text-[3vw] text-white flex items-center gap-8 uppercase'>Read More
                <div className='w-3 h-3 bg-zinc-50 rounded-full'></div>
                </button>
            </div>
            <div className='w-1/2 h-[60vh]'>
            <img src= {img1} alt="people" className='h-[40vh] mt-20 rounded-2xl' /></div>
        </div>
    </div>
  )
}

export default About