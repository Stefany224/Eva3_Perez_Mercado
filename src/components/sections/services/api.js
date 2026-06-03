const BASE_URL = 'https://6fa72639-ed55-4974-9431-00dbed557a29.mock.pstmn.io'

export const getnosotros = async () => {
  const res = await fetch(`${BASE_URL}/nosotros`)
  return res.json()
}

export const getTestimonios = async () => {
  const res = await fetch(`${BASE_URL}/testimonios`)
  return res.json()
}

export const getServicios = async () => {
  const res = await fetch(`${BASE_URL}/servicios`)
  return res.json()
}

export const getFaq = async () => {
  const res = await fetch(`${BASE_URL}/faqs`)
  return res.json()
}