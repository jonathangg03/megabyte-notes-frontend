const Update = ({ id, title }) => {
  return (
    <>
      <h2>Editar nota {id}</h2>
      <style jsx>{`
        h2 {
          font-size: 2.7rem;
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
