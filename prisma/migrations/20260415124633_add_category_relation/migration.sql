/*
  Warnings:

  - You are about to drop the column `categoryId` on the `Testimony` table. All the data in the column will be lost.
  - You are about to drop the `Category` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Testimony" DROP CONSTRAINT "Testimony_categoryId_fkey";

-- DropIndex
DROP INDEX "Testimony_categoryId_idx";

-- AlterTable
ALTER TABLE "Testimony" DROP COLUMN "categoryId";

-- DropTable
DROP TABLE "Category";
