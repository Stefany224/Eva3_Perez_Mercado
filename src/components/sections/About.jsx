import React, { useEffect, useState } from 'react'
import { getnosotros } from './services/api'
import './About.css'

function About() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getnosotros()
      .then((res) => {
        setData(res)
        setLoading(false)
      })
      .catch((err) => {
        console.error(err)
        setError("Error al cargar la informacion institucional.")
        setLoading(false)
      })
  }, [])

  // 1. Estado de Carga
  if (loading) {
    return (
      <section className="about" id="nosotros">
        <div className="about-contenido" style={{ textAlign: 'center', padding: '3rem' }}>
          <p>Cargando información de SERCOTEC...</p>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="about" id="nosotros">
        <div className="about-contenido" style={{ textAlign: 'center', padding: '3rem', color: 'red' }}>
          <p>{error}</p>
        </div>
      </section>
    )
  }


  return (
    <section className="about" id="nosotros">
      <div className="about-contenido">
        <h2>{data.titulo || "¿Quienes Somos?"}</h2>
        
        <p className="about-descripcion">{data.descripcion}</p>
        
        {/* Tus 3 Tarjetas organizadas con Flexbox mediante tus clases */}
        <div className="about-cards">
          <div className="about-card">
            <h3>Mision</h3>
            <p>{data.mision}</p>
          </div>
          
          <div className="about-card">
            <h3>Vision</h3>
            <p>{data.vision}</p>
          </div>
          
          <div className="about-card">
            <h3>Cobertura</h3>
            <p>
              Atendemos las comunas de{' '}
              {data.comunas ? data.comunas.join(' y ') : 'Santiago y Providencia'}{' '}
              con presencia en universidades como UTEM, U. Autonoma y DUOC Alameda.
            </p>
          </div>
        </div>

        {/* Tu barra de estadísticas con fondo azul principal y números en amarillo */}
        <div className="about-stats">
          <div className="stat">
            <h4>3.200+</h4>
            <p>Empresas atendidas</p>
          </div>
          <div className="stat">
            <h4>$22.450M</h4>
            <p>En aumento de ventas</p>
          </div>
          <div className="stat">
            <h4>1.834</h4>
            <p>Nuevos empleos</p>
          </div>
          <div className="stat">
            <h4>$4.752M</h4>
            <p>Financiamiento aprobado</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About