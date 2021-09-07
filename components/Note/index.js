import styles from './styles'
import Link from 'next/link'
import {
  MdSearch,
  MdEdit,
  MdRemoveCircle,
  MdRemoveCircleOutline
} from 'react-icons/md'
const Note = ({ title, description, technology }) => {
  return (
    <article>
      <h2>{title}</h2>
      <p>{description}</p>
      <h3>{technology}</h3>
      <div>
        <Link href='/'>
          <a>
            <MdSearch />
          </a>
        </Link>
        <Link href='/'>
          <a>
            <MdEdit />
          </a>
        </Link>
        <Link href='/'>
          <a>
            <MdRemoveCircle />
          </a>
        </Link>
      </div>
      <style jsx>{styles}</style>
    </article>
  )
}

export default Note
