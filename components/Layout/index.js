import styles, { globals } from './styles'

const Layout = ({ children }) => {
  return (
    <>
      <main>
        <header>
          <h1>Notas - Davdev</h1>
          <nav>
            <ul>
              <li>Notas</li>
              <li>Agregar nota</li>
            </ul>
          </nav>
        </header>
        {children}
      </main>
      <style jsx>{styles}</style>
      <style jsx globals>
        {globals}
      </style>
    </>
  )
}

export default Layout
