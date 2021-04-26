import { render, screen } from '@testing-library/react'
import AccountScreen from './account-screen'
import React from 'react'
import { Account } from '../../domain/models/account'
import { Transaction } from '../../domain/models/transaction'
import { TransactionType } from '../../domain/enums/transaction-type'

test('Account screen shows account transactions', () => {
  const transaction: Transaction = {
    id: 'testTransactionId',
    amount: 288,
    balance: 288,
    type: TransactionType.Withdrawal,
    createdAt: '2016-05-18T16:00:00Z'
  }
  const account: Account = {
    id: 'testAccountId',
    balance: 288,
    transactions: [
      transaction
    ]
  }

  render(<AccountScreen account={account} />)

  const accountElement = screen.getByText('Account: testAccountId')
  expect(accountElement).toBeInTheDocument()

  const transactionActionInput = screen.getByLabelText('Euros to deposit or withdraw')
  expect(transactionActionInput).toBeInTheDocument()
  const depositButton = screen.getByLabelText('Deposit money')
  expect(depositButton).toBeInTheDocument()
  const withdrawButton = screen.getByLabelText('Withdraw money')
  expect(withdrawButton).toBeInTheDocument()

  const transactionListElement = screen.getByLabelText('List of transactions of the account')
  expect(transactionListElement).toHaveClass('table table-dark table-striped table-hover')

  const transactionDetailsElement = screen.getByLabelText('Row with transaction details')
  expect(transactionDetailsElement).toHaveClass('table-success')

  const transactionIdTitleElement = screen.getByText('#')
  expect(transactionIdTitleElement).toBeInTheDocument()
  const dateTitleElement = screen.getByText('Date')
  expect(dateTitleElement).toBeInTheDocument()
  const amountTitleElement = screen.getByText('Amount')
  expect(amountTitleElement).toBeInTheDocument()
  const balanceTitleElement = screen.getByText('Balance')
  expect(balanceTitleElement).toBeInTheDocument()

  const transactionIdElement = screen.getByText('testTransactionId')
  expect(transactionIdElement).toBeInTheDocument()
  const dateElement = screen.getByText('5/18/2016')
  expect(dateElement).toBeInTheDocument()
  const amountElement = screen.getByText('- 288')
  expect(amountElement).toBeInTheDocument()
  const balanceElement = screen.getByText('288')
  expect(balanceElement).toBeInTheDocument()
})
