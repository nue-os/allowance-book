import React from 'react'
import css from './TransactionItem.module.css'

const TransactionItem = ({ text, amount, type }) => {
  return (
    <div className={`${type === 'income' ? css.income : css.expense} ${css.itemWrap}`}>
      <p>{text}</p>
      <p>
        {type === 'income' ? '+' : '-'}￦{amount}
      </p>
    </div>
  )
}

export default TransactionItem
