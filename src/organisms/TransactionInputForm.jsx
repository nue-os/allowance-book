import React, { useState } from 'react'
import css from './TransactionInputForm.module.css'
import RadioButton from '../components/RadioButton'
import InputField from '../components/InputField'

const TransactionInputForm = () => {
  const [trasactionContents, setTransactionContents] = useState('')
  const [transactionType, setTransactionType] = useState('income')
  const [transactionAmount, setTransactionAmount] = useState('')

  const handleContentsChange = e => setTransactionContents(e.target.value)
  const handleRadioChange = e => setTransactionType(e.target.value)
  const handleAmountChange = e => setTransactionAmount(e.target.value)

  const handleSubmit = () => {
    setTransactionContents('')
    setTransactionType('income')
    setTransactionAmount('')
  }
  return (
    <div className={css.inputFormCon}>
      <h2>새로운 거래 추가</h2>

      <div className={css.inputForm}>
        <InputField
          label="텍스트"
          id="contents"
          value={trasactionContents}
          placeholder="내용을 입력해 주세요."
          onChange={handleContentsChange}
        />

        <div className={css.radioGroup}>
          <RadioButton
            id="income"
            name="type"
            value="income"
            label="수입"
            checked={transactionType === 'income'}
            onChange={handleRadioChange}
          />
          <RadioButton
            id="expense"
            name="type"
            value="expense"
            label="지출"
            checked={transactionType === 'expense'}
            onChange={handleRadioChange}
          />
        </div>
        <InputField
          label="금액"
          id="amount"
          value={transactionAmount}
          placeholder="금액을 입력해 주세요."
          onChange={handleAmountChange}
        />

        <button className={css.button} onClick={handleSubmit}>
          거래 추가
        </button>
      </div>
    </div>
  )
}

export default TransactionInputForm
