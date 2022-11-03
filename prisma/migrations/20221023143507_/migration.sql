-- CreateTable
CREATE TABLE `Popular` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `Ids` INTEGER NULL,
    `adult` BOOLEAN NULL,
    `backdrop_path` VARCHAR(191) NULL,
    `original_language` VARCHAR(191) NULL,
    `original_title` VARCHAR(191) NULL,
    `overview` VARCHAR(191) NULL,
    `popularity` DECIMAL(65, 30) NULL,
    `poster_path` VARCHAR(191) NULL,
    `release_date` VARCHAR(191) NULL,
    `title` VARCHAR(191) NULL,
    `video` BOOLEAN NULL,
    `vote_average` DECIMAL(65, 30) NULL,
    `vote_count` DECIMAL(65, 30) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
