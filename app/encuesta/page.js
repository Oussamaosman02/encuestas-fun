import css from '../../styles/encuesta.module.css'
import Forma from './components/Forma'
export default function Encuesta () {
  const cuestiones = ['edad', 'sexo', 'yoTuMadre', 'rango', 'positivos', 'negativos', 'mejorar', 'nota']
  return (
    <div className={css.container}>
      <h1>Encuesta de Satisfacción</h1>
      <h2>Vamos a hacerte unas preguntas</h2>
      <p>
        Te pedimos completa seriedad y honestidad a la
        hora de responder a las cuestiones.
      </p>
      <p className={css.disclaimer}>Esta encuesta
        es 100% anónima, en ningún momento te pediremos
        tu nombre o algo identificativo.
      </p>
      <Forma num={8} destruct={cuestiones}>
        <h3>Edad</h3>
        <input className={css.input} type='number' placeholder='Introduce tu edad' />
        <h3>Sexo</h3>
        <select className={css.input} defaultValue='Otro'>
          <option>Hombre</option>
          <option>Mujer</option>
          <option>No binario</option>
          <option>Otro</option>
          <option>Helicóptero apache de combate birotor</option>
          <option>Yo, abre</option>
          <option>CR7, siuuuuu!</option>
        </select>
        <h3>¿Qué opinas de que yo, tu madre, yo cuando tu madre?</h3>
        <textarea rows='4' cols='50' type='text' placeholder='Escribe que opinas' />
        <h3>Del 1 al 10, ¿qué tan positivo crees que es el acto con tu madre?</h3>
        <input className={css.input} type='number' max={10} min={0} placeholder='Pon una nota' />
        <h3>Puntos positivos de tu madre</h3>
        <textarea rows='4' cols='50' type='text' placeholder='Escribe lo positivo' />
        <h3>Puntos negativos de tu madre</h3>
        <textarea rows='4' cols='50' type='text' placeholder='Escribe lo negativo' />
        <h3>Puntos a mejorar de tu madre</h3>
        <textarea rows='4' cols='50' type='text' placeholder='Ofrece propuestas para mejorar' />
        <h3>En comparación con otras, tu madre es:</h3>
        <select className={css.input} defaultValue='La mejor'>
          <option>La mejor</option>
          <option>Una muy buena</option>
          <option>Buena</option>
          <option>Meh</option>
          <option>Mala</option>
          <option>Mala de cojones</option>
          <option>No la toco ni con un palo</option>
        </select>
        <button>Enviar</button>
      </Forma>
    </div>
  )
}
