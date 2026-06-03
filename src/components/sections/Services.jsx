import { useEffect, useState } from 'react'
import { getServicios } from './services/api'
import ServiceCard from '../ServiceCard'
import imgPreventivo from '../../assets/img/acompanamiento.webp'
import imgCorrectivo from '../../assets/img/correctivo.webp'
import imgCapacitacion from '../../assets/img/innovacion.webp'
import './Services.css'

const imagenesMap = {
  'srv-1': imgPreventivo,
  'srv-2': imgCorrectivo,
  'srv-3': imgCapacitacion
}

function Services({ onContactar }) {
  const [servicios, setServicios] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getServicios()
      .then((res) => {
        setServicios(res)
        setLoading(false)
      })
      .catch((err) => {
        console.error(err)
        setError('Error al cargar los servicios.')
        setLoading(false)
      })
  }, [])

  if (loading) return (
    <section className="services" id="servicios">
      <div className="services-contenido">
        <p style={{ textAlign: 'center' }}>Cargando servicios...</p>
      </div>
    </section>
  )

  if (error) return (
    <section className="services" id="servicios">
      <div className="services-contenido">
        <p style={{ textAlign: 'center', color: 'red' }}>{error}</p>
      </div>
    </section>
  )

  return (
    <section className="services" id="servicios">
      <div className="services-contenido">
        <h2>Nuestros Servicios</h2>
        <p>Ofrecemos un conjunto completo de servicios para impulsar tu negocio.</p>
        <div className="services-grid">
          {servicios.map((servicio) => (
            <ServiceCard
              key={servicio.id}
              imagen={imagenesMap[servicio.id]}
              titulo={servicio.titulo}
              descripcion={servicio.descripcion}
              onContactar={onContactar}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services