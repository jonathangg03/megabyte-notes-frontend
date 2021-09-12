import Link from 'next/link'
import { MdEdit } from 'react-icons/md'
import ViewNote from '../../../components/ViewNote'
import { colors } from '../../../themes'

const View = ({ note }) => {
  return (
    <>
      <div>
        <h2>{note.title}</h2>
        <Link href={`/${note._id}/update/`}>
          <a>
            <MdEdit />
          </a>
        </Link>
      </div>
      <ViewNote content={note.content} />
      <style jsx>{`
        div {
          display: flex;
        }

        a {
          font-size: 2.3rem;
          color: ${colors.react};
          margin-left: 10px;
          display: flex;
          align-items: center;
        }

        h2 {
          font-size: 2.7rem;
        }
      `}</style>
    </>
  )
}

export default View

export const getServerSideProps = (ctx) => {
  const { params } = ctx
  const { id } = params

  return fetch(`${process.env.NEXT_PUBLIC_API_URL}/${id}`)
    .then((res) => res.json())
    .then((data) => {
      return { props: { note: data } }
    })
}
