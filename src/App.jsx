import { useEffect, useState } from 'react' 
import Navber from './components/Navber'
import Banner from './components/Banner'
import Items from './components/Items'
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
      <Navber/>
      <Banner/>
      <Items/>
      <From/>
      <Footer/>
    </>
  )
}

export default App