export const calIncome = transactions =>
  transactions.filter(t => t.type === 'income').reduce((acc, t) => acc + t.amount, 0)

export const calExpense = transactions =>
  transactions.filter(t => t.type === 'expense').reduce((acc, t) => acc + t.amount, 0)

export const calBalance = transactions => calIncome(transactions) - calExpense(transactions)
