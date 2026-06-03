import { useEffect, useState } from 'react'
import { getTestimonios } from './sections/services/api'
import caso1 from '../assets/img/casoC.webp'
import caso2 from '../assets/img/casoT.webp'
import caso3 from '../assets/img/casoD.webp'
import caso4 from '../assets/img/casoU.webp'
import './TestimonialCarousel.css'

const imagenes = [caso1, caso2, caso3, caso4]

function TestimonialCarousel() {
  const [testimonios, setTestimonios] = useState([])
  const [actual, setActual] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getTestimonios()
      .then((res) => {
        setTestimonios(res)
        setLoading(false)
      })
      .catch((err) => {
        console.error(err)
        setLoading(false)
      })
  }, [])

  const anterior = () => {
    setActual((prev) => (prev === 0 ? testimonios.length - 1 : prev - 1))
  }

  const siguiente = () => {
    setActual((prev) => (prev === testimonios.length - 1 ? 0 : prev + 1))
  }

  if (loading) return <p style={{ textAlign: 'center' }}>Cargando testimonios...</p>
  if (testimonios.length === 0) return null

  return (
    <div className="carrusel">
      <button className="carrusel-btn" onClick={anterior} aria-label="Anterior">&#8592;</button>
      <div
        className="carrusel-tarjeta"
        style={{ backgroundImage: `url(${imagenes[actual]})` }}
      >
        <div className="carrusel-overlay">
          <p className="carrusel-opinion">"{testimonios[actual].opinion}"</p>
          <h4 className="carrusel-nombre">{testimonios[actual].nombre}</h4>
          <p className="carrusel-empresa">{testimonios[actual].empresa}</p>
          <p className="carrusel-comuna">{testimonios[actual].comuna}</p>
        </div>
      </div>
      <button className="carrusel-btn" onClick={siguiente} aria-label="Siguiente">&#8594;</button>
      <div className="carrusel-puntos">
        {testimonios.map((_, i) => (
          <span
            key={i}
            className={`punto ${i === actual ? 'activo' : ''}`}
            onClick={() => setActual(i)}
          />
        ))}
      </div>
    </div>
  )
}

export default TestimonialCarousel