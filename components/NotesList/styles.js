import css from 'styled-jsx/css'

export default css`
  section {
    margin: 40px auto 40px;
    height: 100%;
    max-height: 800px;
    width: 100%;
    max-width: 825px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 250px;
    gap: 20px;
    overflow: auto;
  }
`
