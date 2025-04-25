import React, { useEffect, useState } from 'react'
import css from './TransactionList.module.css'
import TransactionItem from '../components/TransactionItem'

import { useSelector } from 'react-redux'

const TransactionList = () => {
  const { transactions } = useSelector(state => state.transactions)

  return (
    <div className={css.listCon}>
      <h2>내역</h2>
      <div className={css.list}>
        {transactions.map(item => (
          <TransactionItem key={item.id} text={item.text} amount={item.amount} type={item.type} />
        ))}
      </div>
    </div>
  )
}

export default TransactionList
