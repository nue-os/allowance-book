import React from 'react'
import BalanceDisplay from '../organisms/BalanceDisplay'
import IncomeExpenseSummary from '../organisms/IncomeExpenseSummary'

const MainPage = () => {
  return (
    <main>
      <h1>용돈 기입장</h1>
      <section>
        <BalanceDisplay />
        <IncomeExpenseSummary />
        <div>거래 입력 폼</div>
        <div>거래 내역</div>
      </section>
    </main>
  )
}

export default MainPage
