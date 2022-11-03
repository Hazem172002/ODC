-- DropIndex
DROP INDEX `Tickets_user_id_fkey` ON `tickets`;

-- AlterTable
ALTER TABLE `halla` ADD COLUMN `seats` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `hallb` ADD COLUMN `seats` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `hallc` ADD COLUMN `seats` VARCHAR(191) NULL;
