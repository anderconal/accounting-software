import { Transaction } from '../models/transaction'
import { IAccount } from '../interfaces/IAccount'
import { Account } from '../models/account'
import { TransactionType } from '../../domain/enums/transaction-type'

export class AccountRepository {
  public async deposit (accountId: string, amount: number): Promise<IAccount> {
    return await AccountRepository.doTransaction(accountId, amount, TransactionType.Deposit)
  }

  public async withdraw (accountId: string, amount: number): Promise<IAccount> {
    return await AccountRepository.doTransaction(accountId, amount, TransactionType.Withdrawal)
  }

  private static async doTransaction (accountId: string, amount: number, type: TransactionType) {
    const account: IAccount = await Account.findById(accountId).exec()
    const newBalance = type === TransactionType.Deposit ? account.balance + amount : account.balance - amount

    const newTransaction = new Transaction({
      amount: amount,
      type: type,
      balance: newBalance
    })
    await newTransaction.save()

    const result: Promise<IAccount> = await Account.findOneAndUpdate({ _id: accountId },
      {
        $set: { balance: newBalance },
        $push: { transactions: newTransaction }
      },
      { new: true })
      .exec()

    return result
  }
}
