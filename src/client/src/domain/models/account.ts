import { Transaction } from './transaction'

export type AccountId = string

export type Account = {
    id: AccountId;
    balance: number;
    transactions: Transaction[];
}
