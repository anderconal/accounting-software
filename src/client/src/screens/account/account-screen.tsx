import React, { useEffect, useState } from 'react'
import { Account } from '../../domain/models/account'
import TransactionScreen from '../transaction/transaction-screen'
import TransactionActions from '../transaction/transaction-actions'
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
            <div className={'container-fluid'}>
                <div className="row">
                    <div className="col-sm">
                        <h2 data-e2e={'account-id'}>Account: {account.id}</h2>
                    </div>
                    <div className="col-sm">
                        <TransactionActions accountId={account.id} onTransactionUpdate={handleTransactionUpdate}/>
                    </div>
                </div>
            </div>
            <table aria-label="List of transactions of the account" className="table table-dark table-striped table-hover">
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
