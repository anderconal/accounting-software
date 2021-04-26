import mongoose from 'mongoose'
import { AccountSchema } from '../schemas/account-schema'

export const Account = mongoose.model('Account', AccountSchema)
