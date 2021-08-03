import { Double } from 'typeorm';

import IPatternModel from './common/ICommonInterface';

export interface IAccount extends IPatternModel {
    name: string;
    nickName: string;
    password: string;
    priceImbuiment: Double;
    active: Boolean;
}
