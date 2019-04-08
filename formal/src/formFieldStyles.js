import { css } from 'styled-components'

const formFieldStyles = css`
  .input-container {
    margin-bottom: 20px;
  }

  label,
  input {
    color: #222;
    display: block;
    width: 100%;
  }

  label {
    font-size: 18px;
    margin-bottom: 4px;
  }

  .input-container {
    &.has-error {
      input {
        margin-bottom: 4px;
        border-color: red;
      }
    }
  }

  input {
    background-color: #f2f2f2;
    border: 2px solid transparent;
    transition: border 300ms;
    border-radius: 5px;
    font-size: 14px;
    padding: 10px 16px;

    &:focus {
      border: 2px solid #e44985;
      outline: none;
    }
  }
`

export { formFieldStyles }
