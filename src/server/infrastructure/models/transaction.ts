import mongoose from 'mongoose'
import { TransactionSchema } from '../schemas/transaction-schema'

export const Transaction = mongoose.model('Transaction', TransactionSchema)
