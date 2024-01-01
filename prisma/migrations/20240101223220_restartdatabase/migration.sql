-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `role` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `gender` VARCHAR(191) NULL,
    `phone` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `businessType` VARCHAR(191) NULL,
    `registrationNumber` VARCHAR(191) NULL,
    `industry` VARCHAR(191) NULL,
    `resetPasswordToken` VARCHAR(191) NULL,
    `resetPasswordTokenExpiry` VARCHAR(191) NULL,
    `userId` VARCHAR(191) NOT NULL,
    `currency` VARCHAR(191) NULL DEFAULT 'NGN',

    UNIQUE INDEX `User_email_key`(`email`),
    UNIQUE INDEX `User_resetPasswordToken_key`(`resetPasswordToken`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Enrollment` (
    `id` VARCHAR(191) NOT NULL,
    `enrollmentId` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `course` VARCHAR(191) NOT NULL,
    `date` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `amount` BIGINT NOT NULL,
    `noOfUsers` INTEGER NULL,
    `timeTable` VARCHAR(191) NULL,
    `currency` VARCHAR(191) NULL,
    `paymentType` VARCHAR(191) NULL,

    INDEX `Enrollment_userId_idx`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CompanyEnrollment` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `phoneNumber` VARCHAR(191) NOT NULL,
    `enrollmentId` VARCHAR(191) NOT NULL,
    `companyId` VARCHAR(191) NOT NULL,

    INDEX `CompanyEnrollment_enrollmentId_idx`(`enrollmentId`),
    INDEX `CompanyEnrollment_companyId_idx`(`companyId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Payment` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `course` VARCHAR(191) NOT NULL,
    `date` VARCHAR(191) NOT NULL,
    `amount` BIGINT NOT NULL,
    `paymentStatus` VARCHAR(191) NOT NULL,
    `paymentId` VARCHAR(191) NOT NULL,
    `enrollmentId` VARCHAR(191) NOT NULL,
    `currency` VARCHAR(191) NULL,
    `paymentType` VARCHAR(191) NULL,

    INDEX `Payment_enrollmentId_idx`(`enrollmentId`),
    INDEX `Payment_userId_idx`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
