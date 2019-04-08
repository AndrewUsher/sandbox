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
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    width: 48%;

    &:disabled {
      background-color: #f2f2f2;

      color: #000;
      opacity: 0.5;
    }

    &:last-child {
      margin-right: 0;
    }
  }
`

export { buttonStyles }
