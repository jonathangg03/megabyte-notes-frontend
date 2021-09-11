import { useQuill } from 'react-quilljs'
import styles from './styles'
import useField from '../../hooks/useField'
import 'quill/dist/quill.snow.css'

const NoteForm = () => {
  const { quill, quillRef } = useQuill()

  const titleField = useField({
    type: 'text',
    name: 'title',
    placeholder: 'Título',
    className: 'input__element',
    required: true
  })

  const descriptionField = useField({
    type: 'text',
    name: 'description',
    placeholder: 'Descripción',
    className: 'input__element',
    required: true
  })

  return (
    <>
      <form>
        <label>
          <p>Título de la nota</p>
          <input {...titleField} />
        </label>
        <label>
          <p>Descripción de la nota</p>
          <input {...descriptionField} />
        </label>
        <label>
          <p>Categoría</p>
          <select name='category' id='category'>
            <option value='HTML'>HTML</option>
            <option value='CSS'>CSS</option>
            <option value='JavaScript'>JavaScript</option>
            <option value='React.js'>React.js</option>
            <option value='Node.js'>Node.js</option>
            <option value='Next.js'>Next.js</option>
          </select>
        </label>
        <div ref={quillRef} />
        <button type='submit'>Guardar</button>
      </form>
      <style jsx>{styles}</style>
    </>
  )
}

export default NoteForm
