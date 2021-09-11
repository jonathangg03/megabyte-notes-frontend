import css from 'styled-jsx/css'
import { colors } from '../../themes'

export default css`
  form {
    margin-top: 10px;
    height: calc(100% - 92px);
    overflow: auto;
  }
  label {
    font-size: 1.6rem;
  }

  input,
  select {
    margin-bottom: 20px;
    margin-top: 5px;
    border: none;
    padding: 5px;
    width: 100%;
    max-width: 500px;
    outline: none;
    color: white;
    background-color: transparent;
    border: 1px solid white;
  }

  option {
    background-color: ${colors.bg};
    font-size: 1.7rem;
  }

  div {
    width: 100%;
    height: calc(100% - 280px);
  }

  @media (max-width: 720px) {
    form {
      height: calc(100% - 115px);
    }
    div {
      width: 100%;
      height: calc(100% - 302px);
    }
  }

  @media (max-width: 535px) {
    form {
      height: calc(100% - 99px);
    }
    div {
      width: 100%;
      height: calc(100% - 347px);
    }
  }
`
