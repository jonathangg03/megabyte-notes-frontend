import { useQuill } from 'react-quilljs'
import styles from './styles'
import useField from '../../hooks/useField'
import 'quill/dist/quill.snow.css'
import { useRef } from 'react'
import router from 'next/router'

const NoteForm = () => {
  const { quill, quillRef } = useQuill()
  const categoryField = useRef()

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

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const sendedData = {
        title: titleField.value,
        description: descriptionField.value,
        category: categoryField.current.value,
        content: JSON.stringify(quill.getContents())
      }
      await fetch(process.env.NEXT_PUBLIC_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(sendedData)
      })
      router.push('/')
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
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
          <select name='category' id='category' ref={categoryField}>
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
