import React from 'react'
import css from './BalanceDisplay.module.css'

const BalanceDisplay = () => {
  return (
    <div className={css.balanceCon}>
      <strong>잔액</strong>
      <span>{`￦200,000`}</span>
    </div>
  )
}

export default BalanceDisplay
