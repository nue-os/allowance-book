import React, { useEffect, useState } from 'react'
import css from './TransactionList.module.css'
import TransactionItem from '../components/TransactionItem'
import useLocalStorage from '../hooks/useLocalStorage'

const TransactionList = () => {
  const { getList } = useLocalStorage('myData')
  const [transactions, setTransactions] = useState([])

  useEffect(() => {
    const list = getList()
    setTransactions(list)
  }, [getList])

  return (
    <div className={css.listCon}>
      <h2>내역</h2>
      <div className={css.list}>
        {transactions.map(item => (
          <TransactionItem key={item.id} text={item.text} amount={item.amount} type={item.type} />
        ))}

        <TransactionItem text={`4월 용돈`} amount={`30,000`} type={`expense`} />
        <TransactionItem text={`4월 용돈`} amount={`30,000`} type={`income`} />
        <TransactionItem text={`4월 용돈`} amount={`30,000`} type={`expense`} />
        <TransactionItem text={`4월 용돈`} amount={`30,000`} type={`income`} />
        <TransactionItem text={`4월 용돈`} amount={`30,000`} type={`expense`} />
        <TransactionItem text={`4월 용돈`} amount={`30,000`} type={`income`} />
        <TransactionItem text={`4월 용돈`} amount={`30,000`} type={`expense`} />
        <TransactionItem text={`4월 용돈`} amount={`30,000`} type={`income`} />
        <TransactionItem text={`4월 용돈`} amount={`30,000`} type={`expense`} />
      </div>
    </div>
  )
}

export default TransactionList
