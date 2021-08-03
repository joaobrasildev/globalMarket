import { inject, injectable } from 'tsyringe';
import { IAccount } from '../interfaces/account';
import Account from '../database/entities/account';
import IAccountRepository from '../interfaces/repositories/IAccountRepository';

@injectable()
export default class AccountService {
    constructor(
        @inject('AccountRepository')
        private accountRepository: IAccountRepository,
    ) {}

    public async create(accountData: IAccount): Promise<Account> {
        const account = await this.accountRepository.create(accountData);
        return account;
    }
}
