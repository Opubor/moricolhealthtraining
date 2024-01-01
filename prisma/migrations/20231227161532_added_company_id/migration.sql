/*
  Warnings:

  - Added the required column `companyId` to the `CompanyEnrollment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `companyenrollment` ADD COLUMN `companyId` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE INDEX `CompanyEnrollment_companyId_idx` ON `CompanyEnrollment`(`companyId`);
