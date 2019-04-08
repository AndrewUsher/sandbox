import { css } from 'styled-components'

const buttonStyles = css`
  button {
    background-color: #e44985;
    border: none;
    border-radius: 5px;
    color: #fefefe;
    font-size: 18px;
    margin-right: 4%;
    padding: 8px 16px;
    transition: background-color 400ms, color 200ms;
    width: 48%;
  }

  button:disabled {
    background-color: #f2f2f2;
    color: #000;
    opacity: 0.5;
  }

  button:last-child {
    margin-right: 0;
  }
`

export { buttonStyles }
