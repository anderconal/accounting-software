import { Document } from 'mongoose'

export interface ITransaction extends Document {
    id: number;
    amount: number;
    balance: number;
    type: string;
    createdAt: string;
}
