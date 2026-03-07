import React from 'react'
import Navber from './components/Navber'
import Banner from './components/Banner'
import Items from './components/Items'
import Category from './components/Category'
import From from './components/From'
import Footer from './components/Footer'
import { useEffect } from 'react'
import Lenis from 'lenis'

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      smoothTouch: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
    <Navber/>
    <Banner/>
    <Items/>
    <Category/>
    <From/>
    <Footer/>
    </>
  )
}

export default App