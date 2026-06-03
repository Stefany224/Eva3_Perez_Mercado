import { useState, useEffect } from 'react'
import './ContactForm.css'

function ContactForm({ servicioSeleccionado }) {
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    servicio: servicioSeleccionado || '',
    mensaje: ''
  })
  const [errores, setErrores] = useState({})
  const [enviado, setEnviado] = useState(false)

  useEffect(() => {
    setForm((prev) => ({ ...prev, servicio: servicioSeleccionado || '' }))
  }, [servicioSeleccionado])

  const validar = () => {
    const nuevosErrores = {}
    if (!form.nombre.trim()) nuevosErrores.nombre = 'El nombre es requerido'
    if (!form.email.trim()) {
      nuevosErrores.email = 'El email es requerido'
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(form.email) ||
      /\.{2,}/.test(form.email) ||
      form.email.startsWith('.') ||
      form.email.includes('@.') ||
      form.email.split('@')[1]?.startsWith('.')
    ) {
      nuevosErrores.email = 'El email no es valido'
    }
    if (!form.mensaje.trim()) nuevosErrores.mensaje = 'El mensaje es requerido'
    return nuevosErrores
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setErrores({ ...errores, [e.target.name]: '' })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const nuevosErrores = validar()
    if (Object.keys(nuevosErrores).length > 0) {
      setErrores(nuevosErrores)
      return
    }
    console.log('Datos del formulario:', form)
    setEnviado(true)
  }

  if (enviado) {
    return (
      <div className="form-exito">
        <h3>Mensaje enviado correctamente</h3>
        <p>Nos pondremos en contacto contigo a la brevedad.</p>
      </div>
    )
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-grupo">
        <label htmlFor="nombre">Nombre completo</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={form.nombre}
          onChange={handleChange}
          placeholder="Tu nombre"
        />
        {errores.nombre && <span className="error">{errores.nombre}</span>}
      </div>

      <div className="form-grupo">
        <label htmlFor="email">Correo electronico</label>
        <input
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="tucorreo@ejemplo.com"
        />
        {errores.email && <span className="error">{errores.email}</span>}
      </div>

      <div className="form-grupo">
        <label htmlFor="servicio">Servicio de interes</label>
        <select
          id="servicio"
          name="servicio"
          value={form.servicio}
          onChange={handleChange}
        >
          <option value="">Selecciona un servicio</option>
          <option value="Acompañamiento Preventivo">Acompañamiento Preventivo</option>
          <option value="Acompañamiento Correctivo">Acompañamiento Correctivo</option>
          <option value="Capacitación e Innovación">Capacitación e Innovación</option>
        </select>
      </div>

      <div className="form-grupo">
        <label htmlFor="mensaje">Mensaje</label>
        <textarea
          id="mensaje"
          name="mensaje"
          value={form.mensaje}
          onChange={handleChange}
          placeholder="¿En que podemos ayudarte?"
          rows={5}
        />
        {errores.mensaje && <span className="error">{errores.mensaje}</span>}
      </div>

      <button type="submit" className="form-btn">Enviar mensaje</button>
    </form>
  )
}

export default ContactForm