import css from 'styled-jsx/css'

export default css`
  section {
    height: calc(100% - 120px);
    width: 100%;
    max-width: 825px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 250px;
    gap: 20px;
    overflow: auto;
  }

  @media (max-width: 720px) {
    section {
      grid-template-columns: repeat(2, 1fr);
      grid-auto-rows: 270px;
      height: calc(100% - 174px);
    }
  }

  @media (max-width: 535px) {
    section {
      grid-template-columns: repeat(1, 1fr);
      height: calc(100% - 158px);
    }
  }
`
