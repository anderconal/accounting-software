import mongoose from 'mongoose'
import { Seeder } from 'mongo-seeding'
import path from 'path'

export class DbConfig {
    private readonly uri: string = 'mongodb://localhost:27017/Bank'
    private readonly port: number = 27017

    public async configure (): Promise<void> {
      mongoose.Promise = Promise
      mongoose.connect(this.uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
      })
        .then(() => {
          console.log(`⚡️[mongodb]: MongoDB is running at mongodb://localhost:${this.port}`)
          this.seed()
        })
        .catch(err => {
          console.error(err)
        })

      mongoose.connection.on('error', err => {
        console.error(err)
      })
    }

    private async seed (): Promise<void> {
      const config = {
        database: this.uri,
        dropDatabase: true
      }

      const seeder = new Seeder(config)

      try {
        const collections = seeder.readCollectionsFromPath(path.resolve('./infrastructure/data'))
        await seeder.import(collections)
      } catch (err) {
        console.error(err)
      }
    }
}
