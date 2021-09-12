import { useEffect, useState } from 'react'
import { useQuill } from 'react-quilljs'
import 'quill/dist/quill.snow.css'
import { QuillDeltaToHtmlConverter } from 'quill-delta-to-html'
import styles from './styles'

const ViewNote = ({ content }) => {
  const [deltas, setDeltas] = useState({})
  const { quill, quillRef } = useQuill({
    readOnly: true,
    modules: { toolbar: false }
  })

  useEffect(() => {
    console.log(JSON.parse(content))
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
