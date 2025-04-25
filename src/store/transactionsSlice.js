import { createSlice } from '@reduxjs/toolkit'

export const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: {
    transactions: JSON.parse(localStorage.getItem('myData')) || [],
  },
  reducers: {
    addTransaction: (state, action) => {
      state.transactions.push(action.payload)
    },
    removeTransaction: (state, action) => {
      state.transactions = state.transactions.filter(
        transaction => transaction.id !== action.payload
      )
    },
  },
})

export const { addTransaction, removeTransaction } = transactionsSlice.actions
export default transactionsSlice.reducer
