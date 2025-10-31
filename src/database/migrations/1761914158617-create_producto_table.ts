import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateProductoTable1761914158617 implements MigrationInterface {
    name = 'CreateProductoTable1761914158617'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "persona" ("id" SERIAL NOT NULL, "nombres" character varying NOT NULL, "apellidos" character varying NOT NULL, "userId" integer, CONSTRAINT "REL_551ede1f9ac73b4e8f18495c6d" UNIQUE ("userId"), CONSTRAINT "PK_13aefc75f60510f2be4cd243d71" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "productos" ("id" SERIAL NOT NULL, "nombre" character varying NOT NULL, "precio" integer NOT NULL, "stock" integer NOT NULL, "image" character varying NOT NULL, "descripción" character varying NOT NULL, "estado" boolean NOT NULL, "categoriaId" integer, CONSTRAINT "PK_04f604609a0949a7f3b43400766" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "mail"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "direcion"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "cedula" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "telefono" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "persona" ADD CONSTRAINT "FK_551ede1f9ac73b4e8f18495c6da" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "productos" ADD CONSTRAINT "FK_aee00189e42dd8880cdfe1bb1e7" FOREIGN KEY ("categoriaId") REFERENCES "categoria"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "productos" DROP CONSTRAINT "FK_aee00189e42dd8880cdfe1bb1e7"`);
        await queryRunner.query(`ALTER TABLE "persona" DROP CONSTRAINT "FK_551ede1f9ac73b4e8f18495c6da"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "telefono"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "cedula"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "direcion" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "password" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "mail" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`DROP TABLE "productos"`);
        await queryRunner.query(`DROP TABLE "persona"`);
    }

}
