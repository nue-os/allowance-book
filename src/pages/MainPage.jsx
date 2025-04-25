import React from 'react'
import BalanceDisplay from '../organisms/BalanceDisplay'

const MainPage = () => {
  return (
    <main>
      <h1>용돈 기입장</h1>
      <section>
        <BalanceDisplay />
        <div>수입/지출 내역</div>
        <div>거래 입력 폼</div>
        <div>거래 내역</div>
      </section>
    </main>
  )
}

export default MainPage
