import React, { useState } from 'react'
import css from './TransactionItem.module.css'
import Modal from './Modal'
import Button from './Button'

const TransactionItem = ({ id, text, amount, type }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleModalOpen = () => setIsModalOpen(true)
  const handleModalClose = () => setIsModalOpen(false)

  const removeItem = () => {}

  return (
    <div className={`${type === 'income' ? css.income : css.expense} ${css.itemWrap}`}>
      <p>{text}</p>
      <p>
        {type === 'income' ? '+' : '-'}￦{amount}
      </p>
      <button className={css.removeBtn} onClick={handleModalOpen}>
        X
      </button>

      {isModalOpen && (
        <Modal onClose={handleModalClose}>
          <p>삭제하시겠습니까?</p>
          <div className={css.btnWrap}>
            <Button color="white" text="취소" onClick={handleModalClose} />
            <Button color="red" text="확인" onClick={() => removeItem(id)} />
          </div>
        </Modal>
      )}
    </div>
  )
}

export default TransactionItem
