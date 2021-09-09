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
            required
            placeholder='Título'
            className='input__element'
          />
        </label>
        <label>
          <p>Descripción de la nota</p>
          <input
            type='text'
            required
            placeholder='Descipción'
            className='input__element'
          />
        </label>
        <div ref={quillRef} />
      </form>
      <style jsx>{styles}</style>
    </>
  )
}

export default NoteForm
