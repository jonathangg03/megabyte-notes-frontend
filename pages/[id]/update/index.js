import NoteForm from '../../../components/NoteForm'

const Update = ({ id, title }) => {
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

export default Update

export const getServerSideProps = (ctx) => {
  const { params } = ctx
  const { id } = params

  return { props: { id, title: 'Titulo de la nota' } }
}
