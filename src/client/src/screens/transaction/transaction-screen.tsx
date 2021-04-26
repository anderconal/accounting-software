import React from 'react'
import { Transaction } from '../../domain/models/transaction'
import { transactionService } from '../../domain/services/transaction-service'

interface ITransactionProps {
    transaction: Transaction
}

function TransactionScreen ({ transaction }: ITransactionProps) {
  return (
        <>
            <tbody>
                <tr data-e2e={'transaction-row'} aria-label="Row with transaction details" className={transactionService.isNegativeBalance(transaction.balance) ? 'table-danger' : 'table-success'}>
                    <th scope="row">{transaction.id}</th>
                    <td data-e2e={'transaction-date'}>{transactionService.toDateString(transaction.createdAt)}</td>
                    <td data-e2e={'transaction-amount'}>{transactionService.formatAmount(transaction.amount, transaction.type)}</td>
                    <td data-e2e={'transaction-balance'}>{transaction.balance}</td>
                </tr>
            </tbody>
        </>
  )
}

export default TransactionScreen
