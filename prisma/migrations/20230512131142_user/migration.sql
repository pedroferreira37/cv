-- CreateTable
CREATE TABLE `user` (
    `id` VARCHAR(191) NOT NULL,
    `mail` VARCHAR(255) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `picture` VARCHAR(255) NULL,

    UNIQUE INDEX `user_mail_key`(`mail`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
