import express, { Express } from 'express'
import { DbConfig } from './infrastructure/config/db-config'
import { ServerConfig } from './config/server-config'

const app: Express = express()
const dbConfiguration = new DbConfig()
const serverConfiguration = new ServerConfig(app)

dbConfiguration.configure()
  .then(() => {
    serverConfiguration.configure()
    serverConfiguration.start()
  })
