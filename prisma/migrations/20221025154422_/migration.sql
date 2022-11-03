/*
  Warnings:

  - You are about to drop the column `seats` on the `halla` table. All the data in the column will be lost.
  - You are about to drop the column `seats` on the `hallb` table. All the data in the column will be lost.
  - You are about to drop the column `seats` on the `hallc` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `halla` DROP COLUMN `seats`;

-- AlterTable
ALTER TABLE `hallb` DROP COLUMN `seats`;

-- AlterTable
ALTER TABLE `hallc` DROP COLUMN `seats`;

-- CreateTable
CREATE TABLE `seatsA` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `hall_id` VARCHAR(191) NULL,
    `seat` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `seatsB` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `hall_id` VARCHAR(191) NULL,
    `seat` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `seatsC` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `hall_id` VARCHAR(191) NULL,
    `seat` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
