import { http } from '../http/http'
import { accountDto } from '../dtos/account-dto'
import { Account } from '../../domain/models/account'

export const accountRepository = {
  getAccounts: async () => {
    const accounts = await http.get<accountDto[]>('http://localhost:8001/account/all')

    return accounts.map((accountDto): Account => ({
      id: accountDto.id,
      balance: accountDto.balance,
      transactions: accountDto.transactions
    }))
  },
  deposit: async (id: string, amount: number) => {
    return await http.post<Account>('http://localhost:8001/account/deposit', JSON.stringify({
      id: id,
      amount: amount
    }))
  },
  withdraw: async (id: string, amount: number) => {
    return await http.post<Account>('http://localhost:8001/account/withdraw', JSON.stringify({
      id: id,
      amount: amount
    }))
  }
}
