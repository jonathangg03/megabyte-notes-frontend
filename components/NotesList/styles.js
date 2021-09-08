import css from 'styled-jsx/css'

export default css`
  section {
    margin: 40px auto 40px;
    height: 100%;
    max-height: 500px;
    width: 100%;
    max-width: 825px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 250px;
    gap: 20px;
    overflow: auto;
  }

  @media (max-width: 720px) {
    section {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 482px) {
    section {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`
