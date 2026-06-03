import './ServiceCard.css'

function ServiceCard({ imagen, titulo, descripcion, onContactar }) {
  return (
    <div className="service-card">
      <img src={imagen} alt={titulo} loading="lazy" />
      <div className="service-card-contenido">
        <h3>{titulo}</h3>
        <p>{descripcion}</p>
        <button className="service-card-btn" onClick={() => {
          onContactar(titulo)
          document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' })
        }}>
          Contáctanos
        </button>
      </div>
    </div>
  )
}

export default ServiceCard