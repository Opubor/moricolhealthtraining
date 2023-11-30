/*
  Warnings:

  - Added the required column `email` to the `Enrollment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `Enrollment` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Enrollment" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "course" TEXT NOT NULL,
    "data" DATETIME NOT NULL,
    "status" TEXT NOT NULL,
    CONSTRAINT "Enrollment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Enrollment" ("course", "data", "id", "status", "userId") SELECT "course", "data", "id", "status", "userId" FROM "Enrollment";
DROP TABLE "Enrollment";
ALTER TABLE "new_Enrollment" RENAME TO "Enrollment";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
