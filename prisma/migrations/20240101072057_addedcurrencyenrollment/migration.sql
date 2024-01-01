-- AlterTable
ALTER TABLE `enrollment` ADD COLUMN `currency` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `payment` ADD COLUMN `currency` VARCHAR(191) NULL;
