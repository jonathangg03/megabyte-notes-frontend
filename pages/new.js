import NoteForm from '../components/NoteForm'

const New = () => {
  return (
    <>
      <h2>Agregar nueva nota</h2>
      <NoteForm />
      <style jsx>{`
        h2 {
          font-size: 1.8rem;
        }
      `}</style>
    </>
  )
}

export default New
