import styles from './styles'
import Note from '../Note'
import { useEffect, useState } from 'react'

const NotesList = ({ notes }) => {
  return (
    <>
      <section>
        {notes.map((note) => (
          <Note key={note._id} {...note} />
        ))}
      </section>
      <style jsx>{styles}</style>
    </>
  )
}

export default NotesList
