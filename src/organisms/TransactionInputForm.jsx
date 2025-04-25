import React, { useState } from 'react'
import css from './TransactionInputForm.module.css'
import RadioButton from '../components/RadioButton'
import InputField from '../components/InputField'
import useLocalStorage from '../hooks/useLocalStorage'

const TransactionInputForm = () => {
  const { addItem } = useLocalStorage('myData')

  const [trasactionText, setTransactionText] = useState('')
  const [transactionType, setTransactionType] = useState('income')
  const [transactionAmount, setTransactionAmount] = useState('')

  const [errorText, setErrorText] = useState('')
  const [errorAmount, setErrorAmount] = useState('')

  const handleContentsChange = e => {
    setTransactionText(e.target.value)
    setErrorText('')
  }
  const handleRadioChange = e => setTransactionType(e.target.value)
  const handleAmountChange = e => {
    const rawValue = e.target.value.replace(/[^0-9]/g, '') // 숫자인지 검증

    if (rawValue === '') {
      setTransactionAmount('')
      return
    }
    const formattedAmount = '￦ ' + Number(rawValue).toLocaleString()
    setTransactionAmount(formattedAmount)
    setErrorAmount('')
  }

  const handleSubmit = () => {
    let hasError = false
    if (trasactionText === '') {
      setErrorText('내용을 입력해주세요!')
      hasError = true
    } else {
      setErrorText('')
    }

    if (transactionAmount === '') {
      setErrorAmount('금액을 입력해주세요!')
      hasError = true
    } else {
      setErrorAmount('')
    }
    if (hasError) return

    addItem({
      text: trasactionText,
      type: transactionType,
      amount: transactionAmount,
    })
    setTransactionText('')
    setTransactionType('income')
    setTransactionAmount('')
  }
  return (
    <div className={css.inputFormCon}>
      <h2>새로운 거래 추가</h2>

      <div className={css.inputForm}>
        <div className={css.textWrap}>
          <InputField
            label="텍스트"
            id="contents"
            value={trasactionText}
            placeholder="내용을 입력해 주세요."
            onChange={handleContentsChange}
          />
          {errorText && <p className={css.error}>{errorText}</p>}
        </div>

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
        <div className={css.amountWrap}>
          <InputField
            label="금액"
            id="amount"
            value={transactionAmount}
            placeholder="금액을 입력해 주세요."
            onChange={handleAmountChange}
          />
          {errorAmount && <p className={css.error}>{errorAmount}</p>}
        </div>

        <button className={css.button} onClick={handleSubmit}>
          거래 추가
        </button>
      </div>
    </div>
  )
}

export default TransactionInputForm
