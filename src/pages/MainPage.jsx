import React from 'react'
import BalanceDisplay from '../organisms/BalanceDisplay'
import IncomeExpenseSummary from '../organisms/IncomeExpenseSummary'
import TransactionInputForm from '../organisms/TransactionInputForm'
import TransactionList from '../organisms/TransactionList'

const MainPage = () => {
  return (
    <main>
      <h1>용돈 기입장</h1>
      <section>
        <BalanceDisplay />
        <IncomeExpenseSummary />
        <TransactionInputForm />
        <TransactionList />
      </section>
    </main>
  )
}

export default MainPage
