import { accountRepository } from '../../infrastructure/repositories/account-repository'

export const accountService = {
  getAccounts: () => {
    return accountRepository.getAccounts()
  },
  deposit: (id: string, amount: number) => {
    return accountRepository.deposit(id, amount)
  },
  withdraw: (id: string, amount: number) => {
    return accountRepository.withdraw(id, amount)
  }
}
