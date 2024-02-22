import React from 'react'
import Navbar from './Components/Navbar'
import Landing from './Components/Landing'
import Marquee from './Components/Marquee'
import About from './Components/About'
import Eyes from './Components/Eyes'
import Featured from './Components/Featured'
import Cards from './Components/Cards'
import Footer from './Components/Footer'
import LocomotiveScroll from 'locomotive-scroll';

const App = () => {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='min-h-screen bg-zinc-900 w-full text-white'>
      <Navbar />
      <Landing />
      <Marquee />
      <About />
      < Eyes />
      <Featured />
      <Cards />
      <Footer />
    </div>
  )
}

export default App

// 02.42.00