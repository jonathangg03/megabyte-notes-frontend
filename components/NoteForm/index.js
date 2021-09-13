import { useQuill } from 'react-quilljs'
import styles from './styles'
import useField from '../../hooks/useField'
import 'quill/dist/quill.snow.css'
import { useEffect, useRef } from 'react'
import toolbar from '../../toolbar'
import router from 'next/router'

const NoteForm = ({ _id, title, description, category, content }) => {
  const { quill, quillRef } = useQuill({ modules: { toolbar: toolbar } })
  const categoryField = useRef()

  const titleField = useField({
    type: 'text',
    name: 'title',
    placeholder: 'Título',
    className: 'input__element',
    required: true,
    value: title
  })

  const descriptionField = useField({
    type: 'text',
    name: 'description',
    placeholder: 'Descripción',
    className: 'input__element',
    required: true,
    value: description
  })

  useEffect(() => {
    //Colocar categoría y contenido seleccionados
    if (category) {
      console.log(content)
      categoryField.current.childNodes.forEach((option) => {
        if (option.value === category) {
          option.selected = true
        } else {
          option.selected = false
        }
      })
    }

    if (content && quill) {
      quill.setContents(JSON.parse(content))
    }
  }, [quill, category, content])

  const handleSubmit = async (event) => {
    event.preventDefault()
    const sendedData = {
      title: titleField.value,
      description: descriptionField.value,
      category: categoryField.current.value,
      content: JSON.stringify(quill.getContents())
    }
    try {
      if (_id) {
        await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${_id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(sendedData)
        })
      } else {
        await fetch(process.env.NEXT_PUBLIC_API_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(sendedData)
        })
      }
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
