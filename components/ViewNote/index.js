import { useEffect, useState } from 'react'
import { QuillDeltaToHtmlConverter } from 'quill-delta-to-html'
import styles from './styles'

const ViewNote = ({ content }) => {
  const [deltas, setDeltas] = useState({})

  useEffect(() => {
    const deltaOps = JSON.parse(content)

    const cfg = {
      encodeHtml: true
    }

    const converter = new QuillDeltaToHtmlConverter(deltaOps.ops, cfg)

    const html = converter.convert()

    console.log(html)
    setDeltas(html)
  }, [])

  return (
    <>
      <section>
        <article dangerouslySetInnerHTML={{ __html: deltas }}></article>
      </section>
      <style jsx>{styles}</style>
    </>
  )
}

export default ViewNote
