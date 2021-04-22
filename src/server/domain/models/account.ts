import { Transaction } from './transaction'
import { TransactionType } from '../enums/transaction-type'

export class Account {
    public balance: number = 0;
    public transactions: Transaction[] = [];

    constructor (balance: number) {
      this.balance = balance
    }

    public deposit (amount: number) {
      this.balance += amount
      console.log('DOMAIN POST this.balance', this.balance)
      console.log('DOMAIN POST amount', amount)

      const transaction = new Transaction(amount, this.balance, TransactionType.Deposit)
      this.transactions.push(transaction)
    }

    public withdraw (amount: number) {
      this.balance -= amount

      const transaction = new Transaction(amount, this.balance, TransactionType.Withdrawal)
      this.transactions.push(transaction)
    }
}
