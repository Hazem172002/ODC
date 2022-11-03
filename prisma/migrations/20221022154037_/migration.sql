/*
  Warnings:

  - You are about to drop the column `user_type` on the `user` table. All the data in the column will be lost.
  - You are about to drop the `film` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `type` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `film` DROP FOREIGN KEY `Film_typeId_fkey`;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `user_type`;

-- DropTable
DROP TABLE `film`;

-- DropTable
DROP TABLE `type`;
