import { transactionDto } from './transaction-dto'

export interface accountDto {
    id: string;
    balance: number;
    transactions: transactionDto[];
}
