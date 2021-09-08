import Link from 'next/link'
import styles, { globals } from './styles'

const Layout = ({ children }) => {
  return (
    <>
      <main>
        <header>
          <h1>Notas - Davdev</h1>
          <nav>
            <ul>
              <li>
                <Link href='/'>
                  <a>Notas</a>
                </Link>
              </li>
              <li>
                <Link href='/new'>
                  <a>Nueva nota</a>
                </Link>
              </li>
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
