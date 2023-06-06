/*
  Warnings:

  - You are about to drop the `education` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `experience` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `education` DROP FOREIGN KEY `education_resumeId_fkey`;

-- DropForeignKey
ALTER TABLE `experience` DROP FOREIGN KEY `experience_resumeId_fkey`;

-- AlterTable
ALTER TABLE `resume` MODIFY `educationId` VARCHAR(191) NULL,
    MODIFY `experienceId` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `education`;

-- DropTable
DROP TABLE `experience`;

-- CreateTable
CREATE TABLE `educations` (
    `id` VARCHAR(191) NOT NULL,
    `degree` VARCHAR(191) NULL,
    `institution` VARCHAR(191) NULL,
    `start_date_year` VARCHAR(191) NULL,
    `start_date_month` VARCHAR(191) NULL,
    `end_date_year` VARCHAR(191) NULL,
    `end_date_month` VARCHAR(191) NULL,
    `resumeId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `educations_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `experiences` (
    `id` VARCHAR(191) NOT NULL,
    `role` VARCHAR(191) NULL,
    `company` VARCHAR(191) NULL,
    `start_date_year` VARCHAR(191) NULL,
    `start_date_month` VARCHAR(191) NULL,
    `end_date_year` VARCHAR(191) NULL,
    `end_date_month` VARCHAR(191) NULL,
    `description` TEXT NULL,
    `resumeId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `experiences_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `educations` ADD CONSTRAINT `educations_resumeId_fkey` FOREIGN KEY (`resumeId`) REFERENCES `resume`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `experiences` ADD CONSTRAINT `experiences_resumeId_fkey` FOREIGN KEY (`resumeId`) REFERENCES `resume`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
