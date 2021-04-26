import { Document } from 'mongoose'
import { ITransaction } from './ITransaction'

export interface IAccount extends Document {
    id: string;
    balance: number;
    transactions: ITransaction[];
}
