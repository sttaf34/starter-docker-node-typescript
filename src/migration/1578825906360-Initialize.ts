/* eslint-disable class-methods-use-this */
/* eslint-disable import/prefer-default-export */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { MigrationInterface, QueryRunner } from "typeorm"

export class Initialize1578825906360 implements MigrationInterface {
  name = "Initialize1578825906360"

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      "CREATE TABLE `user` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `age` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB",
      undefined
    )
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query("DROP TABLE `user`", undefined)
  }
}
