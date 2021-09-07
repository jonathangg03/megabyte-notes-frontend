import Head from 'next/head'
import NotesList from '../components/NotesList'
import mockNotes from '../mockNotes'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Home de la aplicación' />
      </Head>
      <NotesList notes={mockNotes} />
    </>
  )
}
