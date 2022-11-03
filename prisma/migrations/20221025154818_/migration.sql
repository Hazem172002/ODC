/*
  Warnings:

  - You are about to alter the column `hall_id` on the `seatsa` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `hall_id` on the `seatsb` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `hall_id` on the `seatsc` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `seatsa` MODIFY `hall_id` INTEGER NULL,
    MODIFY `seat` INTEGER NULL;

-- AlterTable
ALTER TABLE `seatsb` MODIFY `hall_id` INTEGER NULL,
    MODIFY `seat` INTEGER NULL;

-- AlterTable
ALTER TABLE `seatsc` MODIFY `hall_id` INTEGER NULL,
    MODIFY `seat` INTEGER NULL;
