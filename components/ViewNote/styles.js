import css from 'styled-jsx/css'

export default css`
  section {
    margin-top: 40px;
    width: 100%;
    height: calc(100% - 132px);
  }

  article {
    width: 100%;
    height: 100%;
    overflow: auto;
  }

  .ql-container.ql-snow {
    border: none;
  }

  span {
    padding-left: 20px;
    display: block;
  }

  @media (max-width: 720px) {
    section {
      height: calc(100% - 186px);
    }
  }

  @media (max-width: 535px) {
    section {
      height: calc(100% - 170px);
    }
  }
`
