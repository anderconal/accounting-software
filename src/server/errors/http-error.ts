import { IGenericError } from './IGenericError'

export class HttpError extends Error implements IGenericError {
  constructor (message: string, public status: number) {
    super(message)
  }
}
