import React from 'react'
import css from './IncomeExpenseSummary.module.css'
import { calExpense, calIncome } from '../utils/calculate'
import { useSelector } from 'react-redux'

const IncomeExpenseSummary = () => {
  const { transactions } = useSelector(state => state.transactions)
  return (
    <div className={css.summaryCon}>
      <div className={css.income}>
        <strong>수입</strong>
        <span>{`￦${Number(calIncome(transactions)).toLocaleString()}`}</span>
      </div>
      <span className={css.bar}></span>
      <div className={css.expense}>
        <strong>지출</strong>
        <span>{`￦${Number(calExpense(transactions)).toLocaleString()}`}</span>
      </div>
    </div>
  )
}

export default IncomeExpenseSummary
