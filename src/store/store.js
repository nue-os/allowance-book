import { configureStore } from '@reduxjs/toolkit'
import { transactionsSlice } from './transactionsSlice'

export default configureStore({
  reducer: {
    transactions: transactionsSlice.reducer,
  },
})
