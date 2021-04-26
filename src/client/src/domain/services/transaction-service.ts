import { TransactionType } from '../enums/transaction-type'

export const transactionService = {
  isNegativeBalance: (balance: number) => {
    return balance < 0
  },
  toDateString: (date: string) => {
    return new Date(date).toLocaleDateString()
  },
  formatAmount: (amount: number, transactionType: string) => {
    return transactionType === TransactionType.Deposit ? `+ ${amount}` : `- ${amount}`
  }
}
