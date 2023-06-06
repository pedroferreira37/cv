/*
  Warnings:

  - You are about to drop the column `description` on the `resume` table. All the data in the column will be lost.
  - Added the required column `resumeId` to the `experience` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `education` MODIFY `degree` VARCHAR(191) NULL,
    MODIFY `institution` VARCHAR(191) NULL,
    MODIFY `start_date_year` VARCHAR(191) NULL,
    MODIFY `start_date_month` VARCHAR(191) NULL,
    MODIFY `end_date_year` VARCHAR(191) NULL,
    MODIFY `end_date_month` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `experience` ADD COLUMN `description` TEXT NULL,
    ADD COLUMN `resumeId` VARCHAR(191) NOT NULL,
    MODIFY `role` VARCHAR(191) NULL,
    MODIFY `company` VARCHAR(191) NULL,
    MODIFY `start_date_year` VARCHAR(191) NULL,
    MODIFY `start_date_month` VARCHAR(191) NULL,
    MODIFY `end_date_year` VARCHAR(191) NULL,
    MODIFY `end_date_month` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `resume` DROP COLUMN `description`,
    ADD COLUMN `about` TEXT NULL;

-- AddForeignKey
ALTER TABLE `experience` ADD CONSTRAINT `experience_resumeId_fkey` FOREIGN KEY (`resumeId`) REFERENCES `resume`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
