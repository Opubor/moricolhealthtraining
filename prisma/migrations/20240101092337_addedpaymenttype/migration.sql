-- AlterTable
ALTER TABLE `enrollment` ADD COLUMN `paymentType` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `payment` ADD COLUMN `paymentType` VARCHAR(191) NULL;
