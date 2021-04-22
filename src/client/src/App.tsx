import React, { useEffect, useState } from 'react'
import './App.css'
import { Account } from './domain/models/account'
import { accountService } from './domain/services/account-service'
import AccountScreen from './screens/account/accountScreen'

function App () {
  const [account, setAccount] = useState<Account>()

  useEffect(() => {
    accountService.getAccounts().then(accounts => {
      setAccount(accounts[0])
    })
  }, [])

  if (!account) {
    return <div className="App">
            <h1>Loading...</h1>
        </div>
  }
  return (
        <div className="App">
            <AccountScreen account={account}/>
        </div>
  )
}

export default App
