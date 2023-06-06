/*
  Warnings:

  - Made the column `email` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `users` MODIFY `email` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `resume` (
    `id` VARCHAR(191) NOT NULL,
    `educationId` VARCHAR(191) NOT NULL,
    `experienceId` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NULL,
    `role` VARCHAR(191) NULL,
    `mail` VARCHAR(191) NULL,
    `github` VARCHAR(191) NULL,
    `linkedin` VARCHAR(191) NULL,
    `description` TEXT NULL,
    `userId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `education` (
    `id` VARCHAR(191) NOT NULL,
    `degree` VARCHAR(191) NOT NULL,
    `institution` VARCHAR(191) NOT NULL,
    `start_date_year` VARCHAR(191) NOT NULL,
    `start_date_month` VARCHAR(191) NOT NULL,
    `end_date_year` VARCHAR(191) NOT NULL,
    `end_date_month` VARCHAR(191) NOT NULL,
    `resumeId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `education_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `experience` (
    `id` VARCHAR(191) NOT NULL,
    `role` VARCHAR(191) NOT NULL,
    `company` VARCHAR(191) NOT NULL,
    `start_date_year` VARCHAR(191) NOT NULL,
    `start_date_month` VARCHAR(191) NOT NULL,
    `end_date_year` VARCHAR(191) NOT NULL,
    `end_date_month` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `experience_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `resume` ADD CONSTRAINT `resume_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `education` ADD CONSTRAINT `education_resumeId_fkey` FOREIGN KEY (`resumeId`) REFERENCES `resume`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
