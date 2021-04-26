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
    setAmount(0)
    accountService.deposit(accountId, amount).then(result => {
      onTransactionUpdate(result.transactions)
    })
  }

  function withdraw () {
    setAmount(0)
    accountService.withdraw(accountId, amount).then(result => {
      onTransactionUpdate(result.transactions)
    })
  }

  return (
        <div className="input-group p-10">
            <input data-e2e={'amount-input'} type="number" className="form-control" placeholder="Euros to deposit / withdraw"
                   aria-label="Euros to deposit or withdraw" value={amount} onChange={e => { setAmount(Number(e.target.value)) }}/>
            <button data-e2e={'deposit-button'} aria-label="Deposit money" className="btn btn-outline-light" type="button" onClick={deposit}>Deposit</button>
            <button data-e2e={'withdraw-button'} aria-label="Withdraw money" className="btn btn-outline-light" type="button" onClick={withdraw}>Withdraw</button>
        </div>
  )
}

export default TransactionActions
