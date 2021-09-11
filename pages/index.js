import Head from 'next/head'
import NotesList from '../components/NotesList'

export default function Home({ notes }) {
  return (
    <>
      {console.log(notes)}
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Home de la aplicación' />
      </Head>
      <NotesList notes={notes} />
    </>
  )
}

export const getServerSideProps = () => {
  const API = process.env.NEXT_PUBLIC_API_URL

  return fetch(API)
    .then((res) => res.json())
    .then((data) => {
      return {
        props: {
          notes: data
        }
      }
    })
}
