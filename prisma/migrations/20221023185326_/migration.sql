/*
  Warnings:

  - You are about to alter the column `time` on the `schedule` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Int`.

*/
-- AlterTable
ALTER TABLE `schedule` MODIFY `time` INTEGER NOT NULL;
