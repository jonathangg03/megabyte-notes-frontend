import { useQuill } from 'react-quilljs'
import styles from './styles'
import useField from '../../hooks/useField'
import { useEffect, useRef, useState } from 'react'
import toolbar from '../../toolbar'
import router from 'next/router'
import 'quill/dist/quill.snow.css'

const FETCHING_VALUES = {
  ERROR: -1,
  INITIAL: 0,
  SUCCESS: 1,
  LOADING: 2
}

const SAVED_VALUES = {
  SAVED: 1,
  UNSAVED: 0
}

const NoteForm = ({ _id, title, description, category, content }) => {
  const { quill, quillRef } = useQuill({ modules: { toolbar: toolbar } })
  const categoryField = useRef()
  const [fetched, setFetched] = useState(FETCHING_VALUES.INITIAL)

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
    setFetched(FETCHING_VALUES.LOADING)
    const sendedData = {
      title: titleField.value,
      description: descriptionField.value,
      category: categoryField.current.value,
      content: JSON.stringify(quill.getContents())
    }
    try {
      let id = ''
      if (_id) {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${_id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(sendedData)
        })
        const data = await res.json()
        id = data._id
        setFetched(FETCHING_VALUES.SUCCESS)
      } else {
        const res = await fetch(process.env.NEXT_PUBLIC_API_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(sendedData)
        })
        const data = await res.json()
        id = data._id
        router.push(`/${id}/view`)
      }
    } catch (error) {
      console.log(error.message)
      setFetched(FETCHING_VALUES.ERROR)
    }
  }

  const handleClose = () => {
    router.push(`/${_id}/view`)
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
        <article>
          <button
            type='submit'
            disabled={fetched === FETCHING_VALUES.LOADING ? 1 : 0}
          >
            {fetched === FETCHING_VALUES.LOADING ? 'Guardando...' : 'Guardar'}
          </button>
          <button type='button' onClick={handleClose}>
            Cerrar
          </button>
        </article>
      </form>
      <style jsx>{styles}</style>
    </>
  )
}

export default NoteForm
