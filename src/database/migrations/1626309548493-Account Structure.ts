import { MigrationInterface, QueryRunner } from 'typeorm';

export class AccountStructure1626309548493 implements MigrationInterface {
    name = 'AccountStructure1626309548493';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "account" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(200) NOT NULL, "nickName" character varying(200) NOT NULL, "password" character varying(500) NOT NULL, "priceImbuiment" money NOT NULL, "active" boolean NOT NULL, "created_at" date NOT NULL DEFAULT now(), "created_by" character varying(200) NOT NULL, "updated_at" date DEFAULT now(), "updated_by" character varying(200), CONSTRAINT "UQ_12e97bb35876ead8c691d748065" UNIQUE ("nickName"), CONSTRAINT "PK_54115ee388cdb6d86bb4bf5b2ea" PRIMARY KEY ("id"))`,
        );
        await queryRunner.query(
            `ALTER TABLE "items" DROP CONSTRAINT "UQ_2e1b2faa806202a35db2ae256ef"`,
        );
        await queryRunner.query(`ALTER TABLE "items" DROP COLUMN "description"`);
        await queryRunner.query(
            `ALTER TABLE "items" ADD "description" character varying(300) NOT NULL`,
        );
        await queryRunner.query(
            `ALTER TABLE "items" ADD CONSTRAINT "UQ_2e1b2faa806202a35db2ae256ef" UNIQUE ("description")`,
        );
        await queryRunner.query(`ALTER TABLE "items" DROP COLUMN "weight"`);
        await queryRunner.query(
            `ALTER TABLE "items" ADD "weight" character varying(10) NOT NULL`,
        );
        await queryRunner.query(`ALTER TABLE "items" DROP COLUMN "levelRequired"`);
        await queryRunner.query(
            `ALTER TABLE "items" ADD "levelRequired" character varying(10) NOT NULL`,
        );
        await queryRunner.query(`ALTER TABLE "items" DROP COLUMN "vocation"`);
        await queryRunner.query(
            `ALTER TABLE "items" ADD "vocation" character varying(50) NOT NULL`,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "items" DROP COLUMN "vocation"`);
        await queryRunner.query(
            `ALTER TABLE "items" ADD "vocation" character varying NOT NULL`,
        );
        await queryRunner.query(`ALTER TABLE "items" DROP COLUMN "levelRequired"`);
        await queryRunner.query(
            `ALTER TABLE "items" ADD "levelRequired" integer NOT NULL`,
        );
        await queryRunner.query(`ALTER TABLE "items" DROP COLUMN "weight"`);
        await queryRunner.query(`ALTER TABLE "items" ADD "weight" integer NOT NULL`);
        await queryRunner.query(
            `ALTER TABLE "items" DROP CONSTRAINT "UQ_2e1b2faa806202a35db2ae256ef"`,
        );
        await queryRunner.query(`ALTER TABLE "items" DROP COLUMN "description"`);
        await queryRunner.query(
            `ALTER TABLE "items" ADD "description" character varying NOT NULL`,
        );
        await queryRunner.query(
            `ALTER TABLE "items" ADD CONSTRAINT "UQ_2e1b2faa806202a35db2ae256ef" UNIQUE ("description")`,
        );
        await queryRunner.query(`DROP TABLE "account"`);
    }
}
