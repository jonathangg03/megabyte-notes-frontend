import css from 'styled-jsx/css'
import { colors, fontFamily } from '../../themes'

export const globals = css.global`
  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100;300;400;600;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    font-family: ${fontFamily};
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }
  /* width */
  ::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */ /*Fondo del scroll*/
  ::-webkit-scrollbar-track {
    background: ${colors.bg};
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #f1f1f1;
    border-radius: 5px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #5f6368;
  }
`

export default css`
  main {
    width: 100vw;
    height: 100vh;
    padding: 20px;
    color: white;
    background-color: ${colors.bg};
    overflow: hidden;
  }

  h1 {
    text-transform: uppercase;
    font-weight: 300;
    letter-spacing: 0.5rem;
    font-size: 3.5rem;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  ul {
    display: flex;
    font-size: 2rem;
    list-style: none;
  }

  li {
    margin-left: 20px;
  }
`
