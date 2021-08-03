import { container } from 'tsyringe';
import IItemRepository from '../interfaces/repositories/IItemRepository';
import ItemRepository from '../repositories/itemRepository';
import AccountRepository from '../repositories/accountRepository';
import IAccountRepository from '../interfaces/repositories/IAccountRepository';

container.registerSingleton<IItemRepository>('ItemRepository', ItemRepository);
container.registerSingleton<IAccountRepository>(
    'AccountRepository',
    AccountRepository,
);
