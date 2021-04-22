import express, { Express } from 'express'

const app: Express = express()
const PORT: number = 8000

app.get('/', (req, res) => res.send('Express + TypeScript Ander'))

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`)
})
