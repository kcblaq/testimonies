/*
  Warnings:

  - You are about to drop the column `updatedBy` on the `Testimony` table. All the data in the column will be lost.
  - Added the required column `authorEmail` to the `Testimony` table without a default value. This is not possible if the table is not empty.
  - Added the required column `authorName` to the `Testimony` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedByEmail` to the `Testimony` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Testimony" DROP COLUMN "updatedBy",
ADD COLUMN     "authorEmail" TEXT NOT NULL,
ADD COLUMN     "authorName" TEXT NOT NULL,
ADD COLUMN     "updatedByEmail" TEXT NOT NULL;
