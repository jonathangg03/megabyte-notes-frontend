import Head from 'next/head'
import { useState } from 'react'
import NotesList from '../components/NotesList'

export default function Home({ notes }) {
  const [filteredNotes, setFilteredNotes] = useState(notes)

  const handleSearchChange = (event) => {
    const notesFilter = notes.filter((note) => {
      if (
        note.title.toLowerCase().includes(event.target.value.toLowerCase()) ||
        note.category.toLowerCase().includes(event.target.value.toLowerCase())
      ) {
        return note
      }
    })

    setFilteredNotes(notesFilter)
  }

  return (
    <>
      <Head>
        <title>Davdev Notes - Home</title>
        <meta name='description' content='Home de la aplicación' />
      </Head>
      <section>
        <input
          type='text'
          placeholder='Escribe aquí para buscar...'
          name='search'
          onChange={handleSearchChange}
        />
      </section>
      {filteredNotes.length <= 0 && <h2>No se encontraron notas</h2>}
      <NotesList notes={filteredNotes} />
      <style jsx>{`
        input {
          padding: 15px 10px;
          padding-left: 0;
          width: 100%;
          max-width: 825px;
          margin: 0 auto;
          margin-bottom: 10px;
          display: block;
          border: none;
          outline: none;
          font-size: 1.6rem;
          background-color: transparent;
          color: white;
        }

        h2 {
          font-size: 3rem;
        }
      `}</style>
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
