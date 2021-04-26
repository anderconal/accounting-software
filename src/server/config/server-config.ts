import { Express } from 'express'
import cors, { CorsOptions } from 'cors'
import bodyParser from 'body-parser'
import { AccountController } from '../api/controllers/account-controller'
import { AccountService } from '../infrastructure/services/account-service'
import { AccountRepository } from '../infrastructure/repositories/account-repository'

export class ServerConfig {
    private readonly port: number = 8001
    private app: Express

    constructor (app: Express) {
      this.app = app
    }

    public configure (): void {
      this.app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
      this.app.use(bodyParser.json({ limit: '50mb' }))

      this.configureCors()
      this.configureRoutes()
    }

    public start (): void {
      this.app.listen(this.port, () => {
        console.log(`⚡️[server]: Server is running at http://localhost:${this.port}`)
      })
    }

    private configureCors (): void {
      const corsOptions: CorsOptions = {
        origin: 'http://localhost:3000',
        optionsSuccessStatus: 200
      }
      this.app.use(cors(corsOptions))
    }

    private configureRoutes () {
      const accountController = new AccountController(new AccountService(new AccountRepository()))
      this.app.use('/account', accountController.router)
    }
}
