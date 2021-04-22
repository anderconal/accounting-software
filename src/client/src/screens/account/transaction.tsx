import React from 'react'
import { Transaction } from '../../domain/models/transaction'
import { accountService } from '../../domain/services/account-service'

interface ITransactionProps {
    transaction: Transaction
}

function TransactionScreen ({ transaction }: ITransactionProps) {
  return (
        <>
            <tbody>
                <tr className={accountService.isNegativeBalance(transaction.balance) ? 'table-danger' : 'table-success'}>
                    <th scope="row">{transaction.id}</th>
                    <td>{accountService.toDateString(transaction.createdAt)}</td>
                    <td>{accountService.formatAmount(transaction.amount, transaction.type)}</td>
                    <td >{transaction.balance}</td>
                </tr>
            </tbody>
        </>
  )
}

export default TransactionScreen
