import './Contact.css'
import ContactForm from '../ContactForm'

function Contact({ servicioSeleccionado }) {
  return (
    <section className="contact" id="contacto">
      <div className="contact-contenido">
        <h2>Contactanos</h2>
        <p>¿Tienes alguna consulta? Escríbenos y te responderemos a la brevedad.</p>
        <div className="contact-info">
          <p>centro.santiago@centrossercotec.cl</p>
          <p>Manuel Rodríguez Sur 749, Santiago (Metro Toesca)</p>
        </div>
        <ContactForm servicioSeleccionado={servicioSeleccionado} />
      </div>
    </section>
  )
}

export default Contact