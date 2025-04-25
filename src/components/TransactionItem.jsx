import React from 'react'
import css from './TransactionItem.module.css'

const TransactionItem = ({ text, amount, type }) => {
  return (
    <div className={`${type === 'income' ? css.income : css.expense} ${css.itemWrap}`}>
      <p>{text}</p>
      <p>
        {type === 'income' ? '+' : '-'}￦{amount}
      </p>
      <button className={css.removeBtn}>X</button>
    </div>
  )
}

export default TransactionItem
