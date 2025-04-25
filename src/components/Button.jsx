import React from 'react'
import css from './Button.module.css'

const Button = ({ color = 'primary', text, onClick }) => {
  const buttonClass = `${css.button} ${css[color]}`
  return (
    <button className={buttonClass} onClick={onClick}>
      {text}
    </button>
  )
}

export default Button
