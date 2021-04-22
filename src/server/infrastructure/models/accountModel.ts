import mongoose from 'mongoose'
import { AccountSchema } from '../schemas/account-schema'

export const AccountModel = mongoose.model('AccountModel', AccountSchema)
