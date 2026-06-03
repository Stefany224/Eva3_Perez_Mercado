import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/sections/hero'
import About from './components/sections/About'
import Services from './components/sections/Services'
import Testimonials from './components/sections/Testimonials'
import FAQ from './components/sections/FAQ'
import Contact from './components/sections/Contact'
import Footer from './components/sections/Footer'

function App() {
  const [servicioSeleccionado, setServicioSeleccionado] = useState('')

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services onContactar={setServicioSeleccionado} />
      <Testimonials />
      <FAQ />
      <Contact servicioSeleccionado={servicioSeleccionado} />
      <Footer />
    </>
  )
}

export default App