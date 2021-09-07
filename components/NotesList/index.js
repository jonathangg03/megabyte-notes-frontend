import styles from './styles'
import Note from '../Note'

const NotesList = ({ notes }) => {
  return (
    <section>
      {notes.map((note) => (
        <Note key={note._id} {...note} />
      ))}
      <style jsx>{styles}</style>
    </section>
  )
}

export default NotesList
