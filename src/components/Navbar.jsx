import React from 'react'
import logo from '../assets/images/logo.webp'

function Navbar() {
  return (
    <div className="w-full px-20 py-8 font-['FOUNDERSGROTESK-SEMIBOLD'] flex justify-between items-center fixed z-[999]">
        <div className='logo h-[7.5vw] w-[7.5vw] flex items-center '>
            {<img src= {logo} alt="logo" /> }
            <div className='ml-4 text-2xl'>Black</div>
        </div>

        <div className='links flex gap-[4vw]'>
            {["Services", "Our Work", "About Us", "Insights", "contact"].map((item, index) => (
                <a key= {index}className={`text-md font-light capitalize ${index===4 &&"ml-32"}`}>{item}</a>
            ))}
        </div>
    </div>
  )
}

export default Navbar