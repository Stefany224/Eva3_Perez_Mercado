import './hero.css'
import heroBg from '../../assets/img/hero.webp'

function Hero() {
  return (
    <section className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="hero-contenido">
        <h1>Impulsamos el crecimiento de tu negocio</h1>
        <p>Somos el Centro de Desarrollo de Negocios Santiago de SERCOTEC. Ofrecemos asesoría técnica, capacitacion y vinculacion empresarial <strong>sin costo</strong> para micro y pequeñas empresas.</p>
        <a href="#contacto" className="hero-btn">Contactanos</a>
      </div>
    </section>
  )
}

export default Hero