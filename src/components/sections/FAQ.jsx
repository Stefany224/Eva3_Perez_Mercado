import { useEffect, useState } from 'react'
import { getFaq } from './services/api'
import './FAQ.css'

function FAQ() {
  const [preguntas, setPreguntas] = useState([])
  const [loading, setLoading] = useState(true)
  const [abierta, setAbierta] = useState(null)

  useEffect(() => {
    getFaq()
      .then((res) => {
      setPreguntas(Array.isArray(res) ? res : [])
      setLoading(false)
      })
      .catch((err) => {
        console.error(err)
        setLoading(false)
      })
  }, [])

  const togglePregunta = (id) => {
    setAbierta(abierta === id ? null : id)
  }

  if (loading) return (
    <section className="faq" id="faq">
      <p style={{ textAlign: 'center' }}>Cargando preguntas...</p>
    </section>
  )

  return (
    <section className="faq" id="faq">
      <div className="faq-contenido">
        <h2>Preguntas Frecuentes</h2>
        <p>Resolvemos tus dudas sobre nuestros servicios.</p>
        <div className="faq-lista">
          {preguntas.map((item) => (
            <div key={item.id} className="faq-item">
              <button
                className={`faq-pregunta ${abierta === item.id ? 'activa' : ''}`}
                onClick={() => togglePregunta(item.id)}
                aria-expanded={abierta === item.id}
              >
                {item.pregunta}
                <span>{abierta === item.id ? '▲' : '▼'}</span>
              </button>
              {abierta === item.id && (
                <div className="faq-respuesta">
                  <p>{item.respuesta}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ