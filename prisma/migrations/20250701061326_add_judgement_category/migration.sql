/*
  Warnings:

  - Added the required column `category` to the `Judgement` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Judgement" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "caseNumber" TEXT NOT NULL,
    "court" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "summary" TEXT,
    "fullContent" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "category" TEXT NOT NULL
);
INSERT INTO "new_Judgement" ("caseNumber", "court", "createdAt", "date", "fullContent", "id", "summary", "title", "updatedAt") SELECT "caseNumber", "court", "createdAt", "date", "fullContent", "id", "summary", "title", "updatedAt" FROM "Judgement";
DROP TABLE "Judgement";
ALTER TABLE "new_Judgement" RENAME TO "Judgement";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
