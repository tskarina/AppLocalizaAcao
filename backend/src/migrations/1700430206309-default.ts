import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1700430206309 implements MigrationInterface {
    name = 'Default1700430206309'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "establishments" ("id" SERIAL NOT NULL, "name" text NOT NULL, "cnpj" text NOT NULL, "address" text NOT NULL, "description" text, "phone" text, "mobile" text, "cep" text NOT NULL, "email" text, "category" text NOT NULL, CONSTRAINT "PK_7fb6da6c365114ccb61b091bbdf" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "establishments"`);
    }

}
