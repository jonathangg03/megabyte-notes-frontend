import Head from 'next/head'
import NoteForm from '../components/NoteForm'

const New = () => {
  return (
    <>
      <Head>
        <title>Davdev Notes - Nueva nota</title>
      </Head>
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
