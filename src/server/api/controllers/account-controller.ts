import { NextFunction, Request, Response, Router } from 'express'
import { AccountService } from '../../infrastructure/services/account-service'

export class AccountController {
    public router = Router();

    constructor (private accountService: AccountService) {
      this.setRoutes()
    }

    public setRoutes (): void {
      this.router.route('/all').get(this.findAll)

      this.router.route('/').post(this.add)

      this.router.route('/:id').delete(this.delete).put(this.update)
      this.router.route('/deposit').post(this.deposit)
      this.router.route('/withdraw').post(this.withdraw)
    }

    private findAll = async (_: Request, res: Response, next: NextFunction) => {
      try {
        const account = await this.accountService.find()
        res.send(account)
      } catch (err) {
        next(err)
      }
    };

    private add = async (req: Request, res: Response, next: NextFunction) => {
      try {
        const addAccountResult = await this.accountService.add(req.body)
        res.send(addAccountResult)
      } catch (err) {
        next(err)
      }
    };

    private delete = async (req: Request, res: Response, next: NextFunction) => {
      try {
        const deleteAccountResult = await this.accountService.delete(
          req.params.id
        )
        res.send(deleteAccountResult)
      } catch (err) {
        next(err)
      }
    };

    private update = async (req: Request, res: Response, next: NextFunction) => {
      try {
        const updateAccountResult = await this.accountService.update(
          req.params.id,
          req.body
        )
        res.send(updateAccountResult)
      } catch (err) {
        next(err)
      }
    };

    private deposit = async (req: Request, res: Response, next: NextFunction) => {
      try {
        const depositResult = await this.accountService.deposit(
          req.body.id,
          req.body.amount
        )

        res.send(depositResult)
      } catch (err) {
        next(err)
      }
    };

    private withdraw = async (req: Request, res: Response, next: NextFunction) => {
      try {
        const withdrawResult = await this.accountService.withdraw(
          req.body.id,
          req.body.amount
        )
        res.send(withdrawResult)
      } catch (err) {
        next(err)
      }
    };
}
