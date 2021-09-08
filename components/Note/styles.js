import css from 'styled-jsx/css'
import { colors } from '../../themes'

export default css`
  article {
    padding: 15px 20px;
    border-top: 2px solid ${colors.react};
    border-radius: 5px 5px 0 0;
    background-color: ${colors.dark};
  }

  h2 {
    padding-bottom: 15px;
    text-align: center;
    font-size: 1.7rem;
  }

  p {
    font-size: 1.3rem;
    line-height: 2rem;
  }

  h3 {
    font-weight: 300;
    font-size: 1.8rem;
    color: ${colors.react};
    text-align: center;
    padding: 10px 0 20px;
  }

  div {
    font-size: 2.5rem;
    text-align: center;
    display: flex;
    justify-content: space-between;
    width: 120px;
    margin: 0 auto;
  }

  a {
    color: white;
  }
`
