import React, { useEffect, useState } from 'react'
import { Account } from '../../domain/models/account'
import TransactionScreen from './transaction'
import TransactionActions from '../transaction/transaction-actions'
import { accountService } from '../../domain/services/account-service'
import { Transaction } from '../../domain/models/transaction'

interface IAccountProps {
    account: Account,
}

function AccountScreen ({ account }: IAccountProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    setTransactions(account.transactions)
  }, [account.transactions])

  const handleTransactionUpdate = (transactions: Transaction[]) => {
    setTransactions(transactions)
  }
  return (
        <>
            <h1>Account: {account.id}</h1>
            <TransactionActions accountId={account.id} onTransactionUpdate={handleTransactionUpdate}/>
            <table className="table table-dark table-striped table-hover">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Date</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Balance</th>
                </tr>
                </thead>
                {transactions.map((transaction) =>
                    <TransactionScreen key={transaction.id}
                                       transaction={transaction}/>)}
            </table>

        </>
  )
}

export default AccountScreen
