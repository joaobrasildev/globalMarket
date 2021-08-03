import { IAccount } from '../../interfaces/account';
import Account from '../../database/entities/account';

export default interface IAccountRepository {
    create(accountData: IAccount): Promise<Account>;
}
