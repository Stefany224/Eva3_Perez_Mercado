import './Footer.css'
import logo_sercotec from '../../assets/img/logo_sercotec.webp'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-contenido">
        <div className="footer-logo">
          <img src={logo_sercotec} alt="Logo SERCOTEC" loading="lazy" />
          <p>Centro de Desarrollo de Negocios Santiago</p>
        </div>
        <div className="footer-info">
          <h4>Contacto</h4>
          <p>centro.santiago@centrossercotec.cl</p>
          <p>Manuel Rodríguez Sur 749, Santiago</p>
          <p>Metro Toesca</p>
        </div>
        <div className="footer-links">
          <h4>Navegación</h4>
          <ul>
            <li><a href="#nosotros">Nosotros</a></li>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#testimonios">Testimonios</a></li>
            <li><a href="#faq">Preguntas Frecuentes</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 SERCOTEC — Centro de Desarrollo de Negocios Santiago. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer