import React from 'react';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Marquee from './components/Marquee';
import About from './components/About';
import Eyes from './components/Eyes';
import Featured from './components/Featured';
import Footer from './components/Footer';
import LocomotiveScroll from 'locomotive-scroll';


function App() {

const locomotiveScroll = new LocomotiveScroll();
  
  return (
    <div className='min-h-screen w-full text-white bg-zinc-900'>
    <Navbar/> 
    <Landing/>
    <Marquee/>
    <About/>
    <Eyes/>
    <Featured/>
    <Footer/>
    </div> 

  )
}

export default App