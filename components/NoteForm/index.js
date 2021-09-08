import styles from './styles'

const NoteForm = () => {
  return (
    <>
      <form>
        <label>
          <p>Título de la nota</p>
          <input type='text' required placeholder='Título' />
        </label>
        <label>
          <p>Descripción de la nota</p>
          <input type='text' required placeholder='Descipción' />
        </label>
        <label>
          <p>Contenido</p>
          <textarea></textarea>
        </label>
      </form>
      <style jsx>{styles}</style>
    </>
  )
}

export default NoteForm
