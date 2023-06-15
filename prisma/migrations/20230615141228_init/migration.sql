/*
  Warnings:

  - Added the required column `template` to the `resume` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `resume` ADD COLUMN `template` VARCHAR(191) NOT NULL;
