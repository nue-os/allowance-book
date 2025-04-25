import React from 'react'
import BalanceDisplay from '../organisms/BalanceDisplay'
import IncomeExpenseSummary from '../organisms/IncomeExpenseSummary'
import TransactionInputForm from '../organisms/TransactionInputForm'

const MainPage = () => {
  return (
    <main>
      <h1>용돈 기입장</h1>
      <section>
        <BalanceDisplay />
        <IncomeExpenseSummary />
        <TransactionInputForm />
        <div>거래 내역</div>
      </section>
    </main>
  )
}

export default MainPage
