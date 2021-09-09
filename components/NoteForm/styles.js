import css from 'styled-jsx/css'

export default css`
  form {
    margin-top: 10px;
    /* border: 1px solid red; */
    height: calc(100% - 92px);
    overflow: auto;
  }
  label {
    font-size: 1.6rem;
  }

  input {
    margin-bottom: 20px;
    margin-top: 5px;
    border: none;
    padding: 5px;
    width: 100%;
    max-width: 500px;
    outline: none;
  }

  div {
    width: 100%;
    height: calc(100% - 210px);
  }

  @media (max-width: 720px) {
    form {
      height: calc(100% - 115px);
    }
    div {
      width: 100%;
      height: calc(100% - 232px);
    }
  }

  @media (max-width: 535px) {
    form {
      height: calc(100% - 99px);
    }
    div {
      width: 100%;
      height: calc(100% - 277px);
    }
  }
`
