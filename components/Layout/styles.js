import css from 'styled-jsx/css'

export const globals = css.global`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Raleway', sans-serif;
  }

  html {
    font-size: 62.5%;
  }
`

export default css`
  main {
    color: white;
    width: 100vw;
    height: 100vh;
    background-color: #000000;
    background-image: linear-gradient(147deg, #000000 0%, #04619f 74%);
    padding: 20px;
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
    list-style: none;
    display: flex;
    font-size: 2rem;
  }

  li {
    margin-left: 20px;
  }
`
