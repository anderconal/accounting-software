import { IAccount } from '../../infrastructure/interfaces/IAccount'

describe('Account API', function () {
  let testAccount: IAccount

  beforeEach(() => {
    cy.request('POST', '/account', {
      balance: 288,
      transactions: []
    }).should((response) => {
      expect(response.status).to.eq(200)
      testAccount = response.body
    })
  })

  it('returns all accounts', function () {
    cy.request('GET', '/account/all')
      .should((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.length).to.greaterThan(0)
      })
  })

  it('deposits money', function () {
    if (testAccount && testAccount.id) {
      const deposit = {
        id: testAccount.id,
        amount: 100
      }
      cy.request('POST', '/account/deposit', deposit)
        .should((response) => {
          expect(response.status).to.eq(200)
          expect(response.body.balance).to.eq(testAccount.balance + deposit.amount)
          expect(response.body.transactions[0].amount).to.eq(deposit.amount)
          expect(response.body.transactions[0].balance).to.eq(testAccount.balance + deposit.amount)
          expect(response.body.transactions[0].type).to.eq('DEPOSIT')
        })
    }
  })

  it('withdraws money', function () {
    if (testAccount && testAccount.id) {
      const withdrawal = {
        id: testAccount.id,
        amount: 100
      }
      cy.request('POST', '/account/withdraw', withdrawal)
        .should((response) => {
          expect(response.status).to.eq(200)
          expect(response.body.balance).to.eq(testAccount.balance - withdrawal.amount)
          expect(response.body.transactions[0].amount).to.eq(withdrawal.amount)
          expect(response.body.transactions[0].balance).to.eq(testAccount.balance - withdrawal.amount)
          expect(response.body.transactions[0].type).to.eq('WITHDRAWAL')
        })
    }
  })

  afterEach(() => {
    if (testAccount && testAccount.id) {
      cy.request('DELETE', `/account/${testAccount.id}`)
        .should((response) => {
          expect(response.status).to.eq(200)
        })
    }
  })
})
