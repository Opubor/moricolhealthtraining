-- AlterTable
ALTER TABLE `enrollment` ADD COLUMN `noOfUsers` INTEGER NULL,
    MODIFY `phone` VARCHAR(191) NULL,
    MODIFY `email` VARCHAR(191) NULL;
