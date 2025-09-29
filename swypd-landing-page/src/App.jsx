
import {Hero, How, Navbar, Pricing, Projects, Values, CTA, SoftwareSlider, Footer, FAQ} from "./components/index.js";
import {Toaster} from "react-hot-toast"
import {ServiceProvider} from "@/context/context.jsx";

function App() {

  return (
      <ServiceProvider>
          <div className='relative min-h-screen overflow-hidden z-0 bg-secondary-black'>
              <Navbar/>
              <Hero/>
              <Values/>
              <Projects/>
              <How/>
              <FAQ/>
              <div className='bg-primary-red'>
                  <CTA/>
              </div>
              <Footer/>
              <Toaster
                  toastOptions={{
                      style: {
                          background: '#D9D9D9'
                      }
                  }}
              />
          </div>
      </ServiceProvider>

  )
}

export default App
