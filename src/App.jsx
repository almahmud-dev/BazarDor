import { useEffect, useState } from 'react'  // ✅ useState add
import Navber from './components/Navber'
import Banner from './components/Banner'
import Items from './components/Items'
import Category from './components/Category'
import From from './components/From'
import Footer from './components/Footer'
import Lenis from 'lenis'
import Modal from './components/Model'

const App = () => {
  const [showModal, setShowModal] = useState(true);  

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
      {showModal && <Modal onClose={() => setShowModal(false)} />}
      {/* <Modal/> */}
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