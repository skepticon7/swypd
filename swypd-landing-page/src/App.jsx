
import {Hero, How, Navbar, Pricing, Projects, Values, CTA, SoftwareSlider, Footer, FAQ} from "./components/index.js";
import {Toaster} from "react-hot-toast"

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
        <Toaster
            toastOptions={{
                style : {
                    background : '#D9D9D9'
                }
            }}
            />
    </div>
  )
}

export default App
