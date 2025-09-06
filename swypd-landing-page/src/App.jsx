
import {Hero, Navbar, Projects, Values} from "./Components/index.js";
import SoftwareSlider from "./Components/SoftwareSlider.jsx";

function App() {

  return (
    <div className='relative  min-h-screen overflow-hidden z-0 bg-secondary-black'>
      <Navbar/>
      <Hero/>
      <Values/>
      <SoftwareSlider/>
      <Projects/>
    </div>
  )
}

export default App
