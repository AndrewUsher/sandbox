import * as yup from 'yup'

const schema = yup.object().shape({
  email: yup
    .string()
    .email()
    .required('Email address is required'),
  firstName: yup.string().required('First Name is required'),
  lastName: yup.string().required('Last Name is required'),
  password: yup.string().required('Password is required'),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords do not match')
})

export { schema }
