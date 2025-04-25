import React from 'react'
import css from './InputField.module.css'

const InputField = ({ id, label, placeholder, value, onChange }) => {
  return (
    <div className={css.inputWrapper}>
      <label htmlFor={id}>{label}</label>
      <input id={id} type="text" placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  )
}

export default InputField
