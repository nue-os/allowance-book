import React from 'react'
import css from './BalanceDisplay.module.css'
import { useSelector } from 'react-redux'
import { calBalance } from '../utils/calculate'

const BalanceDisplay = () => {
  const { transactions } = useSelector(state => state.transactions)

  return (
    <div className={css.balanceCon}>
      <strong>잔액</strong>
      <span>{`￦${Number(calBalance(transactions)).toLocaleString()}`}</span>
    </div>
  )
}

export default BalanceDisplay
