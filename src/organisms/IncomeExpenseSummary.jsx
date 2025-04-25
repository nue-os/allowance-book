import React from 'react'
import css from './IncomeExpenseSummary.module.css'

const IncomeExpenseSummary = () => {
  return (
    <div className={css.summaryCon}>
      <div className={css.income}>
        <strong>수입</strong>
        <span>{`￦300,000`}</span>
      </div>
      <span className={css.bar}></span>
      <div className={css.expense}>
        <strong>지출</strong>
        <span>{`￦100,000`}</span>
      </div>
    </div>
  )
}

export default IncomeExpenseSummary
