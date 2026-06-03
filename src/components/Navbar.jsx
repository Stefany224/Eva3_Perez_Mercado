import { useEffect, useState } from 'react'
import './Navbar.css'
import logo_sercotec from '../assets/img/logo_sercotec.webp'

function Navbar() {
  const [visible, setVisible] = useState(true)
  const [ultimoScroll, setUltimoScroll] = useState(0)

  useEffect(() => {
  const handleScroll = () => {
    const scrollActual = window.scrollY
    if (scrollActual < ultimoScroll) {
      setVisible(true)
    } else if (scrollActual > ultimoScroll) {
      setVisible(false)
    }
    setUltimoScroll(scrollActual)
  }

  window.addEventListener('scroll', handleScroll)
  return () => window.removeEventListener('scroll', handleScroll)
}, [ultimoScroll])

  return (
    <nav className={`navbar ${visible ? 'navbar-visible' : 'navbar-oculta'}`}>
      <div className="navbar-logo">
        <img src={logo_sercotec} alt="Logo SERCOTEC" />
      </div>
      <ul className="navbar-links">
        <li><a href="#nosotros">Nosotros</a></li>
        <li><a href="#servicios">Servicios</a></li>
        <li><a href="#testimonios">Testimonios</a></li>
        <li><a href="#faq">Preguntas Frecuentes</a></li>
        <li><a href="#contacto" className="btn-contacto">Contactanos</a></li>
      </ul>
    </nav>
  )
}

export default Navbar