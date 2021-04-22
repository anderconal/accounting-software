import mongoose from 'mongoose'
import {TransactionSchema} from "./transaction-schema";

export const AccountSchema = new mongoose.Schema({
    balance: {
        type: Number,
        required: true
    },
    transactions: [
        TransactionSchema
    ]
}, {
    timestamps: true,
    toJSON: { virtuals: true }
})
