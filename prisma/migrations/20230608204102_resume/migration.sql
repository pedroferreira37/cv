/*
  Warnings:

  - Added the required column `current` to the `educations` table without a default value. This is not possible if the table is not empty.
  - Added the required column `current` to the `experiences` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `educations` ADD COLUMN `current` BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE `experiences` ADD COLUMN `current` BOOLEAN NOT NULL;
