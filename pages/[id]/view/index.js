import Link from 'next/link'
import { MdEdit } from 'react-icons/md'
import { colors } from '../../../themes'

const View = ({ id, title }) => {
  return (
    <>
      <div>
        <h2>{title}</h2>
        <Link href={`/${id}/update/`}>
          <a>
            <MdEdit />
          </a>
        </Link>
      </div>
      <section>
        <article></article>
      </section>
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

        section {
          margin-top: 40px;
          width: 100%;
          height: calc(100% - 132px);
        }

        h2 {
          font-size: 2.7rem;
        }

        article {
          width: 100%;
          height: 100%;
          overflow: auto;
          background-color: white;
        }

        @media (max-width: 720px) {
          section {
            height: calc(100% - 186px);
          }
        }

        @media (max-width: 535px) {
          section {
            height: calc(100% - 170px);
          }
        }
      `}</style>
    </>
  )
}

export default View

export const getServerSideProps = (ctx) => {
  const { params } = ctx
  const { id } = params

  return { props: { id, title: 'Titulo de la nota' } }
}
