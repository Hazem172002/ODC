/*
  Warnings:

  - Added the required column `time` to the `HallA` table without a default value. This is not possible if the table is not empty.
  - Added the required column `time` to the `HallB` table without a default value. This is not possible if the table is not empty.
  - Added the required column `time` to the `HallC` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `halla` ADD COLUMN `time` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `hallb` ADD COLUMN `time` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `hallc` ADD COLUMN `time` INTEGER NOT NULL;
