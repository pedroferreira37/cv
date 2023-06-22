/*
  Warnings:

  - You are about to drop the column `end_date` on the `educations` table. All the data in the column will be lost.
  - You are about to drop the column `start_date` on the `educations` table. All the data in the column will be lost.
  - You are about to drop the column `end_date` on the `experiences` table. All the data in the column will be lost.
  - You are about to drop the column `start_date` on the `experiences` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `educations` DROP COLUMN `end_date`,
    DROP COLUMN `start_date`,
    ADD COLUMN `end_month` VARCHAR(191) NULL,
    ADD COLUMN `end_year` VARCHAR(191) NULL,
    ADD COLUMN `start_month` VARCHAR(191) NULL,
    ADD COLUMN `start_year` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `experiences` DROP COLUMN `end_date`,
    DROP COLUMN `start_date`,
    ADD COLUMN `end_month` VARCHAR(191) NULL,
    ADD COLUMN `end_year` VARCHAR(191) NULL,
    ADD COLUMN `start_month` VARCHAR(191) NULL,
    ADD COLUMN `start_year` VARCHAR(191) NULL;
