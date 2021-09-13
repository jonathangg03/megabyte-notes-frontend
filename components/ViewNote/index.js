import { useEffect } from 'react'
import { useQuill } from 'react-quilljs'
import styles from './styles'
import 'quill/dist/quill.snow.css'

const ViewNote = ({ content }) => {
  const { quill, quillRef } = useQuill({
    readOnly: true,
    modules: { toolbar: false }
  })

  useEffect(() => {
    if (content && quill) {
      quill.setContents(JSON.parse(content))
    }
  }, [content, quill])

  return (
    <>
      <section>
        <article ref={quillRef}></article>
      </section>
      <style jsx>{styles}</style>
    </>
  )
}

export default ViewNote
