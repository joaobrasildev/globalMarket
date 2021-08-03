import 'reflect-metadata';
import { getRepository, Repository } from 'typeorm';
import Account from '../database/entities/account';
import { IAccount } from '../interfaces/account';
import IAccountRepository from '../interfaces/repositories/IAccountRepository';

export default class AccountRepository implements IAccountRepository {
    private ormRepository: Repository<Account>;
    constructor() {
        this.ormRepository = getRepository(Account);
    }

    public async create(accountData: IAccount): Promise<any> {
        const account = this.ormRepository.create(accountData);
        await this.ormRepository.save(account);

        return account;
    }
}
