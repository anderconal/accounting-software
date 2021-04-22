export type TransactionId = string

export type Transaction = {
    id: TransactionId;
    amount: number;
    balance: number;
    type: string;
    createdAt: string;
}
