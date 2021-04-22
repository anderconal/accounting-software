import {TransactionType} from "../enums/transaction-type";

export class Transaction {
    private amount: number;
    private balance: number;
    private type: TransactionType;
    private createdAt: Date;
    
    constructor(amount: number, balance: number, type: TransactionType) {
        this.amount = amount;
        this.balance = balance;
        this.type = type;
        this.createdAt = new Date();
    }
}