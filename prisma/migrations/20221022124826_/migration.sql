/*
  Warnings:

  - You are about to drop the `admin` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE `user` ADD COLUMN `user_type` INTEGER NOT NULL DEFAULT 0;

-- DropTable
DROP TABLE `admin`;
