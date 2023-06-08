/*
  Warnings:

  - You are about to drop the column `end_date_month` on the `educations` table. All the data in the column will be lost.
  - You are about to drop the column `end_date_year` on the `educations` table. All the data in the column will be lost.
  - You are about to drop the column `start_date_month` on the `educations` table. All the data in the column will be lost.
  - You are about to drop the column `start_date_year` on the `educations` table. All the data in the column will be lost.
  - You are about to drop the column `end_date_month` on the `experiences` table. All the data in the column will be lost.
  - You are about to drop the column `end_date_year` on the `experiences` table. All the data in the column will be lost.
  - You are about to drop the column `start_date_month` on the `experiences` table. All the data in the column will be lost.
  - You are about to drop the column `start_date_year` on the `experiences` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `educations` DROP COLUMN `end_date_month`,
    DROP COLUMN `end_date_year`,
    DROP COLUMN `start_date_month`,
    DROP COLUMN `start_date_year`,
    ADD COLUMN `end_date` DATETIME(3) NULL,
    ADD COLUMN `start_date` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `experiences` DROP COLUMN `end_date_month`,
    DROP COLUMN `end_date_year`,
    DROP COLUMN `start_date_month`,
    DROP COLUMN `start_date_year`,
    ADD COLUMN `end_date` DATETIME(3) NULL,
    ADD COLUMN `start_date` DATETIME(3) NULL;
