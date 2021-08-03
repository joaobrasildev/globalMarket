import {
    Entity,
    Column,
    Unique,
    Double,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';
import { IAccount } from '../../interfaces/account';

@Unique(['nickName'])
@Entity('account')
export default class Account implements IAccount {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column({
        nullable: false,
        length: 200,
        type: 'varchar',
    })
    name: string;
    @Column({
        nullable: false,
        length: 200,
        type: 'varchar',
    })
    nickName: string;
    @Column({
        nullable: false,
        length: 500,
        type: 'varchar',
    })
    password: string;
    @Column({
        nullable: false,
        type: 'money',
    })
    priceImbuiment: Double;
    @Column({
        nullable: false,
        type: 'boolean',
    })
    active: Boolean;
    @CreateDateColumn({
        nullable: false,
        type: 'date',
    })
    created_at: Date;
    @Column({
        nullable: false,
        length: 200,
        type: 'varchar',
    })
    created_by: string;
    @UpdateDateColumn({
        nullable: true,
        type: 'date',
    })
    updated_at: Date;
    @Column({
        nullable: true,
        length: 200,
        type: 'varchar',
    })
    updated_by: string;
}
