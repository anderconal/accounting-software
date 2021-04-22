import mongoose from 'mongoose'
import {TransactionType} from "../../domain/enums/transaction-type";

export const TransactionSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: true
    },
    balance: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        enum: [TransactionType.Deposit, TransactionType.Withdrawal],
        required: true
    }
}, {timestamps: true, toJSON: {virtuals: true}})

