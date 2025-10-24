import { MigrationInterface, QueryRunner } from "typeorm";

export class TableUser1761312827308 implements MigrationInterface {
    name = 'TableUser1761312827308'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "direcion" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "direcion"`);
    }

}
