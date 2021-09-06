import styles, { globals } from './styles'
import Head from 'next/head'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='true'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Raleway:wght@100;300;400;600;700&display=swap'
          rel='stylesheet'
        />
      </Head>
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
