import Head from 'next/head'
import NoteForm from '../../../components/NoteForm'

const Update = ({ note }) => {
  return (
    <>
      <Head>
        <title>Davdev Notes - Actualizar nota</title>
      </Head>
      <h2>Actializar nota</h2>
      <NoteForm {...note} />
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

  return fetch(`${process.env.NEXT_PUBLIC_API_URL}/${id}`)
    .then((res) => res.json())
    .then((data) => {
      return { props: { note: data } }
    })
}
