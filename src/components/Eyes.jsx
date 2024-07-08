import React, { useEffect, useState } from 'react'
import img2 from '../assets/images/img2.jpg'
function Eyes() {

    const[rotate, setRotate] = useState(0);

    useEffect(()=>{
        window.addEventListener("mousemove", (e)=>{
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let deltaX = mouseX - window.innerWidth/2;
            let deltaY = mouseY - window.innerHeight/2;

            var angle = Math.atan2(deltaY, deltaX) * (180/Math.PI);
            setRotate(angle-180);
        })
    })

  return (
    <div className='eyes w-full overflow-hidden'>
        <div className='w-full h-full relative'>
            <div >
                <div className='flex gap-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                    <div className='flex items-center justify-center w-[15vw] h-[15vw] bg-zinc-50 rounded-full'>
                        <div className='relative w-2/3 h-2/3 bg-zinc-900 rounded-full'>
                            <div style = {{transform : `translate(-50%, -50%) rotate(${rotate}deg) `}} className=' line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-5'>
                            <div className='w-5 h-5 bg-zinc-100 rounded-full'></div>
                            </div>
                        </div>
                    </div>

                    <div className='flex items-center justify-center w-[15vw] h-[15vw] bg-zinc-50 rounded-full'>
                        <div className='relative w-2/3 h-2/3 bg-zinc-900 rounded-full'>
                            <div style = {{transform : `translate(-50%, -50%) rotate(${rotate}deg) `}} className=' line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-5'>
                            <div className='w-5 h-5 bg-zinc-100 rounded-full'></div>
                            </div>
                        </div>
                    </div>
                </div>
            <img src={img2} alt="eyes"/>
            </div>
        </div>
    </div>
  )
}

export default Eyes