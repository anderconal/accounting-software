import { HttpError } from '../../errors/http-error'
import { IAccount } from '../interfaces/IAccount'
import { Account } from '../models/account'
import { AccountRepository } from '../repositories/account-repository'

export class AccountService {
  private accountRepository: AccountRepository

  constructor (accountRepository: AccountRepository) {
    this.accountRepository = accountRepository
  }

  public find (): Promise<IAccount[]> {
    return Account.find({}).exec()
  }

  public add (account: IAccount): Promise<IAccount> {
    const newAccount = new Account(account)
    return newAccount.save()
  }

  public async delete (id: string): Promise<IAccount> {
    const deletedAccount: Promise<IAccount> = await Account.findByIdAndDelete(
      id
    ).exec()

    if (!deletedAccount) {
      throw new HttpError(`Account with id '${id}' not found`, 404)
    }

    return deletedAccount
  }

  public async update (id: string, account: IAccount | Partial<IAccount>): Promise<IAccount> {
    const updatedAccount: Promise<IAccount> = await Account.findByIdAndUpdate(
      id,
      account
    ).exec()

    if (!updatedAccount) {
      throw new HttpError(`Account with id '${id}' not found`, 404)
    }

    return updatedAccount
  }

  public async deposit (id: string, amount: number): Promise<IAccount> {
    return await this.accountRepository.deposit(id, amount)
  }

  public async withdraw (id: string, amount: number): Promise<IAccount> {
    return await this.accountRepository.withdraw(id, amount)
  }
}
