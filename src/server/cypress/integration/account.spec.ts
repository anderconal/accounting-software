import {IAccount} from "../../infrastructure/interfaces/IAccount";

describe('AccountModel API', function () {
    let account: IAccount;

    beforeEach(() => {
        cy.request('POST', '/account', {
            balance: 288,
            transactions: []
        }).should((response) => {
            expect(response.status).to.eq(200)
            account = response.body;
        })
    })

    it('returns all accounts', function () {
        cy.request('GET', '/account/all')
            .should((response) => {
                expect(response.status).to.eq(200)
                expect(response.body[0].balance).to.eq(288)
                expect(response.body.length).to.eq(1)
            })
    });

    it('deposit', function () {
        if (account && account._id) {
            cy.request('POST', '/account/deposit', {
                id: account._id,
                amount: 100
            }).should((response) => {
                expect(response.status).to.eq(200)
                expect(response.body.balance).to.eq(388)
                expect(response.body.transactions[0].amount).to.eq(100)
                expect(response.body.transactions[0].balance).to.eq(388)
                expect(response.body.transactions[0].type).to.eq('DEPOSIT')
            })
        }

    });

    it('withdraw', function () {
        if (account && account._id) {
            cy.request('POST', '/account/withdraw', {
                id: account._id,
                amount: 100
            }).should((response) => {
                expect(response.status).to.eq(200)
                expect(response.body.balance).to.eq(188)
                expect(response.body.transactions[0].amount).to.eq(100)
                expect(response.body.transactions[0].balance).to.eq(188)
                expect(response.body.transactions[0].type).to.eq('WITHDRAWAL')
            })
        }
    });


    afterEach(() => {
        if (account && account._id) {
            cy.request('DELETE', `/account/${account._id}`)
                .should((response) => {
                    expect(response.status).to.eq(200)
                })
        }
    })
});