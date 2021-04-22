import React, { useState } from 'react'
import { Transaction } from '../../domain/models/transaction'
import { accountService } from '../../domain/services/account-service'

interface ITransactionActionsProps {
    onTransactionUpdate: (transaction: Transaction[]) => void,
    accountId: string
}

function TransactionActions ({ onTransactionUpdate, accountId }: ITransactionActionsProps) {
  const [amount, setAmount] = useState<number>(0)

  function deposit () {
    accountService.deposit(accountId, amount).then(result => {
      onTransactionUpdate(result.transactions)
    })
  }

  function withdraw () {
    accountService.withdraw(accountId, amount).then(result => {
      onTransactionUpdate(result.transactions)
    })
  }

  return (
        <div className="input-group">
            <input type="number" className="form-control" placeholder="€ to deposit / withdraw"
                   aria-label="Euros to deposit or withdraw" value={amount} onChange={e => { setAmount(Number(e.currentTarget.value)) }}/>
            <button className="btn btn-outline-secondary" type="button" onClick={deposit}>Deposit</button>
            <button className="btn btn-outline-secondary" type="button" onClick={withdraw}>Withdraw</button>
        </div>
  )
}

export default TransactionActions
