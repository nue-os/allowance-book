import React from 'react'
import css from './Modal.module.css'

const Modal = ({ onClose, children }) => {
  return (
    <div className={css.modal}>
      <div className={css.modalCon}>
        <button className={css.closeBtn} onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </div>
  )
}

export default Modal
