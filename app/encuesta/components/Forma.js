'use client'
// import { useRouter } from 'next/navigation'

export default function Forma ({ children, num, destruct }) {
  async function handleSubmit (e) {
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
    console.log(obj)
    await fetch('/api', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(obj)
    })
  }
  return (
    <form onSubmit={e => handleSubmit(e)}>
      {children}
    </form>
  )
}
