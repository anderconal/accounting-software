import { accountRepository } from '../../infrastructure/repositories/account-repository'
import { TransactionType } from '../enums/transaction-type'

export const accountService = {
  getAccounts: () => {
    return accountRepository.getAccounts()
  },
  deposit: (id: string, amount: number) => {
    return accountRepository.deposit(id, amount)
  },
  withdraw: (id: string, amount: number) => {
    return accountRepository.withdraw(id, amount)
  },
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
