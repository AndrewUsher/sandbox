import React, { Fragment } from 'react'

const FormField = ({ id, label, error, ...props }) => (
  <Fragment>
    <label htmlFor={id}>{label}</label>
    <div className={`input-container ${error ? 'has-error' : ''}`}>
      <input id={id} type="text" {...props} />
      {error && <div className="error-message">{error}</div>}
    </div>
  </Fragment>
)

export { FormField }
