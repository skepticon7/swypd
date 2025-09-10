
import {Hero, How, Navbar, Pricing, Projects, Values, CTA, SoftwareSlider, Footer, FAQ} from "./Components/index.js";


function App() {

  return (
    <div className='relative min-h-screen overflow-hidden z-0 bg-secondary-black'>
      <Navbar/>
      <Hero/>
      <Values/>
      <Projects/>
      <How/>
      <Pricing/>
      <FAQ/>
      <div className='bg-primary-red'>
          <CTA/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
