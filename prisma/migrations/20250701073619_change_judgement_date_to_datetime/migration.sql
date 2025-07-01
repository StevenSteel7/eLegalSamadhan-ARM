/*
  Warnings:

  - You are about to alter the column `date` on the `Judgement` table. The data in that column could be lost. The data in that column will be cast from `String` to `DateTime`.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Judgement" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "caseNumber" TEXT NOT NULL,
    "court" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "summary" TEXT,
    "fullContent" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "category" TEXT NOT NULL
);
INSERT INTO "new_Judgement" ("caseNumber", "category", "court", "createdAt", "date", "fullContent", "id", "summary", "title", "updatedAt") SELECT "caseNumber", "category", "court", "createdAt", "date", "fullContent", "id", "summary", "title", "updatedAt" FROM "Judgement";
DROP TABLE "Judgement";
ALTER TABLE "new_Judgement" RENAME TO "Judgement";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
