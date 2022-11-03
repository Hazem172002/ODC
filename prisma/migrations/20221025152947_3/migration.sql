/*
  Warnings:

  - You are about to alter the column `seats` on the `halla` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `seats` on the `hallb` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `seats` on the `hallc` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `halla` MODIFY `seats` INTEGER NULL;

-- AlterTable
ALTER TABLE `hallb` MODIFY `seats` INTEGER NULL;

-- AlterTable
ALTER TABLE `hallc` MODIFY `seats` INTEGER NULL;
