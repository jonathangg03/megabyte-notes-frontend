import styles from './styles'
import Link from 'next/link'
import {
  MdSearch,
  MdEdit,
  MdRemoveCircle,
  MdRemoveCircleOutline
} from 'react-icons/md'
const Note = ({ title, description, technology, _id }) => {
  return (
    <article>
      <h2>{title}</h2>
      <p>{description}</p>
      <h3>{technology}</h3>
      <div>
        <Link href={`/${_id}/view`}>
          <a>
            <MdSearch />
          </a>
        </Link>
        <Link href={`/${_id}/update`}>
          <a>
            <MdEdit />
          </a>
        </Link>
        <Link href={`/${_id}/delete`}>
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
