import { useRouter } from 'next/router'
const API = process.env.NEXT_PUBLIC_API_URL

const Delete = ({ id, title }) => {
  const router = useRouter()

  const handleCancel = () => {
    router.push('/')
  }

  const handleDelete = async () => {
    await fetch(`${API}/${id}`, {
      method: 'DELETE'
    })
    router.replace('/')
  }
  return (
    <>
      <section>
        <h2>¿Seguro que deseas eliminar la nota: {title}?</h2>
        <div>
          <button onClick={handleDelete}>Eliminar</button>
          <button onClick={handleCancel}>Cancelar</button>
        </div>
      </section>
      <style jsx>{`
        section {
          text-align: center;
          margin-top: 40px;
        }

        h2 {
          font-size: 2.7rem;
        }

        div {
          margin-top: 20px;
        }

        button {
          margin: 0 10px;
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          font-weight: 700;
          cursor: pointer;
        }
      `}</style>
    </>
  )
}

export default Delete

export const getServerSideProps = (ctx) => {
  const { params } = ctx
  const { id } = params

  return fetch(`${API}/${id}`)
    .then((res) => res.json())
    .then((data) => {
      return {
        props: {
          id: data._id,
          title: data.title
        }
      }
    })
}
