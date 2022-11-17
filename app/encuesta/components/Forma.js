'use client'
import { useRouter } from 'next/navigation'

export default function Forma ({ children, num, destruct }) {
  const rut = useRouter()
  function handleSubmit (e) {
    e.preventDefault()
    const obj = {}
    const arreglo = destruct
    const arr = [...Array(num).keys()]
    arr.map((num) => {
      const valor = e.target[num].value
      const nombre = arreglo[num]
      return (
        obj[nombre] = valor
      )
    })
    rut.push('/')
    alert('Gracias por contestar')
  }
  return (
    <form onSubmit={e => handleSubmit(e)}>
      {children}
    </form>
  )
}
