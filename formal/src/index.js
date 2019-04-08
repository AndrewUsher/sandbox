import React, { Fragment } from 'react'
import { render } from 'react-dom'
import useFormal from '@kevinwolf/formal-web'
import styled, { createGlobalStyle } from 'styled-components'
import { FormField } from './FormField'
import { buttonStyles } from './buttonStyles'
import { formFieldStyles } from './formFieldStyles'
import { schema } from './schema'

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    font-family: 'Hind Siliguri', sans-serif;
    -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
  }
`

const initialValues = {
  email: '',
  firstName: '',
  lastName: '',
  password: '',
  passwordConfirm: ''
}

const StyledForm = styled.form`
  max-width: 400px;
  margin: 30px auto;
  ${formFieldStyles}
  ${buttonStyles}
`

const App = () => {
  const formal = useFormal(initialValues, {
    schema,
    onSubmit: values => {
      console.log(values)
    }
  })
  console.log(formal)
  return (
    <Fragment>
      <GlobalStyles />
      <main>
        <StyledForm {...formal.getFormProps()}>
          <FormField
            label="Email"
            type="email"
            {...formal.getFieldProps('email')}
          />
          <FormField
            label="First Name"
            {...formal.getFieldProps('firstName')}
          />
          <FormField label="Last Name" {...formal.getFieldProps('lastName')} />
          <FormField
            label="Password"
            type="password"
            {...formal.getFieldProps('password')}
          />
          <FormField
            label="Confirm Password"
            type="password"
            {...formal.getFieldProps('passwordConfirm')}
          />
          {(!formal.isSubmitted && (
            <Fragment>
              <button {...formal.getResetButtonProps()}>Reset Form</button>
              <button {...formal.getSubmitButtonProps()}>Submit Form</button>
            </Fragment>
          )) || <div>Form submitted, move on with your life 👍</div>}
        </StyledForm>
      </main>
    </Fragment>
  )
}

const MOUNT_NODE = document.getElementById('app')
render(<App />, MOUNT_NODE)
