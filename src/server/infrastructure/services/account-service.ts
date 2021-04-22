import { HttpError } from '../../errors/http-error'
import { IAccount } from '../interfaces/IAccount'
import { AccountModel } from '../models/accountModel'
import { Account } from '../../domain/models/account'
import { Transaction } from '../models/transaction'
import { TransactionType } from '../../domain/enums/transaction-type'

export class AccountService {
  public welcomeMessage (): string {
    return 'Welcome'
  }

  public find (): Promise<IAccount[]> {
    return AccountModel.find({}).exec()
  }

  public add (account: IAccount): Promise<IAccount> {
    const newAccount = new AccountModel(account)
    return newAccount.save()
  }

  public async delete (id: string) {
    const deletedAccount: Promise<IAccount> = await AccountModel.findByIdAndDelete(
      id
    ).exec()

    if (!deletedAccount) {
      throw new HttpError(`Account with id '${id}' not found`, 404)
    }

    return deletedAccount
  }

  public async update (id: string, account: IAccount | Partial<IAccount>) {
    const updatedAccount: Promise<IAccount> = await AccountModel.findByIdAndUpdate(
      id,
      account
    ).exec()

    if (!updatedAccount) {
      throw new HttpError(`Account with id '${id}' not found`, 404)
    }

    return updatedAccount
  }

  public async deposit (id: string, amount: number) {
    const test: IAccount = await AccountModel.findById(id).exec()
    const accountModel = new Account(test.balance)
    accountModel.deposit(amount)
    const newTransaction = new Transaction({
      amount: amount,
      type: TransactionType.Deposit,
      balance: accountModel.balance
    })
    await newTransaction.save()
    const result: Promise<IAccount> = await AccountModel.findOneAndUpdate({ _id: id },
      {
        $set: { balance: accountModel.balance },
        $push: { transactions: newTransaction }
      },
      { new: true })
      .exec()

    return result
  }

  public async withdraw (id: string, amount: number) {
    const test: IAccount = await AccountModel.findById(id).exec()
    const accountModel = new Account(test.balance)
    accountModel.withdraw(amount)
    const newTransaction = new Transaction({
      amount: amount,
      type: TransactionType.Withdrawal,
      balance: accountModel.balance
    })
    await newTransaction.save()
    const result: Promise<IAccount> = await AccountModel.findOneAndUpdate({ _id: id },
      {
        $set: { balance: accountModel.balance },
        $push: { transactions: newTransaction }
      },
      { new: true })
      .exec()

    return result
  }
}
