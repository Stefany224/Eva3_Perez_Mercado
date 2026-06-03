import './Testimonials.css'
import TestimonialCarousel from '../TestimonialCarousel'

function Testimonials() {
  return (
    <section className="testimonials" id="testimonios">
      <div className="testimonials-contenido">
        <h2>Lo que dicen nuestros clientes</h2>
        <TestimonialCarousel />
      </div>
    </section>
  )
}

export default Testimonials