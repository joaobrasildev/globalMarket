import { Response, Request } from 'express';
import { container } from 'tsyringe';
import AccountService from '../services/accountService';

export const create = async (
    request: Request,
    response: Response,
): Promise<Response> => {
    const accountData = request.body;
    const accountService = container.resolve(AccountService);
    const dataResponse = await accountService.create(accountData);

    return response.status(201).json({ id: dataResponse.id });
};
