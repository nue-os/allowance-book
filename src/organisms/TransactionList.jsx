import React from 'react'
import css from './TransactionList.module.css'
import TransactionItem from '../components/TransactionItem'

const TransactionList = () => {
  return (
    <div className={css.listCon}>
      <h2>내역</h2>
      <div className={css.list}>
        <TransactionItem text={`4월 용돈`} amount={`30,000`} type={`income`} />
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
