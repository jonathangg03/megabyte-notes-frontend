import css from 'styled-jsx/css'
import { colors } from '../../themes'

export default css`
  article {
    padding: 15px 20px;
    border-top: 2px solid ${colors.react};
    border-radius: 5px 5px 0 0;
    background-color: ${colors.dark};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  article[category='Node.js'] {
    border-top: 2px solid ${colors.node};
  }

  article[category='JavaScript'] {
    border-top: 2px solid ${colors.js};
  }

  article[category='HTML'] {
    border-top: 2px solid ${colors.html};
  }

  article[category='CSS'] {
    border-top: 2px solid ${colors.css};
  }

  article[category='Next.js'] {
    border-top: 2px solid ${colors.next};
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

  @media (max-width: 720px) {
    h2 {
      font-size: 2rem;
    }

    p {
      font-size: 1.5rem;
    }

    h3 {
      font-size: 2rem;
    }

    div {
      font-size: 2.8rem;
    }
  }

  @media (max-width: 535px) {
    h2 {
      font-size: 2.3rem;
    }

    p {
      font-size: 1.7rem;
    }

    h3 {
      font-size: 2.3rem;
    }

    div {
      font-size: 3.2rem;
    }
  }
`
