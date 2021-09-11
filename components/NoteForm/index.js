import { useState, useRef, useEffect } from 'react'
import { useQuill } from 'react-quilljs'
import 'quill/dist/quill.snow.css'
import styles from './styles'

const NoteForm = () => {
  const { quill, quillRef } = useQuill()

  return (
    <>
      <form>
        <label>
          <p>Título de la nota</p>
          <input
            type='text'
            name='title'
            placeholder='Título'
            required
            className='input__element'
          />
        </label>
        <label>
          <p>Descripción de la nota</p>
          <input
            type='text'
            name='description'
            placeholder='Descipción'
            required
            className='input__element'
          />
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
      </form>
      <style jsx>{styles}</style>
    </>
  )
}

export default NoteForm
