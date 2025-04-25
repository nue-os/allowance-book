import React from 'react'
import css from './RadioButton.module.css'

const RadioButton = ({ id, name, value, label, checked, onChange }) => {
  return (
    <div className={css.radioContainer}>
      <input type="radio" id={id} name={name} value={value} checked={checked} onChange={onChange} />
      <label htmlFor={id}>{label}</label>
    </div>
  )
}

export default RadioButton
