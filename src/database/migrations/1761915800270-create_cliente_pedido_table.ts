import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateClientePedidoTable1761915800270 implements MigrationInterface {
    name = 'CreateClientePedidoTable1761915800270'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "roles" ("id" SERIAL NOT NULL, "nombre" character varying NOT NULL, "detalle" character varying NOT NULL, CONSTRAINT "PK_c1433d71a4838793a49dcad46ab" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "clientes" ("id" SERIAL NOT NULL, "nombre_completo" character varying NOT NULL, "dni" character varying NOT NULL, "telefono" character varying NOT NULL, CONSTRAINT "PK_d76bf3571d906e4e86470482c08" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "pedidos" ("id" SERIAL NOT NULL, "fecha" character varying NOT NULL, "estado" integer NOT NULL, "observaciones" character varying NOT NULL, CONSTRAINT "PK_ebb5680ed29a24efdc586846725" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "role_user" ("rolesId" integer NOT NULL, "userId" integer NOT NULL, CONSTRAINT "PK_c9667a1fe5b74f7427a3ab50025" PRIMARY KEY ("rolesId", "userId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_eb446d431a1abb9801e6ade445" ON "role_user" ("rolesId") `);
        await queryRunner.query(`CREATE INDEX "IDX_2a23ceb75c7511d0523c4aaf49" ON "role_user" ("userId") `);
        await queryRunner.query(`ALTER TABLE "role_user" ADD CONSTRAINT "FK_eb446d431a1abb9801e6ade4456" FOREIGN KEY ("rolesId") REFERENCES "roles"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "role_user" ADD CONSTRAINT "FK_2a23ceb75c7511d0523c4aaf492" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "role_user" DROP CONSTRAINT "FK_2a23ceb75c7511d0523c4aaf492"`);
        await queryRunner.query(`ALTER TABLE "role_user" DROP CONSTRAINT "FK_eb446d431a1abb9801e6ade4456"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_2a23ceb75c7511d0523c4aaf49"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_eb446d431a1abb9801e6ade445"`);
        await queryRunner.query(`DROP TABLE "role_user"`);
        await queryRunner.query(`DROP TABLE "pedidos"`);
        await queryRunner.query(`DROP TABLE "clientes"`);
        await queryRunner.query(`DROP TABLE "roles"`);
    }

}
