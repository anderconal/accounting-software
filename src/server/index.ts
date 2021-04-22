import express, {Express} from 'express'
import cors, {CorsOptions} from 'cors'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import {AccountService} from './infrastructure/services/account-service'
import {AccountController} from "./api/controllers/account-controller";

const app: Express = express()
const PORT: number = 8001

const corsOptions: CorsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}

app.use(bodyParser.urlencoded({limit: '50mb', extended: true}))
app.use(bodyParser.json({limit: '50mb'}))
app.use(cors(corsOptions))
const accountController = new AccountController(new AccountService())
app.use('/account', accountController.router)
app.get('/', (req, res) => res.send('Express + TypeScript Ander'))
app.get('/api/hello-world', (req, res) => res.send('Hello world!'))

mongoose.Promise = Promise
mongoose.connect('mongodb://localhost:27017/Bank', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
    .then(() => {
        app.listen(PORT, () => {
            console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`)
        })
    })
    .catch(err => {
        console.error(err)
    })

mongoose.connection.on('error', err => {
    console.error(err)
})
