-- AlterTable
ALTER TABLE `user` ADD COLUMN `businessType` VARCHAR(191) NULL,
    ADD COLUMN `industry` VARCHAR(191) NULL,
    ADD COLUMN `registrationNumber` VARCHAR(191) NULL,
    MODIFY `gender` VARCHAR(191) NULL;
